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
            </div>
        )
    }
}

export default Auth