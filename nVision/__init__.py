import os
from datetime import datetime
from flask import Flask, render_template, request, session, jsonify
from flask_cors import CORS
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import (
    LoginManager,
    current_user,
    login_user,
    logout_user,
    login_required
)

from nVision.models import db, User, Board, Comment
from nVision.api.user_routes import user_routes
from nVision.api.board_routes import board_routes
from nVision.api.comment_routes import comment_routes
from nVision.config import Config

app = Flask(__name__)

login_manager = LoginManager(app)
app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(board_routes, url_prefix='/api/boards')
app.register_blueprint(comment_routes, url_prefix='/api/comments')
db.init_app(app)

## Application Security
CORS(app)
# CSRFProtect(app)


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')


# @app.route('/api/csrf/restore')
# def restore_csrf():
#     id = current_user.id if current_user.is_authenticated else None
#     return {'csrf_token': generate_csrf(), "current_user_id": id}


@app.route('/login', methods=['GET', 'POST'])
def login():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    email = request.json.get('email', None)
    password = request.json.get('password', None)

    if not email or not password:
        return {"errors": ["Missing required parameters"]}, 400

    authenticated, user = User.authenticate(email, password)
    # print(authenticated)
    # print(user)
    if authenticated:
        login_user(user)
        return {"current_user_id": current_user.id, "current_user": current_user.to_dict()}

    return {"errors": ["Invalid email or password"]}, 401

@app.route('/signup', methods=['POST'])
def signup():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    first_name = request.json.get('first_name', None)
    last_name = request.json.get('last_name', None)
    email = request.json.get('email', None)
    username = request.json.get('username', None)
    password = request.json.get('password', None)
    password2 = request.json.get('password2', None)
    profile_picture_url = request.json.get('profile_picture_url', None)
    friends = request.json.get("friends", None)

    if not username or not email or not password:
        return {"errors": ["Missing required parameters"]}, 400

    if not password == password2:
        return {"errors": ["Passwords must match each other"]}, 400

    new_user = User(
        first_name=first_name,
        last_name=last_name,
        email=email,
        username=username,
        password=password,
        profile_picture_url=profile_picture_url,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(new_user)
    db.session.commit()
    # return redirect('/api/users')

    authenticated, user = User.authenticate(email, password)
    if authenticated:
        login_user(user)
        return {"current_user_id": current_user.id, "current_user": current_user.to_dict()}

    return {"errors": ["Invalid email, and/or password"]}, 401

@app.route('/restore')
def restore():
    id = current_user.id if current_user.is_authenticated else None
    user = None if not current_user.is_authenticated else current_user.to_dict()
    if current_user:
        return {"current_user_id": id, "current_user": user}

@app.route('/logout', methods=['POST'])
@login_required
def logout():
    logout_user()
    return {'msg': 'You have been logged out'}, 200
