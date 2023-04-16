# Votek
Votek App is a real-time polling application built using Firebase Realtime Database and React. It allows admins to create polls and share them with others to gather their opinions or preferences. Users can vote on polls and admin can see real-time updates on the poll results. The app provides a user-friendly interface for creating and managing polls and displays the results of the poll in various formats such as graphs and charts.

The backend of the Votek App is built using Firebase Realtime Database, MongoDb and Express.js, while the frontend is built using React. Socket.IO is used for real-time communication between the server and the client, allowing admin to see live updates on poll results.

This app can be used for various purposes such as conducting surveys, gathering feedback, and decision making. It provides an efficient way of gathering opinions from a large number of people in a short time.

# Step to cloning repo

```bash
# Clone repository
$ git clone https://github.com/masai-builds/Votek
```
Install dependencies via NPM 

```bash
# Install dependencies for frontend
$ cd client
$ npm install
$ npm start
$ cd ..

# Install dependencies for backend
$ cd client
$ npm install
$ npm start
$ cd ..
```

# Authors: 

Pratik Dutta (EM/Project Guide)

1. Suraj Kumar Gupta:
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/Surajbnp)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/suraj-kumar-gupta-058191222/) 

2. Vedant Pawar:
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/vedantpawar18)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vedant-pawar-5319791b5/) 

3. Arun Raj MK: 
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/rk6093720)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rohit-kumar-6b1b421a9/) 

4. Ashwini Prewar: 
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/Aniruddha8787)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/anirudh87/) 

5. Anusha Surendran: 
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/mayra111)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/muskan-gupta01/) 


# Tech-Stack used : 
![home](https://img.shields.io/badge/html-FF4154?style=for-the-badge&logo=Html&logoColor=white)
![home](https://img.shields.io/badge/css-F26B00?style=for-the-badge&logo=Css&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![home](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) 
![home](https://img.shields.io/badge/JSS-F7DF1E?style=for-the-badge&logo=JSS&logoColor=white)
![home](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![home](https://img.shields.io/badge/git-000000?style=for-the-badge&logo=Git&logoColor=white)
![mongoDB](https://img.shields.io/badge/MongoDB-43B02A?style=for-the-badge&logo=MongoDB&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
![home](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) 
![home](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) 
![home](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![home](https://img.shields.io/badge/Postman-FF4154?style=for-the-badge&logo=Postman&logoColor=white)

# API :
### Users
- POST user/signup
- POST auth/signin
- GET  user/user-details

### Admin : 
- POST firebase/create-poll
- POST firebase/vote
- GET  firebase/live-polls
- GET  firebase/live-poll/:pollId
- POST poll/save-poll
- GET  poll/ended-polls
- POST poll/polls/votedBy
- POST poll/download/votedby/:pollId/question/:questionId/option/:optionId

# Features :
- User friendly and responsive web design
- Made with mobile first approach
- Sign Up with email, mobile or password
- OTP verification while sign Up
- Google auth for sign UP
- Sign In with email, mobile or passsword
- OTP verification while sign In
- Google auth for sign In
- User can apply to the course from the dashboard
- User Form for each user
- User can attend MSAT exam
- Based on the scores received user will be informed if passed or failed
- All the data will be stored at the data base

# Pages : 


## Deployment Link: 


## Feedback: 
If you have any feedback, any suggestion please reach out to us at 
vedantpawar18@gmail.com







