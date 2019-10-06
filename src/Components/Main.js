import React, {Component} from 'react'
import Title from './Title'
import Photogram from './Photogram.js'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
        console.log('constructor')
    }

    removePhoto(postRemoved) {
        console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    // Fetch data inside componentDidMount only
    componentDidMount() {
        const data = SimulateFetchFromDatabase()
        this.setState({
            posts: data
        })
        console.log('component did mount')
    }

    render() {
        console.log('render')
        return< div>
                <Title title = {'Photogram'}/>
                <Photogram posts = {this.state.posts} onRemovePhoto = {this.removePhoto.bind(this)}/>
              </div>
              
    }
}

function SimulateFetchFromDatabase() {
    return [{
        id: "0",
        description: "tropical landscape",
        alt: "A tropical landscape of flowers and foliage overlooking the ocean", 
        imageLink: "https://previews.123rf.com/images/batechenkofff/batechenkofff1801/batechenkofff180100142/93785347-amazing-scenic-caribbean-tropical-landscape-blue-bay-top-view-dominican-republic.jpg"
    }, {
        id: "1",
        alt: "A blue corvette parked in front of a line of palmetto trees",
        description: "1957 corvette", 
        imageLink: "https://cdn.hswstatic.com/gif/1957-corvette-7.jpg" 
    }, {
        id: "2",
        alt: "A landscape of palm trees and the pier at Venice Beach",
        description: "venice beach", 
        imageLink: "https://www.jetsetter.com/uploads/sites/7/2018/05/GettyImages-931643290-1380x1035.jpg"
    }, {
        id: "3",
        alt: "A map of several continents: North America, South America, Africa, and Europe",
        description: "A map of several continents", 
        imageLink: "https://parade.com/wp-content/uploads/2018/10/AskMarylin_NorthAndSouthAmerica-FTR.jpg"
    }]
}

export default Main