from datetime import datetime
from dotenv import load_dotenv
load_dotenv()

from nVision import app, db
from nVision.models import User, Board

#user_id, name, board_url, likes, is_private

boards = [
  (1,"DemoUser", "MyBoard", "https://i.ibb.co/VxFswZB/Screen-Shot-2020-11-20-at-1-41-55-AM.png", "200",False),
  (1,"DemoUser", "Dream Wedding","https://www.loveandlavender.com/wp-content/uploads/2010/05/beach-on-a-budget.png", "315", False),
  (1,"DemoUser", "Dinner Party", "https://i1.wp.com/www.thedreameryevents.com/wp-content/uploads/2018/08/Daddys-Birthday-Vision-Board-1.jpg?resize=600%2C450&ssl=1", "125", False),
  (1,"DemoUser", "Travel", "https://i.pinimg.com/originals/63/69/e1/6369e1f3b74b8edadc891723b9971789.jpg", "245", False),
  (1,"DemoUser", "Decor", "https://i.pinimg.com/originals/4d/65/3c/4d653cffa8cdd97c1dcf002ac63a22ed.jpg", "322", False),
  (1,"DemoUser", "Plans", "https://www.lovelustorbust.com/wp-content/uploads/2018/08/postcard-2851906_640.jpg", "175", True),
  (1,"DemoUser", "WishList", "https://i.pinimg.com/originals/63/69/e1/6369e1f3b74b8edadc891723b9971789.jpg", "304", True),
  (3,"TheDean", "Random", "https://www.lovelustorbust.com/wp-content/uploads/2018/08/postcard-2851906_640.jpg", "277", False),
  (3,"DannyGuy", "Wedding","https://cdn.shopify.com/s/files/1/1536/4861/articles/vision-board-2_1024x1024.jpg?v=1476395397", "315", False),
  (3,"YourFave", "Party", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "125", False),
  (2,"Jennie123", "Travel", "https://i.pinimg.com/originals/63/69/e1/6369e1f3b74b8edadc891723b9971789.jpg", "245", False),
  (2,"Brooklyn", "Decor", "https://i.pinimg.com/originals/27/1a/6a/271a6a89fb046c382bbc164dadab325b.jpg", "322", False),
  (2,"jman", "Plans", "https://www.lovelustorbust.com/wp-content/uploads/2018/08/postcard-2851906_640.jpg", "175", True),
  (4, "Angie", "WishList", "https://meandmytravelinghat.com/wp-content/uploads/2019/11/20191024_134445-1-1024x804.jpg", "304", True),
  (4,"CatchMeOutside",  "Random", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "277", False),
  (3,"TheDean", "Random", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "277", False),
  (3,"Lola333", "Wedding","https://cdn.shopify.com/s/files/1/1536/4861/articles/vision-board-2_1024x1024.jpg?v=1476395397", "315", False),
  (3,"TheDean", "Dinner Party", "https://i1.wp.com/www.thedreameryevents.com/wp-content/uploads/2018/08/Daddys-Birthday-Vision-Board-1.jpg?resize=600%2C450&ssl=1", "125", False),
  (2,"90sBaby", "India", "https://miro.medium.com/max/1000/1*RoJ7lItFwFkQgrAvZTcXUA.png", "245", False),
  (2,"Jenga", "Decor", "https://www.utahguildhall.com/wp-content/uploads/2014/10/Depositphotos_44323837_s.jpg", "322", False),
  (2,"Kirsten", "Plans", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "175", True),
  (4,"Mike", "WishList", "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg", "304", True),
  (4,"Julie", "Dream Bedroom", "https://i.pinimg.com/originals/32/7e/c7/327ec7c0020920a32354e343db8c5dcd.jpg", "277", False),
  (3,"Kenzie","Random", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "277", False),
  (3,"TheDean", "Dream Wedding","https://www.loveandlavender.com/wp-content/uploads/2010/05/beach-on-a-budget.png", "315", False),
  (3,"Mickey456", "Party", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "125", False),
  (2,"Jarvis", "Travel", "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg", "245", False),
  (2,"Elena", "House Plans", "https://images.squarespace-cdn.com/content/v1/5bc2757c01232c479ea43280/1554067588812-GQBEF9FY5T463ZIIF5GW/ke17ZwdGBToddI8pDm48kDGjogyIJpymPHNqr_Y0KFFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI-kPqxZQhC7paCwoM-rqRnezr321WMidWaUFO_wgu4TI/dvd+interior+design+ideas+boards+on+pinterest.png", "322", False),
  (2,"Merick", "Plans", "https://i.pinimg.com/originals/27/1a/6a/271a6a89fb046c382bbc164dadab325b.jpg", "175", True),
  (4,"Julie", "WishList", "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg", "304", True),
  (4,"Angie", "Random", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "277", False),
  (3,"YourFave", "Party", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "125", False),
  (2,"Jennie123", "Travel", "https://i.pinimg.com/originals/63/69/e1/6369e1f3b74b8edadc891723b9971789.jpg", "245", False),
  (2,"Brooklyn", "Decor", "https://i.pinimg.com/originals/27/1a/6a/271a6a89fb046c382bbc164dadab325b.jpg", "322", False),
  (2,"jman", "Plans", "https://www.lovelustorbust.com/wp-content/uploads/2018/08/postcard-2851906_640.jpg", "175", True),
  (4, "Angie", "WishList", "https://meandmytravelinghat.com/wp-content/uploads/2019/11/20191024_134445-1-1024x804.jpg", "304", True),
  (4,"CatchMeOutside",  "Random", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "277", False),
  (3,"TheDean", "Random", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "277", False),
  (3,"Lola333", "Wedding","https://cdn.shopify.com/s/files/1/1536/4861/articles/vision-board-2_1024x1024.jpg?v=1476395397", "315", False),
  (3,"TheDean", "Dinner Party", "https://i1.wp.com/www.thedreameryevents.com/wp-content/uploads/2018/08/Daddys-Birthday-Vision-Board-1.jpg?resize=600%2C450&ssl=1", "125", False),
  (2,"90sBaby", "India", "https://miro.medium.com/max/1000/1*RoJ7lItFwFkQgrAvZTcXUA.png", "245", False),
  (2,"Jenga", "Decor", "https://www.utahguildhall.com/wp-content/uploads/2014/10/Depositphotos_44323837_s.jpg", "322", False),
  (2,"Kirsten", "Plans", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "175", True),
  (4,"Mike", "WishList", "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg", "304", True),
  (4,"Julie", "Dream Bedroom", "https://i.pinimg.com/originals/32/7e/c7/327ec7c0020920a32354e343db8c5dcd.jpg", "277", False),
  (3,"Kenzie","Random", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "277", False),
  (3,"TheDean", "Dream Wedding","https://www.loveandlavender.com/wp-content/uploads/2010/05/beach-on-a-budget.png", "315", False),
  (3,"Mickey456", "Party", "https://myteacherwellness.com/wp-content/uploads/2017/09/vision-board.jpg", "125", False),
  (2,"Jarvis", "Travel", "https://jjsanjose.files.wordpress.com/2012/01/vision-board-2012-120111.jpg", "245", False),
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
