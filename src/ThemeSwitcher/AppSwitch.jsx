import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import Home from './Home.jsx';
import Profile from './Profile.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import ThemeContext from './contexts';

const themes = [
    {
        id: 1,
        name: 'White',
        className: 'light',
    },
    {
        id: 2,
        name: 'Black',
        className: 'dark',
    },
    {
        id: 3,
        name: 'Blue',
        className: 'dark-blue',
    },
];

const obj = {
    themes,
    theme: themes[0],
};

class AppSwitch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {qwe:0};
    }

    update = () => {
        let {qwe} = this.state;
        qwe += 1;
        this.setState({qwe});
    };

    render() {
        return (
            <ThemeContext.Provider value={obj}>
                <Tabs
                    defaultActiveKey="home"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Home">
                        <Home />
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        <Profile />
                    </Tab>
                </Tabs>
                <ThemeSwitcher update={this.update}/>
            </ThemeContext.Provider>
        );
    }
}
AppSwitch.contextType = ThemeContext;

export default AppSwitch;