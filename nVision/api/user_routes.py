from flask import Blueprint, jsonify, request, url_for
from nVision.models import User, Board, db
from flask_login import current_user, login_required
from datetime import datetime
user_routes = Blueprint('users', __name__)

user_routes = Blueprint('users', __name__)

@user_routes.route('/')
def index():
  response = User.query.all()
  return { "users": [user.to_dict() for user in response]}

@user_routes.route('/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def get_user(id):
  user = User.query.get(id)
  if request.method == 'GET':
    res = user.to_dict()
    # response = User.query.get(id).join(User.boards)
    return res

  if request.method == 'DELETE':
    db.session.delete(user)
    db.session.commit()
    return 'deleted'

  if request.method == 'PUT':
    user_dict = user.to_dict()
    if not request.is_json:
      return jsonify({"msg": "Missing JSON in request"}), 400
    user.first_name = request.json.get('first_name', None) or user_dict["first_name"]
    user.last_name = request.json.get('last_name', None) or user_dict["last_name"]
    user.email = request.json.get('email', None) or user_dict["email"]
    user.username = request.json.get('username', None) or user_dict["username"]
    user.profile_picture_url = request.json.get('profile_picture_url', None) or user_dict["profile_picture_url"]
    user.updated_at = datetime.now()
    db.session.commit()
    return user.to_dict()

@user_routes.route('/<int:id>/friends', methods=['GET'])
def get_friends(id):
  if request.method == 'GET':
    user = User.query.get(id)
    friends_lst = user.friends.split(',')
    return {"friends": friends_lst}
