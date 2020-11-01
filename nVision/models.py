from flask_jwt_extended import create_access_token, get_jwt_identity
from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  first_name = db.Column(db.String(40), nullable = False)
  last_name = db.Column(db.String(40), nullable = False)
  email = db.Column(db.String(255), nullable = False, unique = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  hashed_password = db.Column(db.String(100), nullable=False)
  profile_picture_url = db.Column(db.String())
  friends = db.Column(db.String)
  created_at = db.Column(db.DateTime, nullable=False)
  updated_at = db.Column(db.DateTime, nullable=False)

  @property
  def password(self):
    return self.hashed_password

  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)

  def check_password(self, password):
    return check_password_hash(self.password, password)

  @classmethod
  def authenticate(cls, email, password):
    user = cls.query.filter(User.email == email).scalar()
    if user:
      return check_password_hash(user.hashed_password, password), user
    else:
      return False, None

  boards = db.relationship(
    "Board", back_populates="user", cascade="all, delete-orphan"
  )

  def to_dict(self):
    return {
      "id": self.id,
      "first_name": self.first_name,
      "last_name": self.last_name,
      "email": self.email,
      "username": self.username,
      "profile_picture_url": self.profile_picture_url,
      "friends": self.friends,
      "created_at": self.created_at,
      "updated_at": self.updated_at,

    }


class Board(db.Model):
  __tablename__ = "boards"

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  name = db.Column(db.String(40), nullable=False)
  board_url = db.Column(db.String, nullable=False)
  likes = db.Column(db.String)
  is_private = db.Column(db.Boolean, nullable=False)
  created_at = db.Column(db.DateTime, nullable=False)
  updated_at = db.Column(db.DateTime, nullable=False)

  user = db.relationship("User", back_populates="baords")
  comments = db.relationship("Comment", back_populates="board", cascade="all, delete-orphan")

  def to_dict(self):
    return {
      "id": self.id,
      "user_id": self.user_id,
      "name": self.name,
      "board_url": self.board_url,
      "likes": self.likes,
      "is_private": self.is_private,
      "created_at": self.created_at,
      "updated_at": self.updated_at,
    }


class Comment(db.Model):
  __tablename__ = 'comments'

  id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    board_id = db.Column(db.Integer, db.ForeignKey("boards.id"), nullable=False)
    content = db.Column(db.Text)
    created_at = db.Column(db.DateTime, nullable=False)

  user = db.relationship("User", back_populates="comments")
  board = db.relationship("Board", back_populates="comments")

  def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "board_id": self.board_id,
            "content": self.content,
            "created_at": self.created_at,
        }
