import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "../components/Nav";
import AddBlogPage from "../components/pages/addeditremoveform/AddBlogPage";
import EditBlogPage from "../components/pages/addeditremoveform/EditBlogPage";
import Login from "../components/pages/authentication/Login";
import BlogDetails from "../components/pages/blogdetails/BlogDetails";
import BlogListPage from "../components/pages/BlogListPage";
import Dashboard from "../components/pages/dashborad/Dashboard";
import HomePage from "../components/pages/HomePage";
import NotFoundPage from "../components/pages/NotFoundPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container mt-5">
        <Routes>
          <Route path="/"  element={<HomePage />}></Route>
          <Route path="/blog"  element={<BlogListPage />}></Route>
          <Route path="/blog/:id" element={<BlogDetails />}></Route>
          <Route path="/addblog" element={<AddBlogPage />}></Route>
          <Route path="/edit/:id" element={<EditBlogPage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin" element={<Login />}></Route>
          <Route path="*" element={<NotFoundPage/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
