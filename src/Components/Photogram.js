import React, {Component} from 'react'
import Photo from './Photo'

function PhotoGram(props) {
    return <div className = "photoGrid">
                {props.posts.map((post, index) => <Photo key = {index} post = {post}/>)}
            </div> 
}

export default PhotoGram