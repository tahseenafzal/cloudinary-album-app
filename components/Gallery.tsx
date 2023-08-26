"use client";
import { useState } from "react";
import ImageItem from "./ImageItem";
import UploadButton from "./UploadButton";
import cloudinary from "cloudinary";

const Gallery = async () => {
  const result = await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("create_at", "desc")
    .max_results(30)
    .execute();

  const [imageId, setImageId] = useState("");

  return (
    <div className="grid grid-cols-[1fr,auto] grid-rows-[auto,1fr] gap-4">
      <div>
        <h1 className="text-lg font-bold">Gallery</h1>
      </div>
      <div>
        <UploadButton setImageId={setImageId} />
      </div>
      {imageId && <ImageItem imageId={imageId} />}
    </div>
  );
};

export default Gallery;
