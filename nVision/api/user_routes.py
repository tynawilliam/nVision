from flask import Blueprint, jsonify
from nVision.models import User
from flask_login import current_user, login_required
user_routes = Blueprint('users', __name__)

user_routes = Blueprint('users', __name__)

@user_routes.route('/')
def index():
  response = User.query.all()
  return { "users": [user.to_dict() for user in response]}
