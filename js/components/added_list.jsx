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
        let date = this.state.marker.date;
        let time = this.state.marker.time;

        if (this.props.showAddedList) {
            return (
                <div className="added-list">
                    <a href="/"
                       className='close-button'
                       onClick={this.handleCloseClick}
                    >
                        <i className="fas fa-times-circle"></i>
                    </a>
                    <h1 className='added-list-title'>Your neighbours shopping list:</h1>
                    {this.state.marker.items.map((item) => (
                        <p className='added-list-item'>{item}</p>
                    ))
                    }
                    <p className='added-list-time'><i className="fas fa-calendar-alt"></i>When it expires?</p>

                    <p className='added-date'>{date}</p>
                    <p className='added-time'>{time}</p>
                    <button className="button">take me!</button>
                </div>
            )
        } else {
            return null
        }
    }
}


export {AddedList}