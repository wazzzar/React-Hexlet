import React from "react";
import axios from 'axios';

export default class Autocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {list: []};
    }

    oninput = (e) => {
        const val = e.target.value;
        if (val.length > 0){
            window.setTimeout(async () => {
                const res = await axios.get('/countries', { params: { term: val } });
                this.setState({list: res.data});
            },100);
        }
    }

    list = () => {
        const {list} = this.state;
        if (!list.length){
            return null;
        }
        return (
            <ul>
                {list.map((country) => <li key={country}>{country}</li>)}
            </ul>
        );
    };

    render() {
        return (
            <div>
                <form>
                    <input type="text" className="form-control" placeholder="Enter Country" onChange={this.oninput}/>
                </form>
                {this.list()}
            </div>
        );
    }
}