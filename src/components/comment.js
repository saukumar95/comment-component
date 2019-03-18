import React, { Component } from 'react';
import '../../src/App.css';
// import Pagination from './navpagination';
import CommentBox from './commentbox';

class Comment extends Component {

    constructor() {
        super();
        this.state = {
            comments: [{
                img_src: ["https://cdn.ebaumsworld.com/mediaFiles/picture/1035099/85708057.jpg"],
                comment_username: ["saurabh_kumarrrr"],
                comment_body: ["Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra ."],
                checked: true
            },
            {
                img_src: ["https://cdn.ebaumsworld.com/mediaFiles/picture/1035099/85708057.jpg"],
                comment_username: ["spy895"],
                comment_body: ["Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra ."],
                checked: true
            },
            {
                img_src: ["https://cdn.ebaumsworld.com/mediaFiles/picture/1035099/85708057.jpg"],
                comment_username: ["hiddenkiller95"],
                comment_body: ["Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra ."],
                checked: false
            }
            ],
        }
    }

    addComment = (comment_input) => {
        let comments = {
            img_src: "https://cdn.ebaumsworld.com/mediaFiles/picture/1035099/85708057.jpg",
            comment_username: "vish123",
            comment_body: comment_input
        }
        this.state.comments.push(comments);
        this.setState({
            comments: this.state.comments
        })
    }

    handleCheck = () => {
        this.setState({ checked: !this.state.checked });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="card shadow mt-3">
                    <div className="card-body">
                        {this.state.comments.map((comment, i) => {
                            return (<ul className="list-unstyled" key={i}>
                                <li className="media">
                                    <a href="#a">
                                        <img src={comment.img_src} className="mr-3 img_logo align-self-center" alt="..." />
                                    </a>
                                    <div className="media-body comment">
                                        <a href="#b" >{comment.comment_username}</a>
                                        <p className="pl-3 text-justify">
                                            {comment.comment_body}
                                        </p>

                                        <div className='control-group ml-auto'>
                                            <input onChange={this.handleCheck} className='red-heart-checkbox' id='red-check1' type='checkbox' defaultChecked={comment.checked} />
                                            <label htmlFor='red-check1'></label>
                                        </div>

                                    </div>
                                </li>
                            </ul>)
                        })}
                        <CommentBox addComment={this.addComment} img_src={'https://cdn.ebaumsworld.com/mediaFiles/picture/1035099/85708057.jpg'} type={'text'} name={'comment_input'} className={''} placeholder={'Add a comment'} />
                        {/* <Pagination commentsize={this.state.comments.length} /> */}
                    </div>
                </div>
            </div >)
    }
}
export default Comment;
