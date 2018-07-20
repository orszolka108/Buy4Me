import React from "react";
import firebase from 'firebase';

class AddedList extends React.Component {
    constructor(props) {
        super(props);
        this.state = props
    }

    componentWillReceiveProps(noweProps) {
        this.setState(noweProps)
    }
    handleCloseClick = (e) => {
        e.preventDefault();
    }

    render() {
        console.log(this.state.marker)
        if (this.props.showAddedList) {
            return (
                <div className="added-list">
                    <a href="/"
                       className='close-button'
                       onClick={this.handleCloseClick}
                    >
                        <i className="fas fa-times-circle"></i>
                    </a>
                    <h2 className='added-list-title'>Your neighbours shopping list:</h2>
                    {/*<p>{this.state.marker.date}</p>*/}
                    {this.state.marker.items.map((item) => (
                        <p className='added-list-item'>{item}</p>
                    ))
                    }
                    <button className="button">super</button>
                </div>
            )
        } else {
            return null
        }
    }
}


export {AddedList}