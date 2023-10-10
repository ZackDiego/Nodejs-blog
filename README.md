# Nodejs-blog: Markdown Blog Website
## Project created following tutorial from [Web Dev Simplified](https://www.youtube.com/watch?v=1NrHkjlWVhM&t=1514s)


Using NodeJS, Express, And MongoDB

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This project is simple Lorem ipsum dolor generator.
	
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

  Navigate to `http://localhost:8001`

- API Document endpoints

  swagger Spec Endpoint : http://localhost:8001/api-docs 

  swagger-ui  Endpoint : http://localhost:8001/docs 


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

| Path           | Description                        |
| -------------- | ---------------------------------- |
| `/`        | Homepage of the blog.       |
| `/about`       | About us page.                     |
| `/contact`     | Contact us page.                   |
| `/articles/new`    | Path for creating a new blog post. |
| `/blog/:id`    | Path for viewing a specific blog post identified by its ID. |

### Articles RESTful API Paths

| Route          | Description                                           |
|-----------------|-------------------------------------------------------|
| `/`        | Homepage of the blog.       |
| `/articles/new`          | Displays a form to create a new article.               |
| `/articles/:slug`        | Displays a specific article based on its slug.         |
| `/articles/edit/:id`     | Displays a form to edit an existing article.           |
