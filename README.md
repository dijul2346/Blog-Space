# Blog Space

A simple blogging platform built with Node.js, Express, MongoDB, and JWT authentication.

## Features

- User signup and signin with JWT authentication
- Create, read, and delete blog posts
- Input validation using Zod
- MongoDB for data storage (Mongoose ODM)
- CORS enabled for frontend-backend communication
- Environment variables for sensitive data

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB Atlas account or local MongoDB

### Installation

1. **Clone the repository:**
    ```sh
    git clone <your-repo-url>
    cd Blog-Space/Blog-Space/src/backend
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in `Blog-Space/Blog-Space/src/backend`:

    ```
    MONGODB_URI=your-mongodb-uri
    JWT_SECRET=your-secret-key
    ```

4. **Start the server:**
    ```sh
    node index.cjs
    ```
    The server will run on [http://localhost:3000](http://localhost:3000).

## API Endpoints

### Auth

- `POST /signup`  
  Body: `{ "name": "...", "userName": "...", "password": "..." }`

- `POST /signin`  
  Body: `{ "userName": "...", "password": "..." }`  
  Returns: `{ "token": "..." }`

### Blogs

- `POST /blogs`  
  Headers: `{ token: <JWT token> }`  
  Body: `{ "title": "...", "content": "..." }`

- `GET /blogs/:bid`  
  Get a blog by ID

- `GET /blogs`  
  Get all blogs (auth required)

- `GET /blogs/:un`  
  Get blogs by username (auth required)

- `DELETE /blogs/:bid`  
  Delete a blog by ID (auth required)

## Project Structure

```
Blog-Space/
  Blog-Space/
    src/
      backend/
        index.cjs
        mongo.cjs
        modules.cjs
        .env
        .gitignore
```

## Security

- **Never commit your `.env` file.**  
  Make sure `.env` is listed in `.gitignore`.

## License