# Blog Frontend

This is the frontend for the Blog application. The frontend is built using React.js and provides a user interface for viewing, creating, updating, and deleting blog posts.


## Components

- **Header**: Contains the top navigation or branding.
- **Footer**: Contains the footer content.
- **PostList**: Displays a list of blog posts.
- **PostDetail**: Displays the details of a specific blog post.
- **PostForm**: Provides a form for creating and updating blog posts.

## Backend Integration

The frontend is integrated with a backend server to manage blog posts. The backend provides the following API endpoints:

- **GET /api/posts**: Retrieves all blog posts.
- **GET /api/posts/:id**: Retrieves a specific blog post by ID.
- **POST /api/posts**: Creates a new blog post.
- **PUT /api/posts/:id**: Updates an existing blog post by ID.
- **DELETE /api/posts/:id**: Deletes a blog post by ID.

To run the frontend locally:

1. **Clone the repository**:
    ```bash
    git clone 
    cd frontend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```
   The application will be available at `http://localhost:3000`.

## Usage

- **View Posts**: The `PostList` component displays all the available blog posts.
- **View Post Details**: Clicking on a post will navigate to the `PostDetail` component, showing more information about the selected post.
- **Create/Update Post**: The `PostForm` component allows you to create a new post or update an existing one.
- **Delete Post**: Posts can be deleted directly from the `PostDetail` view.

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **React Router**: Library for handling routing in the React application.
- **Axios**: Promise-based HTTP client for making requests to the backend API.
- **CSS**: Used for styling the components.

Deployed Link:https://bhagyablogfrontend.netlify.app/