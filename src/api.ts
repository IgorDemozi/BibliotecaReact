import axios from "axios";
import { Livro } from "types";

export const Api = axios.create({
   baseURL: 'http://localhost:3000'
})

export function getBook(id: number | string, setLivro: React.Dispatch<React.SetStateAction<Livro | undefined>>) {
   Api.get(`books/${id}`).then(resp => {
      setLivro(resp.data);
   }).catch(error => {
      console.log(error);
   });
}