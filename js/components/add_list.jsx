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
        super();
        this.zakupy = []
        this.state = {
            date: '',
            time: '',
            lat: 0,
            lng: 0,
            userID: props.userId,
            items: [],
        };
    }
    componentWillReceiveProps(props) {
        this.setState({
            lat: props.lat,
            lng: props.lng,
        })
    }
    handleTimeChange = (evt) => {
        this.setState({ time: evt.target.value });
    }

    handleDateChange = (evt) => {
        this.setState({ date: evt.target.value });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const { items } = this.state;
        alert(`You have: ${items.length} items in your basket`);
    }

    handleAddItem = (e) => {
        var items = this.state.items
        items.push("")
        this.setState({ items: items});
    }

    handleRemoveItem = (idx) => () => {
        this.zakupy = this.zakupy.filter((s, sidx) => idx !== sidx);
        this.setState({ items: this.state.items.filter((s, sidx) => idx !== sidx) });
        e.preventDefault()
    }



    handleAddClick = (e) => {
        e.preventDefault();
        let id = guid();
        firebase.database().ref('shoppingList').child(id).set({
            userID: this.state.userID,
            items: this.state.items,
            lat: this.state.lat,
            lng: this.state.lng,
            time: this.state.time,
            date: this.state.date,
        });
    }



    addNewItem = (idx) => (e) => {
        var item = document.getElementById("item-"+idx)
        var items = this.state.items
        if (idx === items.length - 1){
            items[idx] = item.value
        } else {
            items.push(item.value)
        }

        this.setState({items: items})
    }

    render() {

        if (this.props.showAddList) {
            return (
                <div className="add-list">
                    {/*<a href="/" className='close-button' onClick={this.handleCloseClick}><i className="fas fa-times-circle"></i></a>*/}
                    <h2 className="add-list-title">Add your shopping list!</h2>
                    <form className="add-list-form" onSubmit={this.handleSubmit}>

                        <h4 className="add-list-subtitle">Your shopping list:</h4>

                        {this.state.items.map((item, idx) => {
                            if (item.length === 0){
                                return (
                                    <div className={`Item #${idx + 1}`}>
                                        <input
                                            type="text"
                                            placeholder={`Item #${idx + 1}`}
                                            value={item.name}
                                            className="add-list-input"
                                            id={`item-${idx}`}
                                        />
                                        <a onClick={this.addNewItem(idx)}
                                           className = "add-list-remove">
                                            <i className="fas fa-plus-circle"></i></a>
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
                        ><i className="fas fa-plus"></i>Add new item</button>
                        <button className="list-button button"><i className="fas fa-shopping-basket"></i>Shopping list</button>
                        <input
                            type="date"
                            placeholder="When the shopping list expires?"
                            value={this.state.date}
                            onChange={this.handleDateChange}
                            className="add-list-input add-list-time"
                        />
                        <input
                            type="time"
                            placeholder="When the shopping list expires?"
                            value={this.state.time}
                            onChange={this.handleTimeChange}
                            className="add-list-input add-list-time"
                        />
                    </form>
                    <button onClick={this.handleAddClick} className="add-button add-list-button button"> add list
                    </button>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

export {AddList}