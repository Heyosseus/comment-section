import React from 'react'
import styled from 'styled-components';
import { Card, Images } from '../styles/Content';
import data from '../data.json';


const AddComment: React.FC=()=> {
  return (
    <div>
      <CardForComment>
        <Container placeholder="Add a comment..."></Container>
        <FooterItems>
          <Images src={data.currentUser.image.png}></Images>
          <SendButton>send</SendButton>
        </FooterItems>
      </CardForComment>
    </div>
  );
}

export default AddComment

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
export const CardForComment = styled.div`
  width: 92vw;
  background: #fff;
  height: auto;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
`;