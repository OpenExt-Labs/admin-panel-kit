import React from 'react'
import Tiptap from './tiptap-editor'
import CodeFragment from '@/components/common/code'

function TipTapEditor() {
  return (
    <>
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">TipTap Editor</h1>
        <h2 className='font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0'>Installation</h2>

        <h3 className='font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight'>Tiptap</h3>
        <p className='mt-4 scroll-m-20'>
          Tiptap is a headless wrapper around ProseMirror – a toolkit for building rich text WYSIWYG editors, which is already in use at many well-known companies such as New York Times, The Guardian or Atlassian.
        </p>
        <CodeFragment code={`yarn add @tiptap/react @tiptap/pm @tiptap/starter-kit`} />

        <h3 className='font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight'>Tabler</h3>
        <p className='mt-4 scroll-m-20'>
          Tabler Pixel-perfect icons that match your design
        </p>
        <CodeFragment code={`yarn add @tabler/icons-react`} />

      </div>
      <div className='my-6'>
        <h2 className='font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0'>Demo</h2>
        <Tiptap />
      </div>
    </>
  )
}

export default TipTapEditor