# /ETC.

ETC (stylized: /ETC.) is a random quote generator that might can inspire people for their daily life struggles. It's for you and for everyone. Maybe, Maybe not, I'm not sure.

One of qoutes says,

> "Your time is limited, don't waste it living someone else's life."
> by Steve Jobs

## Current Features

- User can register and login
- User can create a new qoute
- User can save or remove a qoute as favorites

## Future updates

- User can add a background image to a qoute
- User can share a qoute
- User can like or upvote a qoute

## User stories

> As a user, I want to be able to generate a random quote so that I can get inspired or entertained. I also want to be able to save a quote when I am logged in, so that I can access it later.

## Acceptance criteria

    1. When I visit the app, I should see a button labeled "Browse by Category.
    2. When I click on the "Browse by Category" button, a list of category should appear on the screen.
    3. The list of category should be clearly visible and readable.
    4. Each category  should have different qoute
    5. The app should have a collection of quotes to choose from, and it should not run out of quotes to display.

## Endpoints

Below is the list of API endpoints.

|  #  | Action | URL                             |  HTTP  |  CRUD  | Description                            |
| :-: | :----: | ------------------------------- | :----: | :----: | -------------------------------------- |
|  1  |  Post  | /api/v1/qoute                   |  POST  | Create | Create Add qoute                       |
|  2  |  Get   | /api/v1/qoute/list              |  GET   |  Read  | Get list of qoutes                     |
|  3  |  Get   | /api/v1/qoute/:id               |  GET   |  Read  | Get individual qoute                   |
|  4  | Delete | /api/v1/qoute                   | DELETE | Delete | Delete qoute                           |
|  5  | Patch  | /api/v1/qoute/:id               | PATCH  | Update | Edit qoute                             |
|  6  |  Get   | /api/v1/categories              |  GET   |  Read  | Get list of categories                 |
|  7  |  Get   | /api/v1/category/:categoryId    |  GET   |  Read  | Get list of qoutes based on categories |
|  8  |  Post  | /api/v1/qoute/favorites         |  POST  | Create | Add qoute to favorite                  |
|  9  |  Get   | /api/v1/qoute/favorites/:userId |  GET   |  Read  | Get user's favorite qoutes             |
| 10  |  Post  | /api/v1/login                   |  POST  | Create | Login user                             |
| 11  |  Post  | /api/v1/register                |  POST  | Create | Register user                          |
| 12  |  Post  | /api/v1/logout                  |  POST  | Create | Log out user                           |

## Technology

list of technologies use in this project.

- [React] - UI framework
- [Mongodb] - Database
- [ExpressJS] - Web Framework
- [NodeJS] - Web Server

[GitLab Repo]

[MUI]: https://mui.com/
[cors]: https://www.npmjs.com/package/cors
[dotenv]: https://www.npmjs.com/package/dotenv
[Mongodb]: https://www.mongodb.com/
[ExpressJS]: https://expressjs.com/
[NodeJS]: https://nodejs.org/en
[React]: https://react.dev/
[ERD]: https://lucid.app/lucidchart/34fa5db6-6eb2-427b-8753-406188834054/edit?viewport_loc=61%2C58%2C2300%2C1250%2C0_0&invitationId=inv_c231509e-89e0-4bd1-9571-53ec7009ecbb
[UML]: https://react.dev/
[GitLab Repo]: https://gitlab.com/uplift-code-camp/students/batch-16/rey-cornico/projects/-/tree/p4-react-app?ref_type=heads
[Trello]: https://react.dev/

# 🍞
