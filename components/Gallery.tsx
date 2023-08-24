"use client";
import { CldImage, CldUploadButton } from "next-cloudinary";
import { useState } from "react";
import { Button } from "./ui/button";

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
        <Button className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          <CldUploadButton
            onUpload={(result) => {
              const imgResult = result as uploadResult;
              setImageId(imgResult.info.public_id);
            }}
            uploadPreset="glbc5qws"
          />
        </Button>
      </div>
      <div className="col-span-full">
        {imageId && (
          <CldImage
            width="200"
            height="300"
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
