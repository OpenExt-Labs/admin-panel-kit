'use client'
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from './menu-bar';
import { Button } from '@/components/ui/button';
import { useState } from 'react';



const defaultValue =
  '<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>';

const TipTapEditor = () => {
  const [httmlContent, setHtmlContent] = useState(defaultValue)
  const [isShowContent, setIsShowContent] = useState(false)

  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: defaultValue,
    onUpdate: ({ editor }) => {
      setHtmlContent(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose m-5 focus:outline-none"
      }
    }
  });


  return (
    <div className='pt-6'>
      {
        editor && (
          <MenuBar editor={editor} />
        )
      }
      <EditorContent editor={editor} className='border border-gray-400 mt-4 rounded-md' />
      <Button className='mt-4' onClick={() => setIsShowContent(!isShowContent)}>Toggle HTML</Button>
      {
        isShowContent && (
          <div className='mt-4'>
            <div className='border border-gray-400 mt-4 rounded-md p-4'>
              {httmlContent}
            </div>
          </div>
        )
      }
    </div>

  );
}

export default TipTapEditor