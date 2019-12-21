import React, {Component} from "react"
import { database } from "../database/config";

class Login extends Component {
    constructor() {
        super();
        // this.login = this.login.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange(e) {
    //     this.setState({ [e.target.name]: e.target.value });
    // }

    // login(e) {
    //     e.preventDefault();
    //     database.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    //     }).catch((error) => {
    //         console.log(error);
    //       });
    // }

    handleSubmit(event) {
        event.preventDefault();
        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        if (username === "test" && password === "test@app") {
            alert("Login successful")
            this.props.onHistory.push('/app')
        }
        else {
            alert("Try again")
        }
    }

    render() {
        return (
            <div>
                <div className = "form">
                    <form onSubmit = {this.handleSubmit}>
                        <input type = "text" placeholder = "Please type your username" name = "username"/>
                        <input type = "text" placeholder = "Please type your password" name = "password"/>
                        <button className = "button">Login</button>
                    </form>
                </div>
            </div> 
        )
    }
}

export default Login