import React from "react";
import cn from "classnames";

export default class BtnGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            left: false,
            right: false
        };
    }

    switchL = () => {
        this.setState({
            left: true,
            right: false,
        });
    };

    switchR = () => {
        this.setState({
            left: false,
            right: true,
        });
    };

    render() {
        const {left, right} = this.state;

        const lbc = cn('btn btn-secondary left', {
            active: left,
        });
        const rbc = cn('btn btn-secondary right', {
            active: right,
        });

        return (
            <div className="btn-group" role="group">
                <button type="button" className={lbc} onClick={this.switchL}>Left</button>
                <button type="button" className={rbc} onClick={this.switchR}>Right</button>
            </div>
        );
    }
}