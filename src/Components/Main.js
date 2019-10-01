import React, {Component} from 'react'
import Title from './Title'
import Photogram from './Photogram.js'

const posts = [{
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
}
]


class Main extends Component {
    render() {
        return< div>
                <Title title = {'Photogram'}/>
                <Photogram posts = {posts}/>
              </div>
    }
}

export default Main