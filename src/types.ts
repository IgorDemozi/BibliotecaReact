export type Livro = {
   id: number | string;
   title: string;
   author: string;
   genre: string;
   status: Status;
   image: string;
   systemEntryDate: string;
   synopsis: string;
   rentHistory: RentHistory[];
}

export type RentHistory = {
   studentName: string;
   class: string;
   title?: string;
   withdrawalDate: string;
   deliveryDate: string
}

export type Status = {
   isRented: boolean;
   isActive: boolean;
   description: string;
}

export type Usuario = {
   email: string;
   password: string;
}

export type Autenticacao = {
   auth?: boolean;
   error?: string;
}

export interface InputProps {
   type?: string;
   id?: string;
   value: string;
   onChange: any;
   onClick?: any;
   maxLength?: number;
   placeholder?: string;
}

export interface CardInterface {
   txt: string;
   rota: string;
   alt: string;
   imagem: string
}

export interface ModalProps {
   livro?: Livro;
   livroId?: number | string;
   setModalAtivado?: React.Dispatch<React.SetStateAction<boolean>>;
   setModalLivroAtivado?: React.Dispatch<React.SetStateAction<boolean>>;
   setEmprestarAtivado?: React.Dispatch<React.SetStateAction<boolean>>;
   setInativarAtivado?: React.Dispatch<React.SetStateAction<boolean>>;
   setHistoricoAtivado?: React.Dispatch<React.SetStateAction<boolean>>;
}