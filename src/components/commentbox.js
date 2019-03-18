import React, { Component } from 'react';
import '../../src/App.css';
class CommentBox extends Component {

    constructor() {
        super();
        this.state = {
            comment_input: "",
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addComment = (e) => {
        e.preventDefault();
        if (this.state.comment_input !== "")
            this.props.addComment(this.state.comment_input)

        this.setState({
            comment_input: ""
        })
    }

    render() {
        return (
            <form className="media input-group mb-3 d-flex" onSubmit={this.addComment}>
                <img src={this.props.img_src} className="mr-3 input-group-prepend img_logo" alt="user img" />
                <div className="media-object comment__input-box flex-grow-1">
                    <input type={this.props.type} name={this.props.name} value={this.state.comment_input} className={this.props.className} onChange={this.handleChange} placeholder={this.props.placeholder} autoComplete="off" autoFocus autoCorrect="true" />
                </div>
                <button className="b-default ml-auto" type="button" onClick={this.addComment} id="">Post</button>
            </form>
        );
    }
}

export default CommentBox;