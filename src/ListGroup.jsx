import React from "react";
import { uniqueId } from 'lodash';

export default class ListGroup extends React.Component {
    render() {
        const {children} = this.props;
        if (React.Children.count(children) === 0 ){
            return null;
        }
        const ch = React.Children.map(children, (item) => <li className="list-group-item" key={uniqueId()}>{item}</li>);
        return (
            <ul className="list-group">
                {ch}
            </ul>
        );
    }
}