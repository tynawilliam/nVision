from datetime import datetime
from dotenv import load_dotenv
load_dotenv()

from nVision import app, db
from nVision.models import User

with app.app_context():
  db.drop_all()
  db.create_all()

  ian = User(
            first_name = "Ian",
            last_name = "Michelin",
            email = 'ian123@ian.com',
            username = 'Ian',
            password = "password",
            created_at = datetime.now(),
            updated_at = datetime.now()
            )
  javier =  User(
            first_name = "Javier",
            last_name = "James",
            email = 'javier@javier.com',
            username = 'jman',
            password = "password",
            created_at = datetime.now(),
            updated_at = datetime.now()
            )
  dean =  User(
            first_name = "Dean",
            last_name = "Person",
            email = 'dean123@dean.com',
            username = 'TheDean',
            password = "password",
            created_at = datetime.now(),
            updated_at = datetime.now()
            )
  angela =  User(
            first_name = "Angela",
            last_name = "Martin",
            email = 'ang123@ang.com',
            username = 'Angie',
            password = "password",
            created_at = datetime.now(),
            updated_at = datetime.now()
            )

  db.session.add(ian)
  db.session.add(javier)
  db.session.add(dean)
  db.session.add(angela)

  db.session.commit()
