Car Store B4A2V3
Objective:
Develop an Express application with TypeScript, integrating MongoDB with Mongoose to manage a Car Store. Ensure data integrity using Mongoose schema validation.

Project Setup:
Create an Express project with TypeScript.
Set up a MongoDB database to store Cars and Orders.
Use Mongoose for schema definition and data operations.
Implement CRUD operations for both cars and orders.
Models:
Car Model
brand (string): The brand or manufacturer of the car (e.g., Toyota, BMW, Ford).
model (string): The model of the car (e.g., Camry, 3 Series, Focus).
year (number): The year of manufacture.
price (number): Price of the car.
category (string): The type of car (e.g., Sedan, SUV, Truck). use enum, exact value (Sedan, SUV, Truck, Coupe, Convertible)
description (string): A brief description of the car's features.
quantity (number): Quantity of the car available.
inStock (boolean): Indicates if the car is in stock.
Order Model
email (string): The email address of the customer.
car (ObjectId): The car ordered. (unused ref) (enter the created carId from your database which car you would love to buy).
quantity (number): The quantity of the ordered car.
totalPrice (number): The total price (car price * quantity).
Generic Error Response:
message: A brief error message explaining what went wrong.
success: Set to false for error responses.
error: The error message or error object returned by the application (e.g., "ValidationError", "Resource not found").
stack: The stack trace showing where the error occurred in the code.
Example:
{
  "message": "Validation failed",
  "success": false,
  "error": {
    "name": "ValidationError",
    "errors": {
      "price": {
        "message": "Price must be a positive number",
        "name": "ValidatorError",
        "properties": {
          "message": "Price must be a positive number",
          "type": "min",
          "min": 0
        },
        "kind": "min",
        "path": "price",
        "value": -5
      }
    }
  },
  "stack": "Error: Something went wrong\n    at app.js:23:13\n    at..."
}
Main Section:
1. Create a Car
Endpoint: /api/cars
Method: POST
Request Body:
{
  "brand": "Toyota",
  "model": "Camry",
  "year": 2024,
  "price": 25000,
  "category": "Sedan",
  "description": "A reliable family sedan with modern features.",
  "quantity": 50,
  "inStock": true
}
Response: Success message and created car details.
{
  "message": "Car created successfully",
  "success": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 25000,
    "category": "Sedan",
    "description": "A reliable family sedan with modern features.",
    "quantity": 50,
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z"
  }
}
2. Get All Cars
Endpoint: /api/cars
Method: GET
Response: A list of all cars with details like brand, model, price, category, etc.
Query: A list of all cars from the same category, you’ll take this as /api/cars?searchTerm=category searchTerm can be brand, model, category
{
  "message": "Cars retrieved successfully",
  "status": true,
  "data": [
    {
      "_id": "648a45e5f0123c45678d9012",
      "brand": "Toyota",
      "model": "Camry",
      "year": 2024,
      "price": 25000,
      "category": "Sedan",
      "description": "A reliable family sedan with modern features.",
      "quantity": 50,
      "inStock": true,
      "createdAt": "2024-11-19T10:23:45.123Z",
      "updatedAt": "2024-11-19T10:23:45.123Z"
    },
    // ... rest data
  ]
}
3. Get a Specific Car
Endpoint: /api/cars/:carId
Method: GET
Response: The details of a specific car by ID.
{
  "message": "Car retrieved successfully",
  "status": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 25000,
    "category": "Sedan",
    "description": "A reliable family sedan with modern features.",
    "quantity": 50,
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z"
  }
}
4. Update a Car
Endpoint: /api/cars/:carId
Method: PUT
Request Body: (Car details to update)
{
  "price": 27000,
  "quantity": 30
}
Response: Success message and updated car details.
{
  "message": "Car updated successfully",
  "status": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 27000,  // Price updated
    "category": "Sedan",
    "description": "A reliable family sedan with modern features.",
    "quantity": 30,  // Quantity updated
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T11:00:00.000Z"  // Updated timestamp
  }
}
5. Delete a Car
Endpoint: /api/cars/:carId
Method: DELETE
Response: Success message confirming the car has been deleted.
{
  "message": "Car deleted successfully",
  "status": true,
  "data": {}
}
6. Order a Car
Endpoint: /api/orders
Method: POST
Inventory Management Logic:
When an order is placed, reduce the quantity in the car model.
If the inventory quantity goes to zero, set inStock to false.
Handle insufficient stock cases by returning an appropriate error message.
Request Body:
{
  "email": "customer@example.com",
  "car": "648a45e5f0123c45678d9012",
  "quantity": 1,
  "totalPrice": 27000
}
Response: Success message confirming the order.
{
  "message": "Order created successfully",
  "status": true,
  "data": {
    "_id": "648b45f5e1234b56789a6789",
    "email": "customer@example.com",
    "car": "648a45e5f0123c45678d9012",
    "quantity": 1,
    "totalPrice": 27000,
    "createdAt": "2024-11-19T12:00:00.000Z",
    "updatedAt": "2024-11-19T12:00:00.000Z"
  }
}
7. Calculate Revenue from Orders (Aggregation)
Endpoint: /api/orders/revenue
Method: GET
Aggregation Suggestion:
Use MongoDB aggregation pipeline to calculate the total revenue from all orders.
Calculate the total price by multiplying the price of each car by the quantity ordered.
Response: The total revenue from all orders.
{
  "message": "Revenue calculated successfully",
  "status": true,
  "data": {
    "totalRevenue": 810000  // Total revenue calculated from all orders
  }
}
