import React from "react";
import firebase from 'firebase';


function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}



class AddList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            time: '',
            lat: 0,
            lng: 0,
            userID: props.userId,
            items: [],
            showAddList: false
        };
    }
    componentWillReceiveProps(props) {
        this.setState({
            lat: props.lat,
            lng: props.lng,
        })
    }
    handleTimeChange = (e) => {
        this.setState({ time: e.target.value });
    }

    handleDateChange = (e) => {
        this.setState({ date: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { items } = this.state;
        alert(`You have: ${items.length} items in your basket`);
    }

    handleAddItem = (e) => {
        let items = this.state.items
        let inputs = document.getElementsByName("item")

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value.length > 0) {
                items.push(inputs[i].value)
            }
        }

        items = items.filter((item) => item !== "" )
        items.push("")
        this.setState({items: items})
    }

    handleRemoveItem = (idx) => (e) => {
        this.setState({ items: this.state.items.filter((s, sidx) => idx !== sidx) });
        e.preventDefault()
    }



    handleAddClick = (e) => {
        e.preventDefault();
        let items = this.state.items;
        items = items.filter((item) => item !== "" );
        let inputs = document.getElementsByName("item")
        inputs.forEach((input) => {
            if (input.value !== "") {
                items.push(input.value)
            }
        })

        let id = guid();
        firebase.database().ref('shoppingList').child(id).set({
            userID: this.state.userID,
            items: items,
            lat: this.state.lat,
            lng: this.state.lng,
            time: this.state.time,
            date: this.state.date,
        });
        this.setState ({
            showAddList: false
        })
        if (typeof this.props.giveMeAnswer == 'function') {
            this.props.giveMeAnswer(this.state.showAddList)
        }

    }
    handleCloseClick = (e) => {
        e.preventDefault();
        this.setState ({
            showAddList: false
        })
        if (typeof this.props.giveMeAnswer == 'function') {
            this.props.giveMeAnswer(this.state.showAddList)
        }

    }

    render() {

        if (this.props.showAddList) {
            return (
                <div className="add-list">
                    <a href="/"
                       className='close-button'
                       onClick={this.handleCloseClick}
                    >
                        <i className="fas fa-times-circle"></i>
                    </a>
                    <br/>
                    <br/>
                    <h2 className="add-list-title">Add your shopping list!</h2>
                    <form className="add-list-form" onSubmit={this.handleSubmit}>

                        <h4 className="add-list-subtitle">Your shopping list:</h4>

                        {this.state.items.map((item, idx) => {
                            if (item.length === 0){
                                return (
                                    <div className={`Item #${idx + 1}`}>
                                        <input
                                            name="item"
                                            type="text"
                                            placeholder={`Item #${idx + 1}`}
                                            value={item.name}
                                            className="add-list-input"
                                            id={`item-${idx}`}
                                        />
                                        <a onClick={this.handleRemoveItem(idx)}
                                           className = "add-list-remove">
                                            <i className="fas fa-minus-circle"></i></a>
                                    </div>
                                )
                            } else {
                                return (
                                    <div>
                                    <p>{item}
                                    <a onClick={this.handleRemoveItem(idx)}
                                        className = "add-list-remove">
                                        <i className="fas fa-minus-circle"></i></a></p></div>
                                )
                            }

                            }
                        )}

                        <button
                            className="button list-button add-list-button"
                            type="button"
                            onClick={this.handleAddItem}
                        >
                            <i className="fas fa-plus"></i>
                            Add new item
                        </button>
                        <button
                            className="list-button button">
                            <i className="fas fa-shopping-basket"></i>
                            Shopping list
                        </button>
                        <h4 className="add-list-subtitle">
                            When the shopping list expires?
                        </h4>
                        <input
                            type="date"
                            placeholder="When the shopping list expires?"
                            value={this.state.date}
                            onChange={this.handleDateChange}
                            className="add-list-input add-list-time"
                        />
                        <input
                            type="time"
                            value={this.state.time}
                            onChange={this.handleTimeChange}
                            className="add-list-input add-list-time"
                        />
                    </form>
                    <button
                        onClick={this.handleAddClick}
                        className="add-list-final add-list-button button"
                    >
                        add list
                    </button>
                </div>
            )
        } else {
            return null
        }
    }
}

export {AddList}