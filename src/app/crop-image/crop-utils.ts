import { PixelCrop } from "react-image-crop";

export async function getImageCropped(
  image: HTMLImageElement,
  completedCrop: PixelCrop
) {
  if (!image || !completedCrop) {
    throw new Error("Crop canvas does not exist");
  }

  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;

  const offscreen = new OffscreenCanvas(
    completedCrop.width * scaleX,
    completedCrop.height * scaleY
  );

  const ctx = offscreen.getContext("2d");
  if (!ctx) {
    throw new Error("No 2d context");
  }

  ctx.drawImage(
    image,
    completedCrop.x * scaleX,
    completedCrop.y * scaleY,
    offscreen.width,
    offscreen.height,
    0,
    0,
    offscreen.width,
    offscreen.height
  );

  // You might want { type: "image/jpeg", quality: <0 to 1> } to
  // reduce image size
  const blob = await offscreen.convertToBlob({
    type: "image/png",
  });
  // convert to base64 and add to array
  const imageTemp = window.URL.createObjectURL(blob);
  return imageTemp;
}
