# Beginning Node.js, Express and MongoDB Development

by Greg Lim, published by Greg Lim July 2019.

Started reading/studying this book on June 22, 2021.

This repo contains the exercises and examples of the book.

## Chapter 01: Introduction

## Chapter 02: Introduction to NPM & Express

## Chapter 03: Beginning Our Blog Project

## Chapter 04: Templating Engines

## Chapter 05: Introduction to MongoDB

## Chapter 06: Applying MongoDB to Our Project

## Chapter 07: Uploading an Image with Express

## Chapter 08: Introduction to Express Middleware

## Chapter 09: Refactoring to MVC

## Chapter 10: User Registration

## Chapter 11: User Authentication with Express Sessions

June 29, 2021

## Chapter 12: Showing Validation Errors

June 29, 2021

Created this repo starting on this chapter. I felt I need to create another branch to try working on the **validation errors for checking on invalid existing users (e.g. Error mesage: Invalid user or password)**

## Chapter 13: Relating Posts Collection with Users Collection

June 30, 2021

## Chapter 14: Adding a WYSIWYG Editor

June 30 2021

The instructions on this chapter is OK. Another thing I'd like to change in the design of this project is to **add another field on the blog schema**. There seems to be an ambiguity between the blog description and blog body. A blog description should contain few sentences which describes the blog while the blog body contains all the details on the blog.

## Chapter 15: Using MongoDB Atlas

June 30 2021

There are 2 corrections that I needed to point out here:

- The mongoose connection string should be: 'mongodb+srv://arnelarnaldo:<_Password_>@ahcluster1.yonmz.mongodb.net/<_dbasename_>?retryWrites=true&w=majority'
- In CREATE DATABASE in MongoDB Compass, the Collection Name needs to be filled in to create the database but this will be overriden by the app itself when the model is created.

Some other nice features to include in this app are:

1. A way to edit the blog body by the user who posted it.
2. A way to add comments on the blog.

## Chapter 16: Deploy Web Apps on Heroku

I'm having some challenges deploying to Heroku

## Added Feature #1:

July 1 2021

Added the following feature:

- Added one field for BlogPost: **Description**
  The Description field will contain short description of the blog; it will be distinct from the Body; the Description will be displayed on the main page while the Body is not.

## Added Feature #2:

July 1 2021

Added the following feature:

- Added one field for BlogPost: **Description**
  The Description field will contain short description of the blog; it will be distinct from the Body; the Description will be displayed on the main page while the Body is not.
