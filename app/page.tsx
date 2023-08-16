"use client";
import { useState } from "react";
import { CldUploadButton, CldImage } from "next-cloudinary";

type uploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {
  const [imageId, setImageId] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onUpload={(result: uploadResult) => {
          setImageId(result.info.public_id);
        }}
        uploadPreset="glbc5qws"
      />
      {imageId && (
        <CldImage
          width="960"
          height="600"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  );
}
