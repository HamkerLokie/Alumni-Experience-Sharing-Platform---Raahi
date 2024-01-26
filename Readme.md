# Raahi CodeBase
<img src="https://img.shields.io/badge/code%20style-modular-yellow"> <img src="https://img.shields.io/badge/NodeJs-v20.8.0-brightgreen">
<img src="https://img.shields.io/badge/React-v18.2.0-blue"> <img src="https://img.shields.io/badge/MongoDB%20-%20ATLAS%20-green"> <img src="https://img.shields.io/badge/Express-v4.18.2-red">

Raahi is a platform developed for CUians to read & share encounters of various interviews. Including interviews of big giants like Amazon, Google & Microsoft. This will surely help the upcoming batches of <u>Chandigarh University</u>.

* Portal Link - https://raahi-esp.netlify.app

---
### Contents
1. [Highlights](#highlights)
2. [Requirements](#requirements)
3. [Installation](#installation)
4. [Screens](#screens)
5. [Routes](#routes)
7. [Directory](#Directory)
8. [Contributions](#contribution)
9. [Copyright](#copyright)

---

## Highlights
* Enable individuals to contribute their interview experiences to assist students.
* Facilitate students in requesting specific interview experiences from individuals they know.
* Support anonymous contributions on Raahi for a more confidential sharing environment.
* Future plans include expanding the platform beyond interview experiences to incorporate additional helpful features.
---
## Requirements:

* Node.js
* MongoDB
* Postman
* React - vite
* Studio3T or MongoDB Compass - Managing DB
---
## Installation

Fork the Repository in your machine then clone it in your machine (Replace your_username with your username)

```bash
git clone https://github.com/HamkerLokie/Alumni-Experience-Sharing-Platform---Raahi.git
```
Move into the project directory and install required dependencies

```bash
cd Alumni-Experience-Sharing-Platform---Raahi
cd backend
cd client
npm install
```
Create dev.env and prod.env file with following details:

<u>Backend</u>
```bash
MONGO_URI=
PORT=
CORS_ORIGIN=*
ACCESS_TOKEN_SECRET=
ACCESS_TOKEN_EXPIRY=
REFRESH_TOKEN_SECRET=
REFRESH_TOKEN_EXPIRY=
```

<u>Frontend</u>
```bash
VITE_apiKey=
VITE_authDomain=
VITE_projectId=
VITE_storageBucket=
VITE_messagingSenderId=
VITE_appId=
VITE_measurementId=
VITE_mobileURI=http://192.168.1.12:8080/api/v1
VITE_localhostURI=http://localhost:8080/api/v1
VITE_hostedURI=
```
Replace the dummy values with your credentials (Never share .env file with anyone)

OR

Just run this command instead of doing above step

```
cp .env_sample .env
```

Run the command in your terminal to start the dev server

```bash
npm run dev
``` 
### for both backend and client

#### Landing Page,
![Landing page](https://github.com/HamkerLokie/Alumni-Experience-Sharing-Platform---Raahi/blob/main/backend/gallery/homepage.png?raw=true)

#### Write Article Page,
![Landing page](https://github.com/HamkerLokie/Alumni-Experience-Sharing-Platform---Raahi/blob/main/backend/gallery/write.png?raw=true)

#### Request Article Page,
![Landing page](https://github.com/HamkerLokie/Alumni-Experience-Sharing-Platform---Raahi/blob/main/backend/gallery/request.png?raw=true)

#### Guidelines Page,
![Landing page](https://github.com/HamkerLokie/Alumni-Experience-Sharing-Platform---Raahi/blob/main/backend/gallery/guidelines.png?raw=true)

### Routes
---

| Route  | Description | Signature |
| ------------- | ------------- | ------------- |
| /article |(post) Search for Host name and then creates a new Visitor Entry in MongoDB | Body: { `title`, `email`, `fullName`,`companyName`, `companyDomainName`, `createdAt` , `description`, `articleTags`, `isVerified`, `showName`,`tags`} |
| /auth |(post) Update the Checkout time of Visitor in MongoDB  | Body: { `name`, `email`, `username`, `linkedIn`, `createdAt`} |
| /user |(post) Add new Host Entry in MongoDB  | Body: { `name`, `email`, `password`, `username`, `createdAt`, `role`, `cuBatch`} |
| /request_article |(get) Get array of host list form MongoDB  | Body: { `requesterName`, `requesteeName`, `requesteeContact`, `company`, `note`}|
| /feedback |(post) Send email using nodemailer modular  | Body: { `article`, `feedback`, `rating`, `createdAt`} |


### Directory 

[FrontEnd]
![image](https://github.com/HamkerLokie/Alumni-Experience-Sharing-Platform---Raahi/blob/main/backend/gallery/frontend.png?raw=true)

[Backend]
![image](https://github.com/HamkerLokie/Alumni-Experience-Sharing-Platform---Raahi/blob/main/backend/gallery/backend.png?raw=true)

---
## Contribution 
Avoid directly committing code to the master branch. Instead, encourage the submission of pull requests. If you plan significant changes, initiate a discussion by opening an issue beforehand. Ensure that corresponding tests are updated as needed.

---

## Copyright 
If you intend to utilize this application for your community or college, we kindly request the inclusion of a mention for CHandigarh University DCPD in the hosted application. Your cooperation is appreciated.


Made with ❤ by [DCPD]