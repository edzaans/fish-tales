# Project description!

Project allow users to browse through sections of WebApp. 
Landing page is used as a root page to project with navigation, image carousel, album with pictures and general information about WebApp.
User can navigate through various components and create new post with their ionformation that will be stored in MongoDB Cloud database.
At the time only picture URLs can be added to new post!!!
User can also see recent posts and update them. Only some user information can be edited, like name, comment etc. They are not allowed to edit original post creation time.
Project was built with Mobile First approach, most of the styling is aimed at Mobile users although it is made responsive for devices with larger screens.

This app was built using React Framework.
React allowed  to create a well structured code base using various scripting / programming languages in one place.
It also allows for creating Frontnd and BackEnd codebase all in one app.

To develop this project i used Class Components insted of Functional approach due to dependency version changes with latest updates.

React BootStrap was used to create FrontEnd codebase, thus speeding up development process and keeping styling consistent. 
Only small amount of custom CSS was required for this project.

NodeJS was used to create server and communicate with database.

NPM (Node Package Manager) was used to manage packages used by React Framework.

MongoDB Atlas was used as a databse for this project and uses NoSql. 

# Getting Started

Recommended CLI - GitBash 

Project uses NodeJS for BackEnd, make sure you have it installed.

Project uses NPM, make sure you have it installed.

"https://nodejs.org/en/download/" install NodeJS

"npm install -g npm" install NPM 

# Running the APP

Clone project code from Main branch.
Run "npm install" in CLI to install all dependencies.
Once dependencies are installed, cd into Server folder
Run command "node index.js" to start the server on PORT 4000
To see App navigate to localhost://4000 

# Assets used

All images used  in Album are royalty free from www.pexels.com

# For troubleshooting

If you have issues running app its worth checking package.json file to see if all dependecies are istalled along with correct versions!!!




