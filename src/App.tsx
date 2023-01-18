import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';



import Contents from './components/Contents';



const App: React.FC = () => {
  

  
  return (
    <div>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Container>
        <Contents  />
      </Container>
    </div>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
`;




