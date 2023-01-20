import plus from '../assets/icons/icon-plus.svg';
import minus from '../assets/icons/icon-minus.svg';
import reply from '../assets/icons/icon-reply.svg';
import edit from '../assets/icons/icon-edit.svg';
import deleteIcon from '../assets/icons/icon-delete.svg';

import {
  Card,
  CardForComments,
  Comments,
  CreatedAt,
  Header,
  Images,
  Username,
} from '../styles/Content';
import {
  DeleteIcon,
  EditIcon,
  Footer,
  MinusIcon,
  PlusIcon,
  Reply,
  ReplyIcon,
  Score,
  VotingComp,
} from '../styles/Footer';

interface Props {
  props: any;
}

import data from '../data.json';

import { useEffect, useState } from 'react';
import styled from 'styled-components';

const CommentSection: React.FC<Props> = ({ props }) => {
  
  return (
    <div>
      <div>
        {props &&
          props.map((comment: any) => (
            <div style={{ display: 'flex' }} key={comment.id}>
              <Line>{comment.Line}</Line>
              <CardForComments key={comment.id}>
                <Header>
                  <Images src={comment.user.image.png}></Images>
                  <Username>{comment.user.username}</Username>
                  {comment.user.username === 'ramsesmiron' ? (
                    ''
                  ) : (
                    <Badge>you</Badge>
                  )}
                  <CreatedAt>{comment.createdAt}</CreatedAt>
                </Header>
                <Comments>{comment.content}</Comments>
                <Footer>
                  <VotingComp>
                    <PlusIcon
                      src={plus}
                      alt=""
                      // onClick={Increment}
                    ></PlusIcon>
                    <Score>{comment.score}</Score>
                    <MinusIcon
                      src={minus}
                      alt=""
                      // onClick={Decrement}
                    ></MinusIcon>
                  </VotingComp>
                  <Reply>
                    {comment.user.username === 'ramsesmiron' ? (
                      <ReplyIcon src={reply}></ReplyIcon>
                    ) : (
                      <DeleteIcon src={deleteIcon}></DeleteIcon>
                    )}
                    {comment.user.username === 'ramsesmiron' ? (
                      'Replay'
                    ) : (
                      <span style={{ color: '#ED6368' }}>Delete</span>
                    )}

                    {comment.user.username === 'ramsesmiron' ? (
                      ''
                    ) : (
                      <EditIcon src={edit}></EditIcon>
                    )}

                    {comment.user.username === 'ramsesmiron'
                      ? ''
                      : 'Edit'}
                  </Reply>
                </Footer>
              </CardForComments>
            </div>
          ))}
      </div>
      <Card>
        <AddComment placeholder="Add a comment..."></AddComment>
        <FooterItems>
          <Images src={data.currentUser.image.png}></Images>
          <SendButton>send</SendButton>
        </FooterItems>
        
      </Card>
    </div>
  );
};

export default CommentSection;

const Line = styled.div`
  width: 2px;
  height: auto;
  background: #dddee0;
  margin-top: 16px;
`;

const Badge = styled.div`
  width: 36px;
  height: 19px;
  font-weight: 500;
  line-height: 18px;
  color: white;
  background: #5357b6;
  font-size: 13px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
`;

const AddComment = styled.textarea`
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
`;

const FooterItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`

const SendButton = styled.button`
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
    transition: all .3s ease;
    background: #c5c6ef;
    cursor: pointer;
  }
`;
