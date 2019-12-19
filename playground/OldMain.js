import React, {Component} from 'react'
import Title from './Title'
import Photogram from './Photogram.js'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            posts: [{
                id: 0,
                description: "tropical landscape",
                alt: "A tropical landscape of flowers and foliage overlooking the ocean", 
                imageLink: "https://previews.123rf.com/images/batechenkofff/batechenkofff1801/batechenkofff180100142/93785347-amazing-scenic-caribbean-tropical-landscape-blue-bay-top-view-dominican-republic.jpg"
            }, {
                id: 1,
                alt: "A blue corvette parked in front of a line of palmetto trees",
                description: "1957 corvette", 
                imageLink: "https://cdn.hswstatic.com/gif/1957-corvette-7.jpg" 
            }, {
                id: 2,
                alt: "A landscape of palm trees and the pier at Venice Beach",
                description: "venice beach", 
                imageLink: "https://www.jetsetter.com/uploads/sites/7/2018/05/GettyImages-931643290-1380x1035.jpg"
            }, {
                id: 3,
                alt: "A map of several continents: North America, South America, Africa, and Europe",
                description: "A map of several continents", 
                imageLink: "https://parade.com/wp-content/uploads/2018/10/AskMarylin_NorthAndSouthAmerica-FTR.jpg"
            }],
            screen: "photos" //photos, AddPhotos
        }
        console.log('constructor')
    }

    removePhoto(postRemoved) {
        console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    addPhoto(newPost) {
        this.setState((state) => ({
            posts: [newPost].concat(state.posts) // This format adds the post to the beginning
        }))
    }

    // Fetch data inside componentDidMount only
    componentDidMount() {
        console.log('component did mount')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('re-render')
        console.log(prevState.posts)
        console.log(this.state)
    }

    render() {
        console.log('render')
        return (
        <div> 
            <Route exact path = "/" render = {() => (
                <div>
                    <Title title = {'Photogram'}/>
                    <Photogram posts = {this.state.posts} onRemovePhoto = {this.removePhoto.bind(this)}/>
                </div>

            )}/>

            <Route path = "/AddPhoto" render = {({history}) => (
                <AddPhoto onAddPhoto ={(newPost) => {
                    this.addPhoto(newPost)
                    history.push("/")}
                    

                }/>
            )}/>

        </div> )
    }
}

export default Main