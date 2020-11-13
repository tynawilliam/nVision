# nVision 
## Vision Boarding for the modern consumer

### Log in Screen
Users can Log in to existing accounts or sign up for a new account

![Login Screen](https://raw.githubusercontent.com/tynawilliam/nVision/master/Documentation/Pages/Login%20Screen.png)

### Canvas
Users can create unique vision boards by dragging and dropping images, color stickers and text onto canvas

![Canvas](https://raw.githubusercontent.com/tynawilliam/nVision/master/Documentation/Pages/canvasW%3AMenu.png)

### Feed

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

## Drag and Drop Using Reactdnd
![Drag n Drop](https://raw.githubusercontent.com/tynawilliam/nVision/master/Documentation/Screen%20Shot%202020-11-13%20at%2011.53.58%20AM.png)
