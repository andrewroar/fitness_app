# Hints and Tips :tada:

Looks like we’re creating a workout tracker that can log the following:

- Multiple exercises:
  - Name
  - Type
  - Weight
  - Sets
  - Reps
  - Duration
- If it’s cardio, then you should be able to track the distance.

Looks like we have to ensure we can add exercises to a previous workout, add new exercises to a new workout and view the multiple combined weight of multiple exercises on a ‘stats’ page.

You’ve been given the frontend so it looks like you don’t need to do anything apart from implement the express/mongo/mongoose layer. Might be worth taking our generic express server and reusing that to get the frontend up and running quickly.

You’ve been given the Seed data to use inside of your NoSQL database already as well. The connection string might need modifying before it can be used.

You should have a folder structure similar to our previous mvc structure from before:

```
/
├── public/
│   ├── models/
│   └── routes/
│   └── seeders/
│   └── package.json
│   └── server.js

```

# Submission Checklist :rocket:

1. Your folder structure should resemeble that which is provided in the HINTS.md file, which itself resembles the structure we used with MVC.

1. Ensure that you submit both a link to your homework repo and it should be deployed on Heroku, **including the MongoDB database**!

   > See the Supplemental Folder in order to figure this out, we need to add this like we do with JAWS_DB for MySQL.

1. Ensure what you've submitted works when you grade it yourself against the:

   - The user stories provided
   - The acceptance criterias provided.
   - The business context provided.

1. Make sure your homework repo has a quality README that _you_ have written, and provide screenshots

1. Commit after most changes, all that code doesn't just appear first time :wink:

1. **Comment that JavaScript code :pray:**

```

```
