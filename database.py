from datetime import datetime
from dotenv import load_dotenv
load_dotenv()

from nVision import app, db
from nVision.models import User, Board

#user_id, name, board_url, likes, is_private

boards = [
  (1, "MyBoard", "https://images.squarespace-cdn.com/content/v1/56219993e4b09501ec54f74a/1492459278105-Z7JABV54FEMPF0HO9G6A/ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIeQMKeWYgwh6Mn73n2eZmZLHHpcPIxgL2SArp_rN2M_AKMshLAGzx4R3EDFOm1kBS/Vision+Board", "200",False),
  (1, "Wedding","https://cdn.shopify.com/s/files/1/1536/4861/articles/vision-board-2_1024x1024.jpg?v=1476395397", "315", False),
  (1, "Party", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "125", False),
  (1, "Travel", "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg", "245", False),
  (1, "Decor", "https://i.pinimg.com/originals/4d/65/3c/4d653cffa8cdd97c1dcf002ac63a22ed.jpg", "322", False),
  (1, "Plans", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "175", True),
  (1, "WishList", "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg", "304", True),
  (3, "Random", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "277", False),
  (3, "Wedding","https://cdn.shopify.com/s/files/1/1536/4861/articles/vision-board-2_1024x1024.jpg?v=1476395397", "315", False),
  (3, "Party", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "125", False),
  (2, "Travel", "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg", "245", False),
  (2, "Decor", "https://i.pinimg.com/originals/4d/65/3c/4d653cffa8cdd97c1dcf002ac63a22ed.jpg", "322", False),
  (2, "Plans", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "175", True),
  (4, "WishList", "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg", "304", True),
  (4, "Random", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "277", False),
  (3, "Random", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "277", False),
  (3, "Wedding","https://cdn.shopify.com/s/files/1/1536/4861/articles/vision-board-2_1024x1024.jpg?v=1476395397", "315", False),
  (3, "Party", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "125", False),
  (2, "Travel", "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg", "245", False),
  (2, "Decor", "https://i.pinimg.com/originals/4d/65/3c/4d653cffa8cdd97c1dcf002ac63a22ed.jpg", "322", False),
  (2, "Plans", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "175", True),
  (4, "WishList", "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg", "304", True),
  (4, "Random", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "277", False),
  (3, "Random", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "277", False),
  (3, "Wedding","https://cdn.shopify.com/s/files/1/1536/4861/articles/vision-board-2_1024x1024.jpg?v=1476395397", "315", False),
  (3, "Party", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "125", False),
  (2, "Travel", "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg", "245", False),
  (2, "Decor", "https://i.pinimg.com/originals/4d/65/3c/4d653cffa8cdd97c1dcf002ac63a22ed.jpg", "322", False),
  (2, "Plans", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "175", True),
  (4, "WishList", "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg", "304", True),
  (4, "Random", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "277", False)
]

with app.app_context():
  db.drop_all()
  db.create_all()

  demo = User(
            first_name = "Demo",
            last_name = "User",
            email = 'demo@user.com',
            username = 'DemoUser',
            password = "password",
            profile_picture_url = 'https://primandprosper.org/wp-content/uploads/2019/02/Black-Girl-Magic.png',
            friends = '2,3,4',
            created_at = datetime.now(),
            updated_at = datetime.now()
            )
  javier =  User(
            first_name = "Javier",
            last_name = "James",
            email = 'javier@javier.com',
            username = 'jman',
            password = "password",
            profile_picture_url = 'https://primandprosper.org/wp-content/uploads/2019/02/Black-Girl-Magic.png',
            friends = '1,3,4',
            created_at = datetime.now(),
            updated_at = datetime.now()
            )
  dean =  User(
            first_name = "Dean",
            last_name = "Person",
            email = 'dean123@dean.com',
            username = 'TheDean',
            password = "password",
            profile_picture_url = 'https://primandprosper.org/wp-content/uploads/2019/02/Black-Girl-Magic.png',
            friends = '2,1,4',
            created_at = datetime.now(),
            updated_at = datetime.now()
            )
  angela =  User(
            first_name = "Angela",
            last_name = "Martin",
            email = 'ang123@ang.com',
            username = 'Angie',
            password = "password",
            profile_picture_url = 'https://primandprosper.org/wp-content/uploads/2019/02/Black-Girl-Magic.png',
            friends = '2,3,1',
            created_at = datetime.now(),
            updated_at = datetime.now()
            )

  db.session.add(ian)
  db.session.add(javier)
  db.session.add(dean)
  db.session.add(angela)

  db.session.commit()

with app.app_context():

    # avg number of posts per user
    #n_post_per_user = 0
    n_board = len(boards)

    board_t = []
    for board in boards:
        user_id = board[0]
        name = board[1],
        board_url = board[2]
        likes = board[3]
        is_private = board[4]
        created_at = datetime.now()
        board_t.append(created_at)
        db.session.add(Board(
            user_id=user_id,
            name=name,
            board_url=board_url,
            likes=likes,
            is_private=is_private,
            created_at=created_at,
            updated_at=created_at,
        ))

    db.session.commit()
