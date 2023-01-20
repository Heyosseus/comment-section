import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';

import Contents from './components/Contents';

import data from './data.json';

import CommentSection from './components/CommentSection';

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
        <Contents comments={data.comments} />
        <CommentSection props={data.comments[1].replies}/>
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
