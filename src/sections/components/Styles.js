import styled from 'styled-components';
  
export const Heading = styled.h1`
   text-align: center;
   color: green;
`;
  
export const Content = styled.div`
   overflowY: scroll;
   height: 2500px;
`;
  
export const Button = styled.div`
   position: fixed; 
   width: 100%;
   display: flex;
    justify-content: end;
    right: 1rem;
    align-items: end;
   bottom: 1rem;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: black;
`