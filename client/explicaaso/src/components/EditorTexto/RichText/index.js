import './styles.css'

import { EditorContent, EditorProvider } from '@tiptap/react';
import styled from 'styled-components';
import React, { useContext } from 'react';
import MenuBar from './MenuBar';
import { RTContext } from '../../../pages/PaginaEditarPost';

const RichTextContainer = styled.div`
    width: 100%;
    align-items: center;
    margin: 1% 0;
    border: 1px solid gray;
    border-radius: 0.5%;
`

function RichText(props) {  
    const editor = useContext(RTContext);

    return (
        <RichTextContainer>
            <MenuBar isMobile={props.isMobile} editor={editor}/>
            <EditorContent editor={editor}/>
        </RichTextContainer>
    )
}

export default RichText;