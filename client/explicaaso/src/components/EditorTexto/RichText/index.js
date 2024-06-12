import './styles.css'

import { EditorContent } from '@tiptap/react';
import styled from 'styled-components';
import React from 'react';
import MenuBar from './MenuBar';

const RichTextContainer = styled.div`
    width: 100%;
    align-items: center;
    margin: 1% 0;
    border: 1px solid gray;
    border-radius: 4px;
`

function RichText({ isMobile, editor }) {  
    return (
        <RichTextContainer>
            <MenuBar isMobile={isMobile} editor={editor} />
            <EditorContent editor={editor}/>
        </RichTextContainer>
    )
}

export default RichText;