import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from '../components/Nav'
import AddBlogPage from '../components/pages/AddEditRemoveForm/AddBlogPage'
import EditBlogPage from '../components/pages/AddEditRemoveForm/EditBlogPage'
import BlogDetails from '../components/pages/BlogDetails/BlogDetails'
import BlogListPage from '../components/pages/BlogListPage'
import Dashboard from '../components/pages/dashborad/Dashboard'
import HomePage from '../components/pages/HomePage'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container mt-5">
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/blog" exact component={BlogListPage}></Route>
        <Route path="/blog/:id" component={BlogDetails}></Route>
        <Route path="/addblog" component={AddBlogPage}></Route>
        <Route path="/edit/:id" component={EditBlogPage}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter