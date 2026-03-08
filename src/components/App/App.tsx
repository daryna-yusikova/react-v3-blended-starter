import Section from "../Section/Section";
import Container from "../Container/Container";
import Form from "../Form/Form";
import { getPhotos } from "../../services/photos";
import { useState } from "react";
import type { Photo } from "../../types/photo";
import toast, { Toaster } from "react-hot-toast";
import PhotosGallery from "../PhotosGallery/PhotosGallery";
import Text from "../Text/Text";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [photo, setPhoto] = useState<Photo | null>(null);

  const handlerSelect = (photo: Photo) => {
    setPhoto(photo);
  };

  const searchHandler = async (search: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      setPhotos([]);
      const fetchedPhotos = await getPhotos(search);
      if (fetchedPhotos.length === 0) {
        toast.error("За вашим запитом немає даних");
        return;
      }
      setPhotos(fetchedPhotos);
    } catch {
      setIsError(true);
      // toast.error('Щось пішло не так');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Section>
        <Container>
          <Form onSubmit={searchHandler} />
          {isLoading && <Loader />}
          {isError ? (
            <Text>Щось пішло не так</Text>
          ) : (
            <PhotosGallery photos={photos} onSelect={handlerSelect} />
          )}
          {photo && (
            <Modal onClose={() => setPhoto(null)}>
              <div
                style={{
                  backgroundColor: photo.avg_color,
                  borderColor: photo.avg_color,
                }}
              >
                <img src={photo.src.large} alt={photo.alt} />
              </div>
            </Modal>
          )}
          <Toaster />
        </Container>
      </Section>
    </>
  );
}
