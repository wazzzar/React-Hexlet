import React from 'react';

import ThemeContext from './contexts';

const content = 'Текст для вкладки Profile';

class Profile extends React.Component {

    static contextType = ThemeContext;

    render(){
        const {context} = this;
        const {theme} = context;
        return (
            <article className={theme.className}>
                {content}
            </article>
        );
    }
}

export default Profile;
