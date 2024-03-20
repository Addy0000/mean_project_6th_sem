# Melody
Music sharing and Streaming web application

## This is college project for MERN stack web development

This is a full-stack web application built with the MERN (MongoDB, Express, React, Node.js) stack that allows users to share and stream their favorite audio files. Users can create playlists, upload audio files, and explore other users' collections.

## Features
* User authentication and authorization using JWT tokens.
* User profile page to manage uploaded audio files and playlists.
* Audio file upload with support for multiple file formats.
* Playlist creation and management.
* Audio streaming with player controls (play, pause, skip, etc.).
* Responsive design for optimal viewing on any device.

## Installation

To run the application locally, you'll need to have Node.js and MongoDB installed on your machine. Once you've cloned the repository, navigate to the project directory in your terminal and run the following commands:

For frontend 
```
npm install 
```
For backend
```
cd API
npm install
```
This will install the required dependencies for both the client and server applications.

Next, create a .env file in the API directory with the following environment variables:
```
MONGODB_URI=<your-mongodb-uri>
```
Replace <your-mongodb-uri> with the connection string for your MongoDB instance.

Finally, start the client and server applications with the following commands:
```
npm run dev
```
API
```
cd API
node server.js
```
The client application will be available at http://localhost:5173, and the server will be running on http://localhost:1337.
