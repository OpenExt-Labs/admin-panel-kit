'use client'
import { IconAlignJustified, IconAlignRight } from '@tabler/icons-react';
import './style.scss';

import {
  Icon,
  IconBlockquote,
  IconBold,
  IconClearFormatting,
  IconCode,
  IconCodeAsterix,
  IconCornerDownLeft,
  IconH1,
  IconH2,
  IconH3,
  IconH4,
  IconItalic,
  IconLink,
  IconList,
  IconListNumbers,
  IconPageBreak,
  IconPhoto,
  IconStrikethrough,
  IconLetterP,
  IconVideo,
  IconBrandYoutube,
  IconAlignLeft,
  IconAlignCenter,
} from '@tabler/icons-react';


export interface ToolbarItem {
  type: string;
  icon: any;
  action: any;
  isActive?: any;
  disabled?: any;
}

const MenuBar = ({ editor }: any) => {
  if (!editor) return null

  const addYoutubeVideo = () => {
    const url = prompt('Enter YouTube URL');

    if (url) {
      editor.commands.setYoutubeVideo({
        src: url,
        width: Math.max(320, window.innerWidth || 640),
        height: Math.max(180, window.innerHeight || 480),
      });
    }
  };


  const toolbars: ToolbarItem[] =
    [
      {
        type: 'bold',
        icon: IconBold,
        disabled: !editor.can().chain().focus().toggleBold().run(),
        action: () => editor.chain().focus().toggleBold().run(),
        isActive: editor.isActive('bold'),
      },
      {
        type: 'italic',
        icon: IconItalic,
        disabled: !editor.can().chain().focus().toggleItalic().run(),
        action: () => editor.chain().focus().toggleItalic().run(),
        isActive: editor.isActive('italic'),
      },
      {
        type: 'strike',
        icon: IconStrikethrough,
        disabled: !editor.can().chain().focus().toggleStrike().run(),
        action: () => editor.chain().focus().toggleStrike().run(),
        isActive: editor.isActive('strike'),
      },
      {
        type: 'code',
        icon: IconCode,
        disabled: !editor.can().chain().focus().toggleCode().run(),
        action: () => editor.chain().focus().toggleCode().run(),
        isActive: editor.isActive('code'),
      },
      {
        type: 'clear',
        icon: IconClearFormatting,
        disabled: !editor.can().chain().focus().unsetAllMarks().run(),
        action: () => editor.chain().focus().unsetAllMarks().run(),
      },
      {
        type: 'paragraph',
        icon: IconLetterP,
        action: () => editor.chain().focus().setParagraph().run(),
        isActive: editor.isActive('paragraph'),
      },
      {
        type: 'heading1',
        icon: IconH1,
        action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
        isActive: editor.isActive('heading', { level: 1 }),
      },
      {
        type: 'heading2',
        icon: IconH2,
        action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
        isActive: editor.isActive('heading', { level: 2 }),
      },
      {
        type: 'heading3',
        icon: IconH3,
        action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
        isActive: editor.isActive('heading', { level: 3 }),
      },
      {
        type: 'heading4',
        icon: IconH4,
        action: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
        isActive: editor.isActive('heading', { level: 4 }),
      },
      {
        type: 'alignLeft',
        icon: IconAlignLeft,
        action: () => editor.chain().focus().setTextAlign('left').run(),
      },
      {
        type: 'alignRight',
        icon: IconAlignRight,
        action: () => editor.chain().focus().setTextAlign('right').run(),
      },
      {
        type: 'alignCenter',
        icon: IconAlignCenter,
        action: () => editor.chain().focus().setTextAlign('center').run(),
      },
      {
        type: 'alignJustify',
        icon: IconAlignJustified,
        action: () => editor.chain().focus().setTextAlign('justify').run(),
      },
      {
        type: 'bulletList',
        icon: IconList,
        action: () => editor.chain().focus().toggleBulletList().run(),
        isActive: editor.isActive('bulletList'),
      },
      {
        type: 'orderedList',
        icon: IconListNumbers,
        action: () => editor.chain().focus().toggleOrderedList().run(),
        isActive: editor.isActive('orderedList'),
      },
      {
        type: 'image',
        icon: IconPhoto,
        action: () => editor.chain().focus().setImage({ src: 'https://source.unsplash.com/8xznAGy4HcY/400x400' }).run()
      },
      {
        type: 'youtube',
        icon: IconBrandYoutube,
        action: addYoutubeVideo,
      },
      {
        type: 'blockquote',
        icon: IconBlockquote,
        action: () => editor.chain().focus().toggleBlockquote().run(),
        isActive: editor.isActive('blockquote'),
      },
      {
        type: 'codeblock',
        icon: IconCodeAsterix,
        action: () => editor.chain().focus().toggleCodeBlock().run(),
        isActive: editor.isActive('codeBlock'),
      },
      {
        type: 'horizontalRule',
        icon: IconPageBreak,
        action: () => editor.chain().focus().setHorizontalRule().run(),
      },
      {
        type: 'hardBreak',
        icon: IconCornerDownLeft,
        action: () => editor.chain().focus().setHardBreak().run(),
      },
    ];

  return (
    <div className='flex flex-wrap border border-gray-400 p-2 rounded-md items-center'>
      {
        toolbars.map((toolbar, index) => {
          const IconComponent = toolbar.icon;
          return (
            <button
              key={index}
              className={`flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed ${toolbar.isActive ? 'bg-gray-400' : ''}`}
              onClick={toolbar.action}
              disabled={toolbar.disabled}
            >
              <IconComponent size={18} />
            </button>
          );
        })
      }
    </div>
  );
};

export default MenuBar;