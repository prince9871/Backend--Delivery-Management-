# Delivery Management API Documentation

## Overview

The Delivery Management API facilitates user authentication, driver management, order processing, and route management. Below are the endpoints grouped by their respective functionalities.

---

## 1. Authentication

### **Get Users**

- **Endpoint**: `GET /api/auth/users/`
- **Description**: Fetches all registered users.

### **Login**

- **Endpoint**: `POST /api/auth/login`
- **Request Body**:
  ```json
  {
    "email": "admin.princesoni@gmail.com",
    "password": "password123"
  }
  ```
- **Description**: Authenticates a user and returns a token.

### **Register**

- **Endpoint**: `POST /api/auth/register`
- **Request Body**:
  ```json
  {
    "name": "Prince Soni",
    "email": "admin.princesoni@gmail.com",
    "password": "password123",
    "role": "Admin"
  }
  ```
- **Description**: Registers a new user.

### **Delete User**

- **Endpoint**: `DELETE /api/auth/users/{userId} (MongoDB _id)`
- **Description**: Deletes a user by ID.

---

## 2. Driver Management

### **Get Drivers**

- **Endpoint**: `GET /api/drivers/`
- **Headers**:
  - Authorization: `Bearer <token>`
- **Description**: Fetches a list of all drivers.

### **Register Driver**

- **Endpoint**: `POST /api/drivers/`
- **Headers**:
  - Authorization: `Bearer <token>`
- **Request Body**:
  ```json
  {
    "name": "Amit Verma",
    "email": "amit.verma@example.com",
    "phone": "9876543210",
    "vehicleType": "Truck"
  }
  ```
- **Description**: Registers a new driver.

### **Update Driver**

- **Endpoint**: `PUT /api/drivers/{driverId} (MongoDB _id)`
- **Headers**:
  - Authorization: `Bearer <token>`
- **Request Body**:
  ```json
  {
    "status": "inactive"
  }
  ```
- **Description**: Updates driver details.

### **Delete Driver**

- **Endpoint**: `DELETE /api/drivers/{driverId}`(MongoDB \_id)
- **Headers**:
  - Authorization: `Bearer <token>`
- **Description**: Deletes a driver by ID.

### **Get Payment**

- **Endpoint**: `GET /api/drivers/{driverId}/payment`
- **Headers**:
  - Authorization: `Bearer <token>`
- **Description**: Fetches payment details for a driver.

### **Update Online Time**

- **Endpoint**: `PATCH /api/drivers/{driverId}/online-time/`
- **Headers**:
  - Authorization: `Bearer <token>`
- **Request Body**:
  ```json
  {
    "onlineTime": 2
  }
  ```
- **Description**: Updates a driver's online time.

### **Reset Online Time**

- **Endpoint**: `PATCH /api/drivers/{driverId}/online-time/reset`
- **Headers**:
  - Authorization: `Bearer <token>`
- **Description**: Resets a driver's online time.

---

## 3. Order Management

### **Get Orders**

- **Endpoint**: `GET /api/orders/`
- **Headers**:
  - Authorization: `Bearer <token>`
- **Description**: Fetches all orders.

### **Create Order**

- **Endpoint**: `POST /api/orders/`
- **Headers**:
  - Authorization: `Bearer <token>`
- **Request Body**:
  ```json
  {
    "driverId": "oUY7GZ",
    "customerName": "Ravi Gupta",
    "deliveryAddress": "B-34, 3rd Floor, G.T. Road, Shyam Nagar",
    "totalAmount": 999.5
  }
  ```
- **Description**: Creates a new order.

### **Update Order**

- **Endpoint**: `PUT /api/orders/{orderId}`
- **Headers**:
  - Authorization: `Bearer <token>`
- **Request Body**:
  ```json
  {
    "orderStatus": "delivered"
  }
  ```
- **Description**: Updates the status of an order.

### **Delete Order**

- **Endpoint**: `DELETE /api/orders/{orderId}`
- **Headers**:
  - Authorization: `Bearer <token>`
- **Description**: Deletes an order by ID.

---

## 4. Route Management

### **Get Routes**

- **Endpoint**: `GET /api/routes/`
- **Headers**:
  - Authorization: `Bearer <token>`
- **Description**: Fetches all routes.

### **Create Route**

- **Endpoint**: `POST /api/routes/`
- **Headers**:
  - Authorization: `Bearer <token>`
- **Request Body**:
  ```json
  {
    "driverId": "oUY7GZ",
    "orderId": "t0SgMR",
    "steps": [
      {
        "location": {
          "latitude": 23.0225,
          "longitude": 72.5714
        },
        "timestamp": "2024-12-02T10:00:00Z"
      },
      {
        "location": {
          "latitude": 19.076,
          "longitude": 72.8777
        },
        "timestamp": "2024-12-02T12:30:00Z"
      }
    ]
  }
  ```
- **Description**: Creates a new route.

### **Update Route**

- **Endpoint**: `PUT /api/routes/{routeId}`
- **Headers**:
  - Authorization: `Bearer <token>`
- **Request Body**:
  ```json
  {
    "status": "completed"
  }
  ```
- **Description**: Updates route details.

### **Delete Route**

- **Endpoint**: `DELETE /api/routes/{routeId}`
- **Headers**:
  - Authorization: `Bearer <token>`
- **Description**: Deletes a route by ID.

---

## Notes

- Replace `{userId}`, `{driverId}`, `{orderId}`, and `{routeId}` with actual IDs.
- Ensure all requests requiring authentication include a valid Authorization token.

---
