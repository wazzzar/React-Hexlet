import { createContext } from 'react';

export default createContext({
    themes: [],
    theme: {},
    setTheme: (id) => {
        for (let index in this.themes){
            if (this.themes[index].id === id){
                this.theme = this.themes[index];
            }
        }
    },
});