import React from 'react';

const ListaItem = ({ name, subject, date, onRemove }) => (
    <div className="list-item">
      <p className="name">{name}</p>
      <p className="subject">{subject}</p>
      <p className="date">{date}</p>
      <button className="remove-button" onClick={onRemove}>Remover</button>
    </div>
  );
  
  export default ListaItem;