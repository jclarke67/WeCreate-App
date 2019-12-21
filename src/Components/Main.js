import React, {Component} from 'react'
import Title from './Title'
import Photogram from './Photogram.js'
import AddPhoto from './AddPhoto'
import Login from './Login'
import {Route, Link} from 'react-router-dom'
import {removePost} from '../redux/actions'
import Single from './Single'
import {database} from '../database/config'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

var firebase = require('firebase');
// var firebaseui = require('firebaseui');

const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/signedIn',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => true
    }
  };

class Main extends Component {
    constructor(props) {
        super()
        this.state = {
            // user:{},
        }
    }

    authListener() {
        // console.log('authListener called!')
        // console.log(database)
        // database.auth()
        
        // database.auth().onAuthStateChanged((user) => {
        //   console.log(user);
        //   if (user) {
        //     this.setState({ user });
        //     localStorage.setItem('user', user.uid);
        //   } else {
        //     this.setState({ user: null });
        //     localStorage.removeItem('user');
        //   }
        // });
      }

    componentDidMount() {
        console.log("IS SIGNED IN???")
        console.log(this.state.isSignedIn)
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => this.setState({isSignedIn: !!user})
        );
        this.authListener()
        this.props.startLoadingPost()
        this.props.startLoadingComments()
    }

    // Make sure we un-register Firebase observers when the component unmounts.
    componentWillUnmount() {
        this.unregisterAuthObserver();
    }

    render() {
        console.log('render')
        console.log(this.props)
        return (
        <div>
            <h1><Link to="/"> LetsCreate! </Link></h1>
            {(this.state.isSignedIn || this.state.isSignedIn === undefined) ?
            <Route exact path = "/app" render = {() => (
                <div>
                    <Photogram posts {...this.props}/>
                </div>
            )}/> : 
            <Route exact path = "/" render = {({history}) => (
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
                // <Login {...this.props} onHistory = {history}/>
            )}/>}

            <Route path = "/AddPhoto" render = {({history}) => (
                <AddPhoto {...this.props} onHistory = {history}/>
            )}/>

            <Route path = "/single/:id" render = {(params) => (
                <Single {...this.props} {...params}/>
            )}/>

        </div> )
    }
}

export default Main