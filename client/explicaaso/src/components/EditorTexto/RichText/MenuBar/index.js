import "../styles.css";

import { FaBold, FaItalic, FaStrikethrough, FaUnderline, 
    FaHeading, FaListUl, FaListOl, FaUndo, FaRedo, 
    FaQuoteLeft } from 'react-icons/fa';
import styled from 'styled-components';
import React from 'react';

const MenuContainer = styled.div`
    padding: 0.3%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #003466;
`

const MenuButton = styled.button`
    font-size: ${({$isMobile}) => ($isMobile ? '25px' : '30px')};
    margin: 5px;
    padding: 4px 4px 2px 4px;
    outline: none;
    border: none;
    background: none;
    color: white;
    cursor: pointer;
`

const LeftButtons = styled.div`
    width: ${({$isMobile}) => ($isMobile ? '70%' : '90%')};
`

const RightButtons = styled.div`
${({$isMobile}) => ($isMobile ? '30%' : '10%')};
    display: flex;
    justify-content: flex-end;
`

function MenuBar(props) {
    const editor = props.editor;

    if (!editor) {
        return null;
    }
  
    return (
      <MenuContainer>
        <LeftButtons $isMobile={props.isMobile}>
            <MenuButton $isMobile={props.isMobile}
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={
                !editor.can()
                .chain()
                .focus()
                .toggleBold()
                .run()
            }
            className={editor.isActive('bold') ? 'is-active' : ''}
            >
            <FaBold/>
            </MenuButton>
            <MenuButton $isMobile={props.isMobile}
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={
                !editor.can()
                .chain()
                .focus()
                .toggleItalic()
                .run()
            }
            className={editor.isActive('italic') ? 'is-active' : ''}
            >
            <FaItalic/>
            </MenuButton>
            <MenuButton $isMobile={props.isMobile}
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={
                !editor.can()
                .chain()
                .focus()
                .toggleStrike()
                .run()
            }
            className={editor.isActive('strike') ? 'is-active' : ''}
            >
            <FaStrikethrough/>
            </MenuButton>
            <MenuButton $isMobile={props.isMobile}
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                className={editor.isActive('underline') ? 'is-active' : ''}
            >
                <FaUnderline/>
            </MenuButton>
            <MenuButton $isMobile={props.isMobile}
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
            >
                <FaHeading/>
            </MenuButton>
            <MenuButton $isMobile={props.isMobile}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
            <FaListUl/>
            </MenuButton>
            <MenuButton $isMobile={props.isMobile}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive('orderedList') ? 'is-active' : ''}
            >
            <FaListOl/>
            </MenuButton>
            <MenuButton $isMobile={props.isMobile}
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive('blockquote') ? 'is-active' : ''}
            >
            <FaQuoteLeft/>
            </MenuButton>
        </LeftButtons>

        <RightButtons $isMobile={props.isMobile}>
            <MenuButton $isMobile={props.isMobile}
            onClick={() => editor.chain().focus().undo().run()}
            disabled={
                !editor.can()
                .chain()
                .focus()
                .undo()
                .run()
            }
            >
            <FaUndo/>
            </MenuButton>
            <MenuButton $isMobile={props.isMobile}
            onClick={() => editor.chain().focus().redo().run()}
            disabled={
                !editor.can()
                .chain()
                .focus()
                .redo()
                .run()
            }
            >
            <FaRedo/>
            </MenuButton>
        </RightButtons>
      </MenuContainer>
    )
}

export default MenuBar;