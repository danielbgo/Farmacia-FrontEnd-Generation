import React from 'react';
//import FormularioPostagem from '../formularioProdutos/FormularioProduto';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalPostagem.css'

function ModalPostagem() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>Novo Produto</button>} modal>
        <div>
          
        </div>
      </Popup>
    </>
  );
}

export default ModalPostagem;