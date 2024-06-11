import './styles.css'

import { EditorContent, useCurrentEditor } from '@tiptap/react';
import styled from 'styled-components';
import React from 'react';

const RichTextContainer = styled.div`
   
`

function RichText(props) {  
    const {editor} = useCurrentEditor();

    if (!editor) {
        return null;
    }
  
    return (
        <RichTextContainer>
            <EditorContent editor={editor}/>
        </RichTextContainer>
    )
}

export default RichText;