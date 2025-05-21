// src/components/AlterarTexto.jsx
import React from 'react';

export default function AlterarTexto({ setTexto }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Digite novo texto"
        onChange={(e) => setTexto(e.target.value)}
      />
    </div>
  );
}
