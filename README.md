# React Custom Hook - useFetch

## Overview

This project is a solution for the React Custom Hooks assignment.

The main objective of this project is to create a reusable custom hook called **useFetch** that simplifies API data fetching in React applications. Instead of writing the same fetching logic inside multiple components, the hook handles loading, data, and error states in a single place.

The project fetches product data from a public API and displays it in a simple user interface.

---

## Features

- Custom React Hook (`useFetch`)
- Fetches data from any API URL
- Loading state handling
- Error state handling
- Reusable and clean code structure
- Simple and responsive UI
- Easy to integrate into other React projects

---

## Technologies Used

- React
- JavaScript (ES6+)
- HTML
- CSS
- Fetch API

---

## API Used

Public API:

https://api.escuelajs.co/api/v1/products

---

## Project Structure

```text
src/
│
├── hooks/
│   └── useFetch.js
│
├── components/
│   └── ProductList.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## How useFetch Works

The custom hook accepts a URL as a parameter.

```js
const { data, loading, error } = useFetch(url);
```

It internally:

- Starts loading when the request begins
- Fetches data from the API
- Stores the response in state
- Handles any errors that occur
- Stops loading once the request is completed

This allows components to focus only on displaying data instead of managing fetch logic.

---

## Installation

Clone the repository:

```bash
git clone <your-github-repository-link>
```

Navigate to the project folder:

```bash
cd react-usefetch-hook
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

- Understanding when to use custom hooks instead of normal functions.
- Managing loading and error states correctly.
- Making the hook reusable for different API endpoints.
- Avoiding unnecessary API calls during re-renders.

---

## Learning Outcomes

Through this project I learned:

- How to create and use custom hooks in React
- Managing asynchronous operations with hooks
- Using `useState`, `useEffect`, and `useCallback`
- Handling loading and error states effectively
- Writing reusable and maintainable React code

---

## Future Improvements

- Add search functionality
- Add pagination
- Implement retry mechanism for failed requests
- Add skeleton loaders for better user experience
- Support POST, PUT, and DELETE requests

---

## Deployment

The project has been deployed on Netlify and the source code is available on GitHub.

- Netlify Link:https://mern-assignments5td.netlify.app/


---

## Author

**Harsh BhalerAO**

