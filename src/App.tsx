import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';

import Contents from './components/Contents';

import data from './data.json';

import CommentSection from './components/CommentSection';

const App: React.FC = () => {
  const [selectedComment, setSelectedComment] = useState(null);
  const [display, setDisplay] = useState(false);
  const [score, setScore] = useState(0);

  const Increment = () => {
    setScore(score + 1);
  };

  const Decrement = () => {
    setScore(score - 1);
  };
  const handleClick = (id: any) => {
    if (selectedComment === id && display === true) {
      setSelectedComment(null);
      setDisplay(false);
    } else {
      setSelectedComment(id);
      setDisplay(true);
    }
  };
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
        <Contents
          comments={data.comments}
          handleClick={handleClick}
          selectedComment={selectedComment}
          display={display}
          increment={Increment}
          decrement={Decrement}
        />
        <CommentSection
          props={data.comments[1].replies}
          handleClick={handleClick}
          selectedComment={selectedComment}
          display={display}
          increment={Increment}
          decrement={Decrement}
        />
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
