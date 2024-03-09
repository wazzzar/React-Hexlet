import React from "react";
import uniqueId from 'lodash/uniqueId';
import {get} from "lodash";

export default class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    handleCount = (value) => {
        const { items } = this.state;
        const currentValue = get(items, [0, 'value'], 0) + value;
        const current = { id: uniqueId(), value: currentValue };
        this.setState({ items: [current, ...items] });
    };

    handleDec = () => this.handleCount(-1);

    handleInc = () => this.handleCount(1);

    handleRemove = (currentId) => () => {
        const { items } = this.state;
        this.setState({ items: items.filter(({ id }) => id !== currentId) });
    };

    renderLog() {
        const { items } = this.state;
        if (items.length === 0) {
            return null;
        }
        return (
            <div className="list-group">
                {items.map(({ id, value }) => (
                    <button type="button" className="list-group-item list-group-item-action" key={id} onClick={this.handleRemove(id)}>
                        {value}
                    </button>
                ))}
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="btn-group font-monospace" role="group">
                    <button type="button" className="btn btn-outline-success" onClick={this.handleInc}>+</button>
                    <button type="button" className="btn btn-outline-danger" onClick={this.handleDec}>-</button>
                </div>
                {this.renderLog()}
            </div>
        );
    }
}

/*export default class Component extends React.Component {
    constructor(props) {
         super(props);
         this.state = {
             log: [],
         };
    }

    sub = () => {
        const {log} = this.state;
        const l = log.length;
        if (l){
            const last = log[l-1];
            log.push(last-1);
        }else{
            log.push(-1);
        }
        this.setState({log});
    };

    add = () => {
        const {log} = this.state;
        const l = log.length;
        if (l){
            const last = log[l-1];
            log.push(last+1);
        }else{
            log.push(1);
        }
        this.setState({log});
    };

    del = (i) => {
        const {log} = this.state;
        log.reverse().splice(i, 1);
        log.reverse();
        this.setState({log});
    };

    renderButtons = () => (
        <div className="btn-group font-monospace" role="group">
            <button type="button" className="btn btn-outline-success" onClick={this.add}>+</button>
            <button type="button" className="btn btn-outline-danger" onClick={this.sub}>-</button>
        </div>
    );

    renderLog = () => {
        const {log} = this.state;
        if (log.length === 0) {
            return null;
        }
        return (
            <div className="list-group">
                { log.reverse().map((item, index) => <button key={uniqueId()} onClick={() => this.del(index)} type="button" className="list-group-item list-group-item-action">{item}</button>) }
            </div>
        );
    };

    render() {
        return (
            <div>
                {this.renderButtons()}
                {this.renderLog()}
            </div>
        );
    }
}*/