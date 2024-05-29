import "../styles.css";

import { useCurrentEditor } from '@tiptap/react';
import { FaBold, FaItalic, FaStrikethrough, FaUnderline, 
    FaHeading, FaListUl, FaListOl, FaUndo, FaRedo, 
    FaQuoteLeft } from 'react-icons/fa';
import styled from 'styled-components';
import React from 'react';

const Bold = styled.button`

`

const Italic = styled.button`

`
const Strike = styled.button`

`

const BList = styled.button`

`

const OList = styled.button`

`

const BlockQuote = styled.button`

`

const Undo = styled.button`

`

const Redo = styled.button`

`

function MenuBar() {
    const { editor } = useCurrentEditor()
  
    if (!editor) {
      return null
    }
  
    return (
      <>
        <button
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
        </button>
        <button
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
        </button>
        <button
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
        </button>
        <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive('underline') ? 'is-active' : ''}
        >
            <FaUnderline/>
        </button>
        <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
            <FaHeading/>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          <FaListUl/>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          <FaListOl/>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}
        >
          <FaQuoteLeft/>
        </button>
        <button
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
        </button>
        <button
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
        </button>
      </>
    )
}

export default MenuBar;