import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CoursesCategoryApi from './Api/CoursesCategoryApi'
import ServicesApi from './Api/ServicesApi'
import UserPage from './AuthPages/UserPage'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Course from './Pages/Course'

import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import Registration from './Pages/Registration'
import Services from './Pages/Services'
import SingleCard from './Pages/SingleCard'
import SingleService from './Pages/SingleService'



const Routes = () => {
  return (
    <Router>
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/userpage" component={UserPage}/>
        <Route exact path="/registration" component={Registration}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/services" component={Services}/>
        <Route exact path="/course" component={Course}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/singlecard/:title" component={SingleCard}>
          <SingleCard coursecategory={CoursesCategoryApi}/>
        </Route>
        <Route exact path="/singleservice/:title" component={SingleService}>
          <SingleService servicecategory={ServicesApi}/>
        </Route>
       
       
        </Switch>
    </Router>
  )
}

export default Routes