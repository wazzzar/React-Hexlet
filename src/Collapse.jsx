import React from "react";
import cn from "classnames";

class Collapse extends React.Component {
    constructor(props) {
        super(props);
        const {opened} = this.props;
        this.state = { opened };
    }

    toggle = () => {
        const {opened} = this.state;
        this.setState({ opened: !opened });
    };

    render() {
        const {text} = this.props;
        const {opened} = this.state;
        const cls = cn('collapse', {
            show: opened,
        });

        return (
            <div>
                <p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        className="btn btn-primary"
                        data-bs-toggle="collapse"
                        href="#"
                        role="button"
                        aria-expanded={opened?'true':'false'}
                        onClick={this.toggle}
                    >
                        Link with href
                    </a>
                </p>
                <div className={cls}>
                    <div className="card card-body">
                        {text}
                    </div>
                </div>
            </div>
        );
    }
}

Collapse.defaultProps = {
    opened: true,
};

export default Collapse;