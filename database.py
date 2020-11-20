from datetime import datetime
from dotenv import load_dotenv
load_dotenv()

from nVision import app, db
from nVision.models import User, Board

#user_id, name, board_url, likes, is_private

boards = [
  (1,"DemoUser", "MyBoard", "https://i.ibb.co/VxFswZB/Screen-Shot-2020-11-20-at-1-41-55-AM.png", "200",False),
  (1,"DemoUser", "Wedding","https://cdn.shopify.com/s/files/1/1536/4861/articles/vision-board-2_1024x1024.jpg?v=1476395397", "315", False),
  (1,"DemoUser", "Party", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "125", False),
  (1,"DemoUser", "Travel", "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg", "245", False),
  (1,"DemoUser", "Decor", "https://i.pinimg.com/originals/4d/65/3c/4d653cffa8cdd97c1dcf002ac63a22ed.jpg", "322", False),
  (1,"DemoUser", "Plans", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "175", True),
  (1,"DemoUser", "WishList", "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg", "304", True),
  (3,"TheDean", "Random", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "277", False),
  (3,"TheDean", "Wedding","https://cdn.shopify.com/s/files/1/1536/4861/articles/vision-board-2_1024x1024.jpg?v=1476395397", "315", False),
  (3,"TheDean", "Party", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "125", False),
  (2,"jman", "Travel", "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg", "245", False),
  (2,"jman", "Decor", "https://i.pinimg.com/originals/4d/65/3c/4d653cffa8cdd97c1dcf002ac63a22ed.jpg", "322", False),
  (2,"jman", "Plans", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "175", True),
  (4, "Angie", "WishList", "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg", "304", True),
  (4,"Angie",  "Random", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "277", False),
  (3,"TheDean", "Random", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "277", False),
  (3,"TheDean", "Wedding","https://cdn.shopify.com/s/files/1/1536/4861/articles/vision-board-2_1024x1024.jpg?v=1476395397", "315", False),
  (3,"TheDean", "Party", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "125", False),
  (2,"jman", "Travel", "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg", "245", False),
  (2,"jman", "Decor", "https://i.pinimg.com/originals/4d/65/3c/4d653cffa8cdd97c1dcf002ac63a22ed.jpg", "322", False),
  (2,"jman", "Plans", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "175", True),
  (4,"Angie", "WishList", "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg", "304", True),
  (4,"Angie", "Random", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "277", False),
  (3,"TheDean","Random", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "277", False),
  (3,"TheDean", "Wedding","https://cdn.shopify.com/s/files/1/1536/4861/articles/vision-board-2_1024x1024.jpg?v=1476395397", "315", False),
  (3,"TheDean", "Party", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "125", False),
  (2,"jman", "Travel", "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg", "245", False),
  (2,"jman", "Decor", "https://i.pinimg.com/originals/4d/65/3c/4d653cffa8cdd97c1dcf002ac63a22ed.jpg", "322", False),
  (2,"jman", "Plans", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "175", True),
  (4,"Angie", "WishList", "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg", "304", True),
  (4,"Angie", "Random", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "277", False)
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
            saved = '8,9',
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

  db.session.add(demo)
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
        user_id = board[0],
        username = board[1]
        name = board[2],
        board_url = board[3]
        likes = board[4]
        is_private = board[5]
        created_at = datetime.now()
        board_t.append(created_at)
        db.session.add(Board(
            user_id=user_id,
            username=username,
            name=name,
            board_url=board_url,
            likes=likes,
            is_private=is_private,
            created_at=created_at,
            updated_at=created_at,
        ))

    db.session.commit()
