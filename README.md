# Nodejs-blog: Markdown Blog Website
## Project created following tutorial from [Web Dev Simplified](https://www.youtube.com/watch?v=1NrHkjlWVhM&t=1514s)

## Table of contents
* [General info](#general-info)
* [Main Technologies](#main-technologies)
* [Pre-requisites](#pre-requisites)
* [Setup](#setup)
* [Project Structure](#project-structure)
* [Url Paths](#url-paths)

## General info
This project is simple blog website mainly created with NodeJS and Express.
	
## Main Technologies
Project is created with:
* NodeJS version 18
* Express version 4.18.2
* MongoDB (mongoose version 7.4.0)

## Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 18.0.0

## Setup
To run this project, install dependencies and run the project with:
```
$ npm install
$ npm run devStart
```

## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **models/**              | Models define schemas that will be used in storing and retrieving data from Application database  |
| **routes/**              | Contain all express routes, separated by module/area of application                                      |
| **views/**               | Contains ejs file rendering the user interface          |
| **package.json**         | Contains npm dependencies          |
| **server.js**            | Entry point to express app       |

## URL Paths
The application running on `localhost:3000`, url paths as below:

| Route          | Description                                           |
|-----------------|-------------------------------------------------------|
| `/`        | Homepage of the blog.       |
| `/articles/new`          | Displays a form to create a new article.               |
| `/articles/:slug`        | Displays a specific article based on its slug.         |
| `/articles/edit/:id`     | Displays a form to edit an existing article.           |
