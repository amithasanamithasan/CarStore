# Car Store B4A2V3  
🛠️ Technology I Can Use
Backend Development:

Node.js
Express.js
Mongoose
TypeScript
Package Management:

Any npm packages that are required for your project
Additional Technologies:

Feel free to incorporate any additional technologies that you deem necessary for your project.
## Objective  
Develop an Express application with TypeScript, integrating MongoDB with Mongoose to manage a Car Store. Ensure data integrity using Mongoose schema validation.  

---
Project Setup:
Create an Express project with TypeScript.
Set up a MongoDB database to store Cars and Orders.
Use Mongoose for schema definition and data operations.
Implement CRUD operations for both cars and orders.
## Project Setup  
1. **Create an Express project with TypeScript**  
   - Set up the project using TypeScript for type safety.  

2. **Set up a MongoDB database**  
   - Store data for Cars and Orders.  

3. **Use Mongoose for schema definition and data operations**  
   - Define schemas for `Cars` and `Orders`.  

4. **Implement CRUD operations for Cars and Orders**  
   - Create RESTful APIs for managing Cars and Orders.  

---

## Models  

### Car Model  
- **Fields**:  
  - `brand` (string): Manufacturer (e.g., Toyota, BMW).  
  - `model` (string): Model of the car (e.g., Camry, Focus).  
  - `year` (number): Year of manufacture.  
  - `price` (number): Price of the car.  
  - `category` (string): Enum - `Sedan`, `SUV`, `Truck`, `Coupe`, `Convertible`.  
  - `description` (string): Features description.  
  - `quantity` (number): Available quantity.  
  - `inStock` (boolean): Stock status.  

### Order Model  
- **Fields**:  
  - `email` (string): Customer email.  
  - `car` (ObjectId): Car ID (reference).  
  - `quantity` (number): Quantity ordered.  
  - `totalPrice` (number): Calculated as car price * quantity.  

---

## API Endpoints  

### 1. Create a Car  
- **Endpoint**: `/api/cars`  
- **Method**: `POST`  
- **Request Body**:  
  ```json
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
