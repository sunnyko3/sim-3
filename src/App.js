import React, {Component} from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom'
import routes from './routes'
import axios from 'axios'




class App extends Component {

  constructor(){
    super()
    this.state = {
      emailInput: '',
      passwordInput: '',
      image: ''
    }
  }


  async signup() {
    let res = await axios.post('/api/signup', {
     email: this.state.emailInput,
     password: this.state.passwordInput
    })
    alert(res.data.message)
    this.setState({
      user: res.data.userData
    })
  }

  




  render() {
    return (
        <HashRouter>
          {routes}
        </HashRouter>
    );
  }
}
    export default App