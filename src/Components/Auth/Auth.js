import React, {Component} from 'react'



class Auth extends Component {
    
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }


    render(){
        return(
            <div>Auth
                <input/>
                <input/>
                <button>Login</button><button>Register</button>
            </div>
        )
    }
}

export default Auth