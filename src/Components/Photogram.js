import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import AddPhoto from './AddPhoto'
import {Link} from 'react-router-dom'

function Photogram(props) {
    return <div> 
            <Link className = "addPhoto" to="/AddPhoto"></Link>
            {/* <button className = "addPhoto" onClick = {props.onNavigate}> + </button> */}
            <div className = "photoGrid">
                {props.posts.map((post, index) => <Photo key = {index} post = {post} {...props} index = {index}/>)}
            </div> 
          </div>
}

// Needed for ensuring the correct props are passed to the function Photogram

Photogram.propTypes = {
    posts: PropTypes.array.isRequired,
    // onRemovePhoto: PropTypes.func.isRequired // Not needed since it is handled via actions in Redux
}

export default Photogram