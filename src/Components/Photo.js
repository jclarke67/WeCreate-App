import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Photo(props) {
    const post = props.post
        return <figure className = "figure">
                <Link to = {`/single/${post.id}`}> <img className = "photo" src = {post.imageLink} alt = {post.alt} /> </Link>
                <figcaption><p>{post.description}</p></figcaption>
                <div className = "button-container">
                    <button className = "button" onClick = {() => {
                        props.startRemovingPost(props.index, post.id)
                        props.history.push('/')
                    }} >Remove</button>
                    <Link to={`single/${post.id}`} className="button">
                        <div className = "comment-count">
                            {props.comments[post.id] ? props.comments[post.id].length : 0}
                        </div>
                    </Link>
                </div>
             </figure>
}

Photo.prototypes = {
    post: PropTypes.object.isRequired,
    // onRemovePhoto: PropTypes.func.isRequired // Not needed since it is handled via actions in Redux
}

export default Photo