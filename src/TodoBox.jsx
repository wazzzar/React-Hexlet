import React from "react";
import Item from "./Item";
import {uniqueId} from "lodash";

export default class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: {},
        };
    }

    add = (e) => {
        e.preventDefault();
        const {list} = this.state;
        list[uniqueId()] = e.currentTarget.querySelector('input').value;
        this.setState(list);
    };

    del = (id) => {
        const {list} = this.state;
        delete list[id];
        this.setState(list);
    };

    renderItems = () => {
        const {list} = this.state;
        const arr = [];
        for (const key in list){
            arr.unshift(<Item id={key} text={list[key]} del={this.del}/>);
        }
        return (arr);
    };

    render() {
        return (
            <>
                <div className="mb-3">
                    <form className="d-flex" onSubmit={this.add}>
                        <div className="me-3">
                            <input
                                type="text"
                                required=""
                                className="form-control"
                                placeholder="I am going..."
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">add</button>
                    </form>
                </div>
                <div className="mb-3">
                    {this.renderItems()}
                </div>
            </>
        );
    }
}