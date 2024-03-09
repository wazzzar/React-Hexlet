
import React from "react";
import cn from 'classnames';

export default class Alert extends React.Component {
    render() {
        const {type, text} = this.props;
        //const clsList = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
        //: (clsList.indexOf('type') > -1)
        const clsName = cn('alert', `alert-${type}`);
        return (
            <div className={clsName} role="alert">{text}</div>
        );
    }
}