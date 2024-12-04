# Delivery Management System
================================================

This project is a comprehensive delivery management system designed to efficiently manage orders and their delivery routes. It leverages MongoDB as the database and Node.js as the backend technology.

## Key Features
----------------

### Order Management

* Create, update, and manage orders with unique identifiers.

### Driver Management

* Register, update, and manage drivers.

### Route Management

* Create, update, and manage routes.

### Route Management

* Assign routes to orders.
* Track the status of each route.
* Update the order status accordingly.
* Calculate the distance of each route. based on the coordinates of the locations. latitude and longitude.


### Real-time Tracking

* View the current location and status of each delivery in real-time.

## Technologies Utilized
-------------------------

### Backend Technology

* Node.js: Utilized for creating the server and handling requests.

### Database

* MongoDB: The NoSQL database used for storing and managing data.

### ORM Tool

* Mongoose: The ORM (Object Relational Mapping) tool used for interacting with MongoDB.

### Environment Variables Management

* dotenv: The package used for managing environment variables.

## Environment Variables
-------------------------

The project relies on environment variables for configuration. The following variables are required:

### MongoDB Connection URIs

* MONGO_URI_LOCAL: The connection URI for the local MongoDB instance.
* MONGO_URI: The connection URI for the MongoDB instance on the cloud.

### Security

* JWT_SECRET: The secret key used for generating JSON Web Tokens.

### Server Configuration

* PORT: The port number on which the server will listen.

## Project Setup and Running
-----------------------------

To set up and run the project, follow these steps:

1. **Clone the Repository**: Clone the repository to your local machine.
2. **Install Dependencies**: Install the dependencies using `npm install` or `yarn install`.
3. **Configure Environment Variables**: Set up the environment variables in a `.env` file.
4. **Start the Server**: Start the server using `node index.js`,`npm start` or `nodemon index.js`, `npm run dev` for development.

## Contributing to the Project
-----------------------------

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**: Fork the repository.
2. **Create a New Branch**: Create a new branch for your feature or fix.
3. **Make Changes and Commit**: Make your changes and commit them.
4. **Push Your Branch**: Push your branch to your forked repository.
5. **Submit a Pull Request**: Submit a pull request to the original repository.

## Licensing
------------

This project is licensed under the MIT License.
