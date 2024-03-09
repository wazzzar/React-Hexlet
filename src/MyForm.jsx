import React from "react";

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                email: '',
                password: '',
                city: '',
                country: '',
                address: '',
                acceptRules: false,
            },
            submittingState: 'fillingForm',
        };
    }

    handleChangeField = ({ target }) => {
        const { form } = this.state;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({ form: { ...form, [target.name]: value } });
    };

    handleBackToForm = () => {
        this.setState({ submittingState: 'fillingForm' });
    };

    handleSubmitForm = (e) => {
        e.preventDefault();
        this.setState({ submittingState: 'submitted' });
    };

    renderRow = (key) => {
        const { form } = this.state;
        return (
            <tr key={key}>
                <td>{key}</td>
                <td>{form[key].toString()}</td>
            </tr>
        );
    };

    renderResult() {
        const { form } = this.state;
        const keys = Object.keys(form).sort();
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={this.handleBackToForm}>Back</button>
                <table className="table">
                    <tbody>
                    {keys.map(this.renderRow)}
                    </tbody>
                </table>
            </div>
        );
    }

    renderForm() {
        const { form } = this.state;

        return (
            <form onSubmit={this.handleSubmitForm} name="myForm">
                <div className="col-md-12 mb-3">
                    <input
                        type="email"
                        name="email"
                        onChange={this.handleChangeField}
                        value={form.email}
                        className="form-control"
                        placeholder="Email"
                    />
                </div>
                <div className="col-md-12 mb-3">
                    <input
                        type="password"
                        onChange={this.handleChangeField}
                        value={form.password}
                        name="password"
                        className="form-control"
                        placeholder="Password"
                    />
                </div>
                <div className="col-md-12 mb-3">
                    <textarea name="address" value={form.address} onChange={this.handleChangeField} className="form-control" placeholder="1234 Main St" />
                </div>
                <div className="col-md-12 mb-3">
                    <input type="text" name="city" onChange={this.handleChangeField} value={form.city} className="form-control" placeholder="city" />
                </div>
                <div className="col-md-12 mb-3">
                    <select name="country" onChange={this.handleChangeField} className="form-control" value={form.country}>
                        <option value="">Choose Country</option>
                        <option value="argentina">Argentina</option>
                        <option value="russia">Russia</option>
                        <option value="china">China</option>
                    </select>
                </div>
                <div className="col-md-12 mb-3">
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="rules">
                            <input id="rules" name="acceptRules" className="form-check-input" onChange={this.handleChangeField} type="checkbox" checked={form.acceptRules} />
                            Accept Rules
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }

    render() {
        const { submittingState } = this.state;
        switch (submittingState) {
            case 'fillingForm':
                return this.renderForm();
            case 'submitted':
                return this.renderResult();
            default:
                throw new Error(`'${submittingState}' - unknown state`);
        }
    }
}

/*export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            address: '',
            city: '',
            country: '',
            acceptRules: false,
            show: 'form',
        };
    }

    showRes = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({show: 'res'});
    };

    showForm = () => {
        this.setState({show: 'form'});
    };

    renderRes = () => {
        const {
            email, password, address, city, country, acceptRules,
        } = this.state;
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={this.showForm}>Back</button>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>acceptRules</td>
                            <td>{acceptRules.toString()}</td>
                        </tr>
                        <tr>
                            <td>address</td>
                            <td>{address}</td>
                        </tr>
                        <tr>
                            <td>city</td>
                            <td>{city}</td>
                        </tr>
                        <tr>
                            <td>country</td>
                            <td>{country}</td>
                        </tr>
                        <tr>
                            <td>email</td>
                            <td>{email}</td>
                        </tr>
                        <tr>
                            <td>password</td>
                            <td>{password}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };

    renderForm = () => {
        const {
            email, password, address, city, country, acceptRules,
        } = this.state;
        return (
            <form name="myForm" onChange={this.update} onSubmit={this.showRes}>
                <div className="col-md-12 mb-3">
                    <label htmlFor="email" className="col-form-label">Email</label>
                    <input type="email" name="email" className="form-control" id="email" placeholder="Email" value={email} />
                </div>
                <div className="col-md-12 mb-3">
                    <label htmlFor="password" className="col-form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="password" placeholder="Password" value={password}/>
                </div>
                <div className="col-md-12 mb-3">
                    <label htmlFor="address" className="col-form-label">Address</label>
                    <textarea className="form-control" name="address" id="address" placeholder="1234 Main St" value={address} />
                </div>
                <div className="col-md-12 mb-3">
                    <label htmlFor="city" className="col-form-label">City</label>
                    <input type="text" className="form-control" name="city" id="city" placeholder="Type your`s City" value={city}/>
                </div>
                <div className="col-md-12 mb-3">
                    <label htmlFor="country" className="col-form-label">Country</label>
                    <select id="country" name="country" className="form-control" value={country}>
                        <option value="">Choose</option>
                        <option value="argentina">Argentina</option>
                        <option value="russia">Russia</option>
                        <option value="china">China</option>
                    </select>
                </div>
                <div className="col-md-12 mb-3">
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="rules">
                            <input id="rules" type="checkbox" name="acceptRules" className="form-check-input" checked={acceptRules}/>
                            Accept Rules
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    };

    update = (e) => {
        this.setState({
            email: e.currentTarget.querySelector('#email').value,
            password: e.currentTarget.querySelector('#password').value,
            address: e.currentTarget.querySelector('#address').value,
            city: e.currentTarget.querySelector('#city').value,
            country: e.currentTarget.querySelector('#country').value,
            acceptRules: e.currentTarget.querySelector('#rules').checked,
        });
    };

    render() {
        const {show} = this.state;
        return show === 'form' ? this.renderForm() : this.renderRes();
    }
}*/