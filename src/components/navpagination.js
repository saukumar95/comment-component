import React, { Component } from 'react';


class Pagination extends Component {
    render() {
        console.log(this.props.commentsize);
        return (
            <nav aria-label="comment pagination">
                <ul className="pagination justify-content-end">
                    <li className="page-item disabled">
                        <a className="page-link" href="#e" tabIndex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#f">1</a></li>
                    <li className="page-item"><a className="page-link" href="#f">2</a></li>
                    <li className="page-item"><a className="page-link" href="#f">{this.props.commentsize}</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#i">Next</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Pagination;