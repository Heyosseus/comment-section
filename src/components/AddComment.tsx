import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, Images, CardForComments, CardHeaderForm } from '../styles/Content';
import data from '../data.json';


interface Props {
  handleSubmit: any;
}
const AddComment: React.FC<Props> = ({handleSubmit} : any) => {
  const[text, setText] = useState("")
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(text)
    console.log(text)
  }
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }
  return (
    <CardHeaderForm onSubmit={onSubmit}>
      <Container
        placeholder="Add a comment..."
        value={text}
        onChange={handleChange}
      >
        {' '}
      </Container>
      <FooterItems>
        <Images src={data.currentUser.image.png}></Images>
        <SendButton disabled={isTextareaDisabled}>send</SendButton>
      </FooterItems>
    </CardHeaderForm>
  );
};

export default AddComment;

const CardForAddComment = styled(CardForComments)`
  /* @media (min-width: 678px) {
    width: 90vw;
  } */
  @media (min-width: 1024px) {
    justify-content: center;
    align-items: center;
    width: 880px;
    margin: 24px 0 0 0;
  }
`;
const Container = styled.textarea`
  width: 311px;
  height: 96px;
  border-radius: 8px;
  border: 1px solid #e9ebf0;
  padding: 12px;
  outline: none;
  resize: none;
  &::placeholder {
    font-weight: 400;
    color: #67727e;
  }
  :hover {
    cursor: pointer;
    border-color: #5357b6;
    transition: 0.4s all ease;
  }
  @media (min-width: 678px) {
    width: 530px;
  }
  @media (min-width: 1024px) {
    width: 630px;
    margin: auto;
  }
`;

const FooterItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

export const SendButton = styled.button`
  width: 104px;
  height: 48px;
  border-radius: 8px;
  background: #5357b6;
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 24px;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transition: all 0.3s ease;
    background: #c5c6ef;
    cursor: pointer;
  }
`;
