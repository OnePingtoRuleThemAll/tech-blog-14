# CMS-Style Tech Blog Site
This project aims to develop a CMS-style blog site that caters to developers who write about technology. The site allows users to publish articles, blog posts, and their thoughts and opinions on various tehc-related topics. The application follows a set of acceptance criteria to ensure a seamless user experience.

## User Story
As a developer who writes about tech, I want a CMS-style blog site so that I can easily publish and manage my articles, blog posts, and opinions.

## Acceptance Criteria
1. Homepage Presentation:
- When visitn the site for the first time, users are presented with the homepage.
- The homepage includes existing blog posts if any have been posted.
- Navigation links for the homepage and the dashboard are visible.
- Users have the option to log in to the site.
2. Homepage Navigation:
- Clicking the "Homepage" option in the navigation takes users to the homepage.
3. Navigation Links:
- Clicking on any other links in the navigation prompts users to either sign up or sign in.
4. User registration:
- When choosing to sign up, users are prompted to create a username and password.
-Clicking on the sign-up button saves the user credentials and logs the user into the site.
5. Returning User Sign-in:
- When revisiting the site at a later time and choosing to sign in, users are prompted to enter their username and password.
- Once signed in, users see navigation links for the homepage, the dashboard, and the option to log out. 
6. HOmepage with Blog Posts:
- Clicking on the homepage option in the navigation (while signed in) takes users to the homepage, where they can see existing blog posts.
- The blog posts display the post title and the date they were created.
7. Viewing an Existing Blog Post:
- Clicking on an existing blog post on the homepage presents users with the post title, contents, post creator's username, and date created.
- Users have the option to leave a comment.
8. Adding Comments to a Blog Post:
- When signed in, users can enter a comment and click the submit button.
- The comment is saved, and the blog post is updated to display the comment, the comment creator's name, and the date created.
9. Dashboard Access: 
- Clicking on the dashboard option in the navigation takes users to the dashboard.
- The dashboard displays any blog posts the suer has already created offers the option to add a new blog post.
10. Adding a New Blog Post:
- Clicking on the button to add a new blog post prompts users to enter both a title and contents for the blog post.
11. Managing Existing Blog Posts:
- In the dashboard, users can click on one of their existing posts to delete or update it.
- After performing the action, users are taken back to an updated dashboard.
12. Logging Out:
- Clicking on the logout option in the navigation signs the user out of the site.
13. Idle Timeout:
- If a user is idle on the sit for more than a set time, they can still view posts and comments, but they are prompted to log in again before adding, updating, or deleting posts.

## Technologies Used
The CMS-style tech blog site is developed using the following technologies:
- Front-end: HTML, CSS, JavaScript
- Back-end: Node.js, Express.js
- Database: MongoDB (or any suitable database for data storage)
- User Authentication: JWT (JSON Web Tokens) for secure authentication and session management.

## Installation and Usage
To set up and run the CMS-style blog site, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies using 'npm install'.
3. Set up the database and configure the connection.
4. Run the server using 'npm start' or your preferred method.
5. Access the site via your preferred web browser.

## Contributions
Contributions to the project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the project repository.

## License
The CMS-style tech blog site is licensed uner the MIT License.
