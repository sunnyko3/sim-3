import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Nav from './Components/Nav/Nav'
import Dashboard from './Components/Dashboard/Dashboard'
import Post from './Components/Post/Post'
import Form from './Components/Form/Form'

export default (
    <Switch>
        
        <Route exact path='/' component={Auth}/>
         <Route path='/:id' component={()=>(
          <Nav>
          <Switch>
            <Route path='/:id/dashboard' component={Dashboard}/>
            <Route path='/post/:postid' component={Post}/>
            <Route component={Form} path='/new'/>
          </Switch>
        </Nav>
      )}/>
    </Switch>
  )