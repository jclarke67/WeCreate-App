import React, {Component} from 'react'
import Title from './Title'
import Photogram from './Photogram.js'
import AddPhoto from './AddPhoto'
import Login from './Login'
import {Route, Link} from 'react-router-dom'
import {removePost} from '../redux/actions'
import Single from './Single'


class Main extends Component {
    componentDidMount() {
        this.props.startLoadingPost()
        this.props.startLoadingComments()
    }

    render() {
        console.log('render')
        console.log(this.props)
        return (
        <div>
            <h1><Link to="/"> Photogram </Link></h1>
            <Route exact path = "/" render = {() => (
                <div>
                    <Photogram posts {...this.props}/>
                </div>
            )}/>)

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