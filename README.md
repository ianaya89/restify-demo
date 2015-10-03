restful-demo
=================

Blogging RESTful API using MongoDB, NodeJS and Restify.

## Prerequisites 
1. **MongodDB** installed and running.

2. Set your mongo url as var environment: `process.env.MONGO_URL`

## Install
`$ npm install`

## Run
`$ node server`

## API

### Article

1. Create Article  -> `POST /articles with Payload`

2. Update Article -> `PUT /articles/123 with Payload`

3. Delete Article -> `DELETE /articles/123`

4. View Article -> `GET /article/123`

### Comment
1. Create Comment -> `POST /articles/123/comments`

2. Update Comment -> `PUT /comments/123 with Payload`

3. Delete Comment -> `DELETE /comments/123`

4. View Comment -> `GET /comments/123`

### User
1. Create User -> `POST /users`

2. Update User -> `PUT /users/123`

3. Delete User -> `DELETE /users/123`

4. View User -> `GET /users/123`

