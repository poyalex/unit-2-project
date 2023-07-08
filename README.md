## API Overview:
-This API allows a user to login and create blog posts

<div>
<a href = "https://imgur.com/a/7ChRFso"> Link to Wireframe + Data Associations<a>
</div>

## Requirements:
-node.js, VSCode, npm, nodemon (globally installed)
## Installation:
1: To clone the repository, use the terminal to navigate to the location where you wish to store the repository
2: Once there use the following command to begin cloning: <br>
`git clone git@github.com:poyalex/unit-2-project.git` <br>
3: Once downloaded use the terminal to enter the repository and run the following commands: <br>
a: Create .env file: <br> `touch .env`<br>
b: launch VSCode:<br> `code .` <br>
4: With VSCode launched, open your dot env file and paste the below into the file: <br>
`MONGO_URI=mongodb+srv://<USERNAME HERE>:<PASSWORD HERE>@cluster0.3kjjsag.mongodb.net/unit-2-project?retryWrites=true&w=majority`<br>
Make sure to update the username and password with your Monfodb credentials
5: Open a terminal within VSCode. In that terminal navigate to your cloned repository
6: Run the command `npm i` to install the modules for express, mongoose, bcrypt, dotenv, jsonwebtoken, morgan, jest, supertest, and mongodb-memory-server
7: Run `npm run dev` to start the server and connect to mongoDB
8: Run `npm run test` to run testing to ensure that the routes and controllers are functioning
9: In postman create a new user and copy the token that is created for said user. Add that as a bearer token under authorization. Each of the routes can now be test. Make sure the base route is `localhost:3000/`
## Technologies Used:
node.js & mongoDB
## Icebox items:
-To add functionality to pull all posts made by a single user
