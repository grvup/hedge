Overview
This project is a Next.js application that implements features for managing orders and inventory. It includes pages for viewing orders, managing order details, and handling inventory items. This README provides instructions on setting up and running the project, as well as an overview of design choices and data manipulations.
Table of Contents
[Installation](#installation)
[Design choices](#designchoices)
[Array and object manupulation](#arrayandobjectmanupulation)
[Contributing](#contributing)


## Installation
Clone the repository
bash
Copy code
git clone https://github.com/grvup/hedge.git
cd <project-folder>
Install dependencies
bash
Copy code
npm install
Set up environment variables
Copy .env.example to .env and configure necessary variables.
Run the development server
bash
Copy code
npm run dev
Open http://localhost:3000 to view it in the browser.



## Design Choices
Folder Structure
The project follows a structured approach to separate concerns:

/pages: Contains Next.js pages for routing.
/src/app: Includes components, services, and utilities.
State Management
State management is handled using React's built-in useState and useEffect hooks for local component state. No external state management library is used to keep the project simple and lightweight.

Styling
Tailwind CSS is used for styling components. It provides utility classes for responsive and efficient styling without writing custom CSS.

API Integration
API calls are made using Axios, a promise-based HTTP client, to fetch orders and manage inventory data from a mock API server (localhost:5000/api).

## Array and Object Manipulations
Orders and Items Management
Orders Structure
Each order object in the application has the following structure:
json
Copy code
{
  "id": 1,
  "customer": "Customer A",
  "items": [
    {"id": 1, "name": "Item 1", "quantity": 5},
    {"id": 2, "name": "Item 2", "quantity": 3}
  ],
  "status": "Pending"
}
Array Manipulations
Array manipulations such as sorting orders by customer name and filtering orders by status are implemented using JavaScript's array methods (sort, filter, etc.).

Object Manipulations
Object manipulations involve updating order status and managing inventory items through CRUD operations. These manipulations are handled using functions in src/app/services/api.ts.


## Contributing
If you would like to contribute to the project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.

This README file provides comprehensive instructions on setting up and running the Next.js project, along with explanations of design choices and array/object manipulations within the codebase. Adjust the content based on your project's specifics and additional requirements as needed.