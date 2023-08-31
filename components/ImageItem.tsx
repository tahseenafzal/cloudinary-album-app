"use client";
import { CldImage } from "next-cloudinary";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { Button } from "./ui/button";

const ImageItem = ({ imageId }: { imageId: string }) => {
  return (
    <div className="relative flex justify-center">
      <CldImage
        className="rounded-sm"
        width={400}
        height={300}
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
      />
      <div className="flex justify-between absolute top-3 w-[90%] ">
        <AiOutlineHeart
          size={32}
          className="text-red-500 hover:text-red-400 duration-300"
        />
        <Button variant="secondary" size="icon">
          <FiMenu size={18} />
        </Button>
      </div>
    </div>
  );
};

export default ImageItem;
