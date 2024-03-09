import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import ThemeContext from './contexts';

class ThemeSwitcher extends React.Component {

    static contextType = ThemeContext;

    setTheme = (id) => {
        const {context} = this;
        const {themes} = this.context;
        const keys = Object.keys(themes);
        for (const key in keys) {
            if (themes[key].id === id) {
                context.theme = themes[key];
            }
        }
        const {update} = this.props;
        update();
    };

    render() {
        const {themes, theme} = this.context;
        return (
            <ButtonGroup className="mb-2">
                {themes.map(({id, name, className}) => (
                    <ToggleButton
                        key={id}
                        id={id}
                        type="checkbox"
                        variant="secondary"
                        checked={id === theme.id}
                        value={className}
                        onChange={() => this.setTheme(id)}
                    >
                        {name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        );
    }
}

export default ThemeSwitcher;