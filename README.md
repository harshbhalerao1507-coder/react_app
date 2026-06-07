# React Custom Hook - useFetch

## Overview

This project is a solution for the React Custom Hooks assignment.

The main objective of this project is to create a reusable custom hook called **useFetch** that simplifies API data fetching in React applications. The hook manages data fetching, loading states, and error handling, allowing components to remain clean and focused on UI rendering.

The application fetches product data from a public API and displays products in a responsive grid layout.

---

## Features

* Custom React Hook (`useFetch`)
* Accepts any API URL as a parameter
* Handles loading states
* Handles error states
* Reusable data-fetching logic
* Displays product images, titles, and prices
* Responsive grid layout using CSS
* Clean and maintainable code structure

---

## Technologies Used

* React
* JavaScript (ES6+)
* HTML
* CSS
* Fetch API

---

## API Used

Public API:

https://api.escuelajs.co/api/v1/products

---

## Project Structure

```text
src/
│
├── useFetch.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## How useFetch Works

The custom hook accepts a URL as a parameter:

```js
const { data, loading, error } = useFetch(url);
```

The hook:

* Starts the loading state before making the request
* Fetches data from the provided API URL
* Stores the fetched data in state
* Handles errors if the request fails
* Updates the loading state when the request completes

This makes the hook reusable across multiple components and projects.

---

## Installation

Clone the repository:

```bash
git clone <your-github-repository-link>
```

Navigate to the project folder:

```bash
cd react_app
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## Challenges Faced

* Understanding the purpose of custom hooks.
* Managing asynchronous API requests.
* Handling loading and error states correctly.
* Making the hook reusable for different API endpoints.
* Displaying API data dynamically in React.

---

## Learning Outcomes

Through this project I learned:

* How to create custom hooks in React.
* How to use useState, useEffect, and useCallback together.
* How to separate business logic from UI components.
* How to fetch and display data from an API.
* How to handle loading and error states effectively.
* How to build reusable React code.

---

## Future Improvements

* Add product search functionality.
* Add category filtering.
* Add pagination.
* Add skeleton loaders.
* Improve UI design and responsiveness.

---

## Deployment

The project has been deployed on Netlify and the source code is available on GitHub.

Netlify Link:
https://mern-assignments5td.netlify.app/

---

## Author

**Harsh Bhalerao**
