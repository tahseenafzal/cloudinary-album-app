import ImageItem from "./ImageItem";
import UploadButton from "./UploadButton";
import cloudinary from "cloudinary";

interface imageData {
  public_id: string;
}

const Gallery = async () => {
  const results = await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(30)
    .execute();

  const imageData = results.resources;

  return (
    <div>
      <div className="grid grid-cols-[1fr,auto] grid-rows-[auto,1fr] gap-4">
        <div>
          <h1 className="text-lg font-bold">Gallery</h1>
        </div>
        <div>
          <UploadButton />
        </div>
      </div>
      <div className="columns-4 space-y-4 gap-3">
        {imageData.map((item: imageData) => (
          <ImageItem key={item.public_id} imageId={item.public_id} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
