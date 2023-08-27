"use client";
import { CldImage } from "next-cloudinary";
import React from "react";

const ImageItem = ({ imageId }: { imageId: string }) => {
  return (
    <div className="col-span-full">
      <CldImage
        width="200"
        height="300"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
      />
    </div>
  );
};

export default ImageItem;
