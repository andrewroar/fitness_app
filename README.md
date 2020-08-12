# Unit 17 Nosql Homework: Workout Tracker Homework

I have been given the seed and the frontend of the Track app and was required to complete the back end of the app.

## User Story

As the frontend is a bit confusing, it took me a while to fully understand the app. I deployed mongoDB as the database for the app and completed the route to handle to get and put request of the frontend. While the app is currently functional there are some problem I need to work with the frontend to improve the app.

First, the public file need to be organised

Second, the date in the seed are generated as a number which is something I struggle to reproduce. I also do not understand the decision behind this and will need more information to work on that

## Business Context

A consumer will reach their fitness goals quicker when they track their workout progress.

## Breakdown

Models: It contains the schema for the app. The main thing to beware in here is that in the exercises of the schema, I did not put any requirement or limitation in it as there are two set of different datas generated from the frontend and I fear that any requirement might confuse the database. I will try to put some requirements in the future in a way it would not break the app.

Public: This file needed to be organised in the future

Routes: Contains all the route for the front end. I did not put a route for /api/workouts/range as I believe it serves no purpose.

Seeders: contain the seed of the app and was given by the front end. It did not work in Heroku by default so I added {useUnifiedTopology: true} to the connection
