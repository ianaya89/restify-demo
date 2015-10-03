restful-demo
=================

Blogging RESTful API using MongoDB, NodeJS and Restify.

## Prerequisites 
1. *MongodDB* instance running.

2. Set your mongo as var environment: `process.env.MONGO_URL`

## Install
`$ npm install`

## Run
`$ node server`


## API
Resource Name |     HTTP Verbs      |     HTTP Methods

  Article         create Article        POST /articles with Payload
                  update Article        PUT /articles/123 with Payload
                  delete Article        DELETE /articles/123
                  view Article          GET /article/123

  Comment         create Comment        POST /articles/123/comments with Payload
                  update Coment         PUT /comments/123 with Payload
                  delete Comment        DELETE /comments/123
                  view Comment          GET /comments/123

  User            create User           POST /users with Payload
                  update User           PUT /users/123 with Payload
                  delete User           DELETE /users/123
                  view User             GET /users/123

