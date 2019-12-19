import React, {Component} from "react"

class Login extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

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
        // const imageLink = event.target.elements.link.value
        // const description = event.target.elements.description.value
        // const post = {
        //     id: Number(new Date()),
        //     alt: "N/A",
        //     description: description,
        //     imageLink: imageLink
        // }
        // if (description && imageLink) {
        //     this.props.addPost(post)
        //     this.props.onHistory.push('/')
        // }
    }

    render() {
        return (
            <div>
                <div className = "form">
                    <form onSubmit = {this.handleSubmit()}>
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