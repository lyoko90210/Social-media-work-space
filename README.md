# Social-media-work-space

## Overview

Welcome to the Social Network API project! This API allows users to share their thoughts, react to friends' thoughts, and manage a friend list. Built with Express.js for routing, MongoDB for the database, and Mongoose for object data modeling, this project demonstrates the creation and management of a social network backend.

## Walkthrough Video

Watch the full demonstration of the Social Network API functionality in the following walkthrough video: [Social Network API Walkthrough](https://youtu.be/YdXVDt28YOU?si=oDU0LEqvBSaDUp6V)

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript Date Object

## Getting Started

Make sure you have the following installed:

- Node.js
- MongoDB

### Installation

1. Clone the repository:
    cd social-network-api
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the MongoDB server:
    ```sh
    mongod
    ```
4. Run the application:
    ```sh
    npm start
    ```

### API Endpoints

#### Users

- **GET** `/api/users` - Get all users
- **GET** `/api/users/:id` - Get a single user by ID
- **POST** `/api/users` - Create a new user
    ```json
    {
      "username": "lernantino",
      "email": "lernantino@gmail.com"
    }
    ```
- **PUT** `/api/users/:id` - Update a user by ID
- **DELETE** `/api/users/:id` - Delete a user by ID and associated thoughts

#### Thoughts

- **GET** `/api/thoughts` - Get all thoughts
- **GET** `/api/thoughts/:id` - Get a single thought by ID
- **POST** `/api/thoughts` - Create a new thought
    ```json
    {
      "thoughtText": "Here's a cool thought...",
      "username": "lernantino",
      "userId": "5edff358a0fcb779aa7b118b"
    }
    ```
- **PUT** `/api/thoughts/:id` - Update a thought by ID
- **DELETE** `/api/thoughts/:id` - Delete a thought by ID

#### Reactions

- **POST** `/api/thoughts/:thoughtId/reactions` - Add a reaction to a thought
- **DELETE** `/api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction from a though

