import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";

import style from "./Form.module.css";

interface FormProps {
onSubmit: (search: string) => void
}

export default function Form({ onSubmit }:FormProps) {
  const formHandler = (formData: FormData) => {
    const searchQuery = formData.get("search") as string;
    if (searchQuery.trim() === '') {
      toast.error('Search query is empty!');
      return
    } 
    onSubmit(searchQuery);
  }
  return (
    <form className={style.form} action={formHandler}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        autoFocus
      />

      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>
    </form>
  );
}
