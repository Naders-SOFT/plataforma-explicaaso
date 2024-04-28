import React from 'react';
import styled from 'styled-components';
import ListaItem from '../components/Administrador/ListaAdmin';


const ContainerAdmin = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
`
  
const list = styled.div`
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`
const list_item = styled.div`
    width: 300px;
    background-color: #f2f2f2;
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align
`

const items = [
  { name: 'Albert', subject: 'Matemática', date: 'Dec 5' },
  { name: 'Bart', subject: 'Física', date: 'Dec 5' },
  { name: 'Charles', subject: 'Química', date: 'Dec 5' },
  { name: 'Daniel', subject: 'Biologia', date: 'Dec 5' },
  { name: 'Edward', subject: 'Redação', date: 'Dec 5' },
  { name: 'Fabian', subject: 'Geografia', date: 'Dec 5' },
  { name: 'Guy', subject: 'História', date: 'Dec 5' },
  { name: 'Isadora', subject: 'Gramática', date: 'Dec 5' },
  { name: 'Hector', subject: 'Literatura', date: 'Dec 5' },
];



export default items;