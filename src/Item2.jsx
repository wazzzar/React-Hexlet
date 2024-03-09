import React from "react";

export default class Item2 extends React.Component {
    render() {
        const {data, swt} = this.props;
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        const link = <a href="#" className="todo-task" onClick={() => swt(data.id)}>{data.text}</a>;
        return (
            <div className="row" key={data.id}>
                <div className="col-1">{data.id}</div>
                <div className="col">
                    {data.state === 'finished' ? <s>{link}</s> : link}
                </div>
            </div>
        );
    }
}