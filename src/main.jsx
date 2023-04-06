import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contract from "./Components/Contract/Contract";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import First from "./Components/First/First";
import Friend from "./Friend/Friend";
import FriendDetail from "./Components/FriendDetail/FriendDetail";
import Post from "./Components/Post/Post";
import PostDetail from "./Components/PostDetail/PostDetail";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//   },
//   {
//     path: "/about",
//     element: <About></About>,
//   },
//   {
//     path: "/contract",
//     element: <Contract></Contract>,
//   },
//   {
//     path: "/dashboard",
//     element: <h1>My name is Shurov khan </h1>,
//   },

// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <First></First>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/friend",
        element: <Friend></Friend>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "friend/:friendId",
        element: <FriendDetail></FriendDetail>,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${params.friendId}`
          ),
      },
      {
        path: "post",
        element: <Post></Post>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts`),
      },
      {
        path: "pst/:pstId",
        element: <PostDetail></PostDetail>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.pstId}`)
      },
      {
        path: "/contract",
        element: <Contract></Contract>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
