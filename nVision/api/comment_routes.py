from flask import Blueprint, jsonify, request, url_for
from nVision.models import User, Board, db, Comment
from flask_login import current_user, login_required
from datetime import datetime

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/')
def index():
    response = Comment.query.all()
    return {"Comments": [comment.to_dict() for comment in response]}

@comment_routes.route('/<int:bid>', methods=['POST'])
def add_comment(bid):
    if request.method == 'POST':
        if not request.is_json:
            return jsonify({"msg": "Missing JSON in request"}), 400

        user_id = request.json.get('user_id', None)
        content = request.json.get('content', None)
        if not content:
            return {"errors": ["No content provided"]}

        new_comment = Comment(
                            user_id=user_id,
                            board_id=bid,
                            content=content,
                            created_at=datetime.now()
        )
        db.session.add(new_comment)
        db.session.commit()
        return 'success'

@comment_routes.route('/<int:id>', methods=['DELETE'])
def del_comment(id):
    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()
    return 'success'
