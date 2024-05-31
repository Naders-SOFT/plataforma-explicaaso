import './styles.css'

import { EditorProvider } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline';
import styled from 'styled-components';
import React from 'react'
import MenuBar from './MenuBar'

const RichTextContainer = styled.div`
    width: 100%;
    align-items: center;
    margin: 1% 0;
    border: 1px solid gray;
    border-radius: 0.5%;
`

const extensions = [
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
  Underline,
]

const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`

function RichText() {
  return (
    <RichTextContainer>
        <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={content}></EditorProvider>
    </RichTextContainer>
  )
}

export default RichText;