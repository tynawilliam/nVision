# nVision 
## Vision Boarding for the modern consumer
By Tyna William

## Software Architecture
  nVision was built on a Python, Flask and PostgresQL backend, and a JavaScript React front end. The database user model allows user profiles to be created with a username, email and password, where the original password is hashed before being stored in the database. User can later add a profile picture which is stored in a
  
### Technologies Used
  - React
  - PostgreSQL
  - SQLAlchemy
  - AWS S3
  - Flask
  - KonvaJS
  - React-Konva
  
### Key Features
  - User Authentication
    - Python's Werkzeug security hashing functionality on backend
    - Auth routes on front end to restrict unauthorized access to user specific site features
    - User's can edit profile information
  
  - Create Vision Boards
    - KonvaJS and Reactdnd API's facilitate drag and drop functionality allowing user's to arrange boards to their liking
    - State of current board saves to local storage so user won't lose progress on a page refresh
    - AWS S3 incorporated to allow users to save, retrieve and download boards 
    
  - Board Feed
    - User can browse boards of other user's they follow
    - Ability to like and save boards created by other users
  
  - Follow Users
    - Ability to follow other users

### Log in Screen
Users can Log in to existing accounts or sign up for a new account

![Login Screen](https://raw.githubusercontent.com/tynawilliam/nVision/master/Documentation/Pages/Login%20Screen.png)

### Canvas
Users can create unique vision boards by dragging and dropping images, color stickers and text onto canvas

![Canvas](https://raw.githubusercontent.com/tynawilliam/nVision/master/Documentation/Pages/canvasW%3AMenu.png)

### Feed
Users get to view, like and save boards from people they follow

![Feed](https://raw.githubusercontent.com/tynawilliam/nVision/master/Documentation/Pages/HomePage.png)


# API Endpoints
## Users
### URL Prefix '/api/users'
- GET / - Return all users
- GET /:id - Return user at id include boards and board comments
- GET /:id/friends - Return all friends of user at id
- PUT /:id - Edit user at id
- DELETE /:id - Delete user at id

## Boards
### URL Prefix '/api/boards'
- GET / - Return all boards
- GET /:id - Return board at id include comments
- GET /:id/friends - Return all boards of friends for user at id
- POST / - Create new board
- PUT /:id - Edit board at id
- DELETE /:id - Delete board at id

## Comments
### URL Prefix '/api/comments'
- POST /:bid - Create comment on board at id
- DELETE /:id - Delete comment at id

## App
### URL Prefix '/api'
- POST /signup - Create new user
- POST /login - Login user
- POST /logout - Logout current user

## Drag and Drop Functionality
KonvaJS and React dnd APIs used to create drag and drop functionality

![Drag n Drop](https://raw.githubusercontent.com/tynawilliam/nVision/master/Documentation/Screen%20Shot%202020-11-13%20at%2011.53.58%20AM.png)
