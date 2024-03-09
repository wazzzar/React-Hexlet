
import React from "react";

export default class Card3 extends React.Component {
    render() {
        const { title, text } = this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        );
    }
}

Card3.defaultProps = {
    title: 'default title',
    text: 'default text',
};