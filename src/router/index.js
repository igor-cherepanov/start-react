import React from "react";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Post from "../pages/Post";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: 'about', component: <About/>},
    {path: 'posts', component: <Posts/>},
    {path: 'posts/:id', component: <Post/>},
]

export const publicRoutes = [
    {path: 'login', component: <Login/>},
]
