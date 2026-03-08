import Section from "../Section/Section";
import Container from "../Container/Container";
import Form from "../Form/Form";
import { getPhotos } from "../../services/photos";
import { useState } from "react";
import type { Photo } from "../../types/photo";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const searchHandler = async (search: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      setPhotos([]);
      const fetchedPhotos = await getPhotos(search);
      if (fetchedPhotos.length === 0) {
        toast.error('За вашим запитом немає даних');
        return;
      }
      setPhotos(fetchedPhotos);
    }
    catch {
      setIsError(true);
      toast.error('Щось пішло не так');
    }
    finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      
      <Section>
        <Container>
          <Form onSubmit={searchHandler} />
          <Toaster />
        </Container>
   
      </Section>
    </>
  );
}
