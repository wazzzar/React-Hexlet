import React from "react";
import {uniqueId} from "lodash";
import cn from "classnames";

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active:1};
    }

    prev = () => {
        let {active} = this.state;
        const {images} = this.props;
        active -= 1;
        if (active < 1) {
            active = images.length;
        }
        this.setState({ active });
    };

    next = () => {
        let {active} = this.state;
        const {images} = this.props;
        active += 1;
        if (active > images.length) {
            active = 1;
        }
        this.setState({ active });
    };

    render() {
        const {images} = this.props;
        const slides = images.map((item, index) => {
            const {active} = this.state;
            const cls = cn('carousel-item', {
                active: index+1 === active,
            });
            return (
                <div className={cls} key={uniqueId()}>
                    <img alt="" className="d-block w-100" src={item} />
                </div>
            );
        });

        return (
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {slides}
                </div>
                <button
                    className="carousel-control-prev"
                    data-bs-target="#carousel"
                    data-bs-slide="prev"
                    type="button"
                    onClick={this.prev}
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    data-bs-target="#carousel"
                    data-bs-slide="next"
                    type="button"
                    onClick={this.next}
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }
}