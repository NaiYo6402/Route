import React from 'react'
import auth from '../firebase'
class Login extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
          email: '',
          password: '',
          currentUser: null,
          message: ''
        }
    }
    onChange = e => {
        const { name, value } = e.target
    
        this.setState({
          [name]: value
        })
      }
    
      onSubmit = e => {
        e.preventDefault()
    
        const { email, password } = this.state
        console.log(email);
        console.log(password);
        auth
        .signInWithEmailAndPassword(email, password)
        .then(response => {
            console.log(response)
            this.setState({
            currentUser: response.user
            })
        })
        .catch(error => {
            this.setState({
            message: error.message
            })
        })
      }

     



  render() {
    return (
        <>
       <div className="container">
        <form onSubmit={this.onSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input onChange={this.onChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input onChange={this.onChange} type="password" name="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
       </div>
        </>
    )
  }
}

export default Login;