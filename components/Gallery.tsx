"use client";
import { CldImage, CldUploadButton } from "next-cloudinary";
import { useState } from "react";

type uploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

const Gallery = () => {
  const [imageId, setImageId] = useState("");
  return (
    <div className="grid grid-cols-[1fr,auto] grid-rows-[auto,1fr] gap-4">
      <div>
        <h1 className="text-lg font-bold">Gallery</h1>
      </div>
      <div>
        <CldUploadButton
          onUpload={(result) => {
            const imgResult = result as uploadResult;
            setImageId(imgResult.info.public_id);
          }}
          uploadPreset="glbc5qws"
        />
      </div>
      <div className="col-span-full">
        {imageId && (
          <CldImage
            width="960"
            height="600"
            src={imageId}
            sizes="100vw"
            alt="Description of my image"
          />
        )}
      </div>
    </div>
  );
};

export default Gallery;
