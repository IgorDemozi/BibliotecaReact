import { InativadoInfoSection } from './Modal.styles'
import { ModalProps } from '../types';

const InativadoInfo = ({ livro }: ModalProps) => {
   return (
      <InativadoInfoSection>
         <h1>Informações da inativação</h1>

         <div>
            <h2>Motivo</h2>
            <p>{livro.status.description}</p>
         </div>
      </InativadoInfoSection>
   )
}

export default InativadoInfo