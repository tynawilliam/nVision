# Backend API Routes

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
