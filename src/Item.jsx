import React from "react";

export default class Item extends React.Component {
    render() {
        const {id, text, del} = this.props;
        return (
            <div key={id}>
                <div className="row">
                    <div className="col-auto">
                        <button type="button" className="btn btn-primary btn-sm" onClick={() => del(id)}>-</button>
                    </div>
                    <div className="col">{text}</div>
                </div>
                <hr />
            </div>
        );
    }
}