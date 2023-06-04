# React Node Feedback Central

The web application that I wrote was a survey feedback application in which the user can sign in with their Gmail account and add credits to send out surveys to various other email addresses. The application takes in prompts for the email from the user and send those prompts to the user to have them either pick they were satisfied or they weren't

The purpose of writing this software was to learn more about how Node and React can work together. I have a bit of knowledge about Node and React but never knew how to have them interact with eachother. So I decided to learn more about how they can interact with one another and connect and communicate with eachother.

[Software Demo Video](https://youtu.be/0e5iZAhpk5o)

# Web Pages

**I didn't have a lot of time to decorate the application as much as I wanted because I was focusing on concepts and functionality more and ran out of time.**

## Landing

The landing page is the first page a user sees when they access the website. It gives a very basic run down of the application and how it works.

## Dashboard

The dashboard page is the page the user sees when they first login into their gmail account. On this page the user sees all surveys they have created, an option to add more credits, total credits, a logout feature, and a create new survey feature. It is the main screen of the application and allows for various actions to be used.

## Survey Create

The survey create page is a page in which a user can insert information into various fields and create a survey using the fields required.

## Survey Review

The survey review page allows for user to review their inputs and confirm that there are no mistakes in their wording or clients

# Development Environment

## Tools

- Mongo
  - Database used for storing user data and surveys
- Send Grid
  - Used to send out surveys to all users
- Google Api
  - Used to login users to application
- Stripe
  - Used to process payments to application
- Materialize Css
  - Used to simpify Css in application
- Railway
  - Hosting platform used to host server

## Programming Language & Libraries

- Javascript
- React
- React router dom
- Redux
- Lodash
- Express
- Cookie Session

# Useful Websites

- [Udemy](https://www.udemy.com/course/node-with-react-fullstack-web-development)
- [Stripe Docs](https://stripe.com/docs)

# Future Work

- One obvious imporvement that I need to make is to style the website better. A lot of this project was learning new concepts of React and Node and how they interact with one another, so I didn't have much time to decorate the website.
- Update API there are a couple of APIs that I use in my application and a couple of them are outdated. So I want to update the API to the latest verison and learn how to implement them in the current version.
