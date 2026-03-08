import Section from "../Section/Section";
import Container from "../Container/Container";
import Form from "../Form/Form";
import { getPhotos } from "../../services/photos";


export default function App() {
  const searchHandler = async (search: string) => {
    const photos = await getPhotos(search);
    console.log(photos);
  }
  return (
    <>
      <Section>
        <Container><Form onSubmit = {searchHandler} /></Container>
   
      </Section>
    </>
  );
}
