'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'

import 'react-image-crop/dist/ReactCrop.css'

import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
  convertToPixelCrop,
} from 'react-image-crop'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { getImageCropped } from './crop-utils'
import Link from 'next/link'

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number,
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  )
}


const CropImage = () => {
  const [crop, setCrop] = useState<Crop>()
  const [imgSrc, setImgSrc] = useState('')
  const imgRef = useRef<HTMLImageElement>(null)
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
  const [scale, setScale] = useState(1)
  const [rotate, setRotate] = useState(0)
  const [aspect, setAspect] = useState<number | undefined>(16 / 9)
  const [cropedImageUrl, setCropedImageUrl] = useState<string | undefined>()

  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined) // Makes crop preview update between images.
      const reader = new FileReader()
      reader.addEventListener('load', () =>
        setImgSrc(reader.result?.toString() || ''),
      )
      reader.readAsDataURL(e.target.files[0])
    }
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget
      setCrop(centerAspectCrop(width, height, aspect))
    }
  }


  async function handleCropImageComplete() {
    try {
      console.log('completedCrop', completedCrop)
      if (!completedCrop || !imgRef.current) return
      const cropedImage: any = await getImageCropped(imgRef.current, completedCrop);
      setCropedImageUrl(cropedImage)
      console.log('cropedImgae', cropedImage)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className='max-w-1000px'>
      <div className='mb-6'>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Upload image
        </h1>
        <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
          Crop image with
          <Link
            className="font-medium underline underline-offset-4"
            href="https://www.npmjs.com/package/react-image-crop"
          >
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              react-image-crop
            </code>
          </Link>{" "}
        </p>
      </div>
      <Input type="file" onChange={onSelectFile} />
      <div className='flex justify-center py-8'>
        <ReactCrop
          crop={crop}
          onChange={(c: any) => {
            setCrop(c)
          }}
          onComplete={(c) => setCompletedCrop(c)}
        >
          {
            imgSrc && (
              <img ref={imgRef} src={imgSrc} alt="Picture of the author" onLoad={onImageLoad} />
            )
          }
        </ReactCrop>
      </div>
      {
        imgSrc && (
          <div className='flex gap-x-2'>
            <Button onClick={() => handleCropImageComplete()}>Okay</Button>
            <Button>Download</Button>
          </div>
        )
      }
      {
        cropedImageUrl && (
          <div className='flex justify-center py-8'>
            <img src={cropedImageUrl} />
          </div>
        )
      }
    </div>

  )
}

export default CropImage