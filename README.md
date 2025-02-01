# 🚀 Menu Management API

This is a Node.js backend project for managing a menu, including categories, subcategories, and items. The API allows CRUD operations and item searching.

## 📌 Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## 📂 Project Setup

### 1️⃣ Clone the Repository
```bash
git clone git@github.com:Swapnil-2502/Guestara-NodeJs-Backend.git
cd Guestara-NodeJs-Backend
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Create a `.env` File
Inside the project root, create a `.env` file and add your MongoDB connection string:
```env
MongoDB_URL=your_mongodb_connection_string
```

### 4️⃣ Start the Server
For development mode (using nodemon):
```bash
npm run dev
```
For production mode:
```bash
npm start
```

### 5️⃣ Test APIs with Postman or cURL
Use Postman or any API testing tool to interact with the API. The base URL is:
```
http://localhost:3000/
```
API Functionality

1️⃣ Create Operations

Create Category: POST http://localhost:3000/api/post/category

Create Subcategory: POST http://localhost:3000/api/post/subcategory

Create Item: POST http://localhost:3000/api/post/item

2️⃣ Read Operations

Get All Categories: GET http://localhost:3000/api/get/category

Get Categories by Name/ID: GET /category/:id or GET /categories/{name}

Get All Subcategories: GET http://localhost:3000/api/get/subcategory

Get Subcategories by Name/ID: GET /subcategory/:id or GET /subcategories/{name}

Get All Items: GET http://localhost:3000/api/get/items

Get Items by Category/Subcategory: GET /items/bycategory / GET /items/bysubcategory

Get Item by Name/ID: GET /items/:id or GET /items/{name}

3️⃣ Update Operations

Edit Category: PUT /category/:id

Edit Subcategory: PUT /subcategory/:id

Edit Item: PUT /items/:id

4️⃣ Search Operation

Search Item by Name: GET /items/search?name=xyz

Happy Coding! 🚀