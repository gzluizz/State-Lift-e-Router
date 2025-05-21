// src/pages/Produtos.jsx
import React from 'react';
import ExibirTexto from '../components/ExibirTexto';
import AlterarTexto from '../components/AlterarTexto';

export default function Produtos({ texto, setTexto }) {
  return (
    <div>
      <h1>Página de Produtos</h1>
      <ExibirTexto texto={texto} />
      <AlterarTexto setTexto={setTexto} />
    </div>
  );
}
