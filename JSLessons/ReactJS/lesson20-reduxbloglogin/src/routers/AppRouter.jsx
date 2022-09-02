import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
        <Switch>
          <Route path="/" exact component={HomePage }></Route>
          <Route path="/blog" exact  component={BlogListPage }></Route>
          <Route path="/blog/:id" component={BlogDetails }></Route>
          <Route path="/addblog" component={AddBlogPage }></Route>
          <Route path="/edit/:id" component={EditBlogPage }></Route>
          <Route path="/dashboard" component={Dashboard }></Route>
          <Route path="/admin" component={Login }></Route>
          <Route  component={NotFoundPage}></Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
