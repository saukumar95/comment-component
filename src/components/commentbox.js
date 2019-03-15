import React, { Component } from 'react';
import '../../src/App.css';
class CommentBox extends Component {

    render() {
        return (

            <div className="media input-group mb-3 d-flex">
                <img src={this.props.img_src} className="mr-3 input-group-prepend img_logo" alt="user img" />
                <div className="media-object comment__input-box flex-grow-1">
                    <input type={this.props.type} name={this.props.name} className={this.props.className} placeholder={this.props.placeholder} />
                </div>
                    <button className="b-default ml-auto" type="button" id="">Post</button>
            </div>
        );
    }
}

export default CommentBox;