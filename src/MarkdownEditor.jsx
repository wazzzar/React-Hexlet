import React from 'react';
import Editor from '@toast-ui/editor';

export default class MarkdownEditor extends React.Component {
    componentDidMount() {
        this.editor = new Editor({
            el: document.querySelector('#md_editor'),
            hideModeSwitch: true,
        });
        this.editor.addHook('change', () => {
            const content = this.editor.getMarkdown();
            const {props} = this;
            props.onContentChange(content);
        });
    }

    render() {
        return (
            <div id="md_editor" />
        );
    }
}