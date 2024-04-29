import React from 'react';
import styled from 'styled-components';


export const ContainerAdmin = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: auto;
  grid-template-areas:
    "sidebar main"
    "footer footer";
  height: 100vh;
`

const DSKMATERIAS = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2vw;
    list-style-type: none;
    padding: 0px;
    align-items: center;
    justify-content: center;
    margin: 0px;
    overflow: auto;
`

const Container = styled.div`
    width: 100%;
`
  
/* Add some basic styling to the list */
const professor_list = styled.p  `
  list-style: none;
  padding: 0;
  margin: 0;
`

const professor_item = styled.div `
  border-bottom: 1px solid #ccc;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`

const professor_name  = styled.p`
  font-weight: bold;
`

// Define the ProfessorList component
export const ProfessorList = ({ professors }) => {
  return (
    <ul className="professor-list">
      {professors.map((professor, index) => (
        <li key={index} className="professor-item">
          <div>
            <span className="professor-name">{professor.name}</span>
            <span>{professor.subject}</span>
          </div>
          <span>{professor.date}</span>
        </li>
      ))}
    </ul>
  );
};

