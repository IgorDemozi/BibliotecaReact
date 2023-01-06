export type Livro = {
   id: number;
   title: string;
   author: string;
   genre: string;
   status: {
      isRented: boolean;
      isActive: boolean;
      description: string;
   };
   image: string;
   systemEntryDate: string;
   synopsis: string;
   rentHistory:
   {
      studentName: string;
      class: string;
      withdrawalDate: string;
      deliveryDate: string
   }[]
}

export type rentHistory = {
   studentName: string;
   class: string;
   withdrawalDate: string;
   deliveryDate: string
}

export interface CardInterface {
   txt: string;
   rota: string;
   alt: string;
   imagem: string
}

export interface ModalProps {
   livro: Livro;
   index?: number;
   setModalAtivado?: React.Dispatch<React.SetStateAction<boolean>>;
   setModalLivroAtivado?: React.Dispatch<React.SetStateAction<boolean>>;
   setEmprestarAtivado?: React.Dispatch<React.SetStateAction<boolean>>;
   setInativarAtivado?: React.Dispatch<React.SetStateAction<boolean>>;
   setHistoricoAtivado?: React.Dispatch<React.SetStateAction<boolean>>;
}