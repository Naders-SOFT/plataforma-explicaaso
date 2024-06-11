import './styles.css'

import { EditorContent, generateHTML, useCurrentEditor } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Heading from '@tiptap/extension-heading';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Strike from '@tiptap/extension-strike';
import Underline from '@tiptap/extension-underline';
import styled from 'styled-components';
import React from 'react';

const RichTextContainer = styled.div`
   
`

function RichText({ setTexto }) {  
    const {editor} = useCurrentEditor();
    
    if (!editor) {
        return null;
    }

    const json = editor.getHTML();
    console.log(json);

    // setTexto(generateHTML(json, [
    //     Document,
    //     Heading,
    //     Paragraph,
    //     Text,
    //     Bold,
    //     Italic,
    //     Strike,
    //     Underline,

    // ]));
  
    return (
        <RichTextContainer>
            <EditorContent editor={editor}/>
        </RichTextContainer>
    )
}

export default RichText;