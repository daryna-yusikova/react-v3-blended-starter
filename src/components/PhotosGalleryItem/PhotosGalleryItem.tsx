import GridItem from "../GridItem/GridItem";

import styles from "./PhotosGalleryItem.module.css";
import type { Photo } from "../../types/photo";

interface PhotosGalleryItemPropse {
  photo: Photo;
  onSelect: (photo: Photo) => void;
}

export default function PhotosGalleryItem({
  photo,
  onSelect,
}: PhotosGalleryItemPropse) {
  return (
    <GridItem>
      <div
        className={styles.thumb}
        style={{
          backgroundColor: photo.avg_color,
          borderColor: photo.avg_color,
        }}
      >
        <img
          src={photo.src.original}
          alt={photo.alt}
          onClick={() => onSelect(photo)}
        />
      </div>
    </GridItem>
  );
}
