import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from '../components/Nav'
import BlogListPage from '../components/pages/BlogListPage'
import HomePage from '../components/pages/HomePage'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Route path="/" exact component={HomePage}></Route>
    <Route path="/blog" component={BlogListPage}></Route>
    </BrowserRouter>
  )
}

export default AppRouter