import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'

function Photogram(props) {
    return <div className = "photoGrid">
                {props.posts.map((post, index) => <Photo key = {index} post = {post} onRemovePhoto = {props.onRemovePhoto}/>)}
            </div> 
}

// Needed for ensuring the correct props are passed to the function Photogram

Photogram.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default Photogram