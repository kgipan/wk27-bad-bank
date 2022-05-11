# wk27-bad-bank

## Table of Contents
* [Description/Motivation](#description/motivation)
* [Installation Guide](#installation-guide)
* [Technology Used](#technology-used)
* [Features](#features)
* [License](#license

## Description/Motivation
This is a web application developed as a capstone project for MIT xPRO course. This application mimics the usability of a bank website with features such as: creating an account, login verification and authentication, depositing, withdrawing, and account information including balance. These features would be beneficial for any company or individual in need of creating user accounts with various pages that need to share data.

## Installation Guide
* Clone repo
* install node.js
* Navigate to the project folder and run `npm install`
* Install required packages:
  * Run `npm install express`
  * Run `npm install cors`
  * Run `npm install mongodb`
* Run `node index.js`
* In your browser navigate to http://localhost:3000

<img src="bandBank.png" width='500'/>

## Technology Used
* JavaScript
* React
* Nodejs
* Express
* MongoDB
* HTML
* CSS
* Bootstrap

## Features
This application features various layers of authentication and validation to ensure a user cannot over draw their accout and disabled buttons at the load of each page. Data is stored in a non-relational database, MongoDB and uses an Express server. At the completion of this project, this will be a fullstack MERN application.

## License

MIT License

Copyright (c) 2022 Karla Pan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
