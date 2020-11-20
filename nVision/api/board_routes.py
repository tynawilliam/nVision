from flask import Blueprint, jsonify, request, url_for
from nVision.models import User, Board, db
from flask_login import current_user, login_required
from datetime import datetime

board_routes = Blueprint("boards", __name__)

@board_routes.route('/', methods=['GET', 'POST'])
def index():
    boards = Board.query.all()
    if request.method == 'GET':
        return {"Boards": [board.to_dict() for board in boards]}

    if request.method == 'POST':
        if not request.is_json:
            return jsonify({"msg": "Missing JSON in request"}), 400

        user_id = request.json.get('user_id', None)
        name = request.json.get('name', None)
        board_url = request.json.get('board_url', None)
        is_private = request.json.get('is_private', None)

        if not name:
            return {"errors": ["Board name not provided"]}

        new_board = Board(
            user_id=user_id,
            name=name,
            board_url=board_url,
            is_private=is_private,
            created_at=datetime.now(),
            updated_at=datetime.now()
        )
        db.session.add(new_board)
        db.session.commit()
        return {"Boards": [board.to_dict() for board in boards]}

@board_routes.route('/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def get_board(id):
    board = Board.query.get(id)
    if request.method == 'GET':
        return board.to_dict()

    if request.method == 'DELETE':
        db.session.delete(board)
        db.session.commit()
        return 'deleted'

    if request.method == 'PUT':
        board_dict = board.to_dict()
        if not request.is_json:
            return jsonify({"msg": "Missing JSON in request"}), 400

        board.name = request.json.get('name', None) or board_dict["name"]
        board.is_private = request.json.get('is_private', None) or board_dict["is_private"]
        boardupdated_at = datetime.now()
        db.session.commit()

        return board.to_dict()

@board_routes.route('/<int:id>/friends')
def friends_boards(id):
    user = User.query.get(id)
    if user.friends:
        friends_lst = user.friends.split(',')

        # boards = [Board.query.join(User, Board.user_id == User.id)
        #     .add_columns(Board.board_url, Board.created_at, Board.id, Board.name, User.username)
        #     .filter(Board.user_id == int(friend_id)).all() for friend_id in friends_lst]

        boards = [Board.query.filter(Board.user_id == int(friend_id)).all() for friend_id in friends_lst]
        f_boards = ([[val.to_dict() for val in board] for board in boards])
        print(f_boards)
        return {"friends_boards": f_boards}
    return {"friends_boards": []}

@board_routes.route('/<int:id>/saved')
def saved_boards(id):
    user = User.query.get(id)

    if user.saved:
        saved_boards = user.saved.split(',')

        boards = [Board.query.filter(Board.id == int(saved_id)).all() for saved_id in saved_boards]
        f_boards = ([[val.to_dict() for val in board] for board in boards])
        print(f_boards)

        return {"saved_boards": f_boards}
