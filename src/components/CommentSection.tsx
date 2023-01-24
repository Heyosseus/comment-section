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
  handleClick: any;
  display: any;
  selectedComment: any;
  increment: any;
  decrement: any;
}

import data from '../data.json';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddComment, { SendButton } from './AddComment';

const CommentSection: React.FC<Props> = ({
  props,
  handleClick,
  display,
  selectedComment,
  increment,
  decrement,
}) => {
  const [isEditable, setIsEditable] = useState(false);
  const [commentContainer, setCommentContainer] = useState(
    data.comments[1].content
  );
  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  return (
    <div>
      <div>
        {props &&
          props.map((comment: any) => (
            <div>
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
                  <Comments>
                    {comment.user.username === 'ramsesmiron' ? (
                      <Comments>
                        <ReplayingTo>
                          @{comment.replyingTo}
                        </ReplayingTo>
                        {comment.content}
                      </Comments>
                    ) : (
                      <div>
                        <Comments style={{ display: 'flex' }}>
                          {isEditable ? (
                            <EditContent
                              value={commentContainer}
                              onChange={(e) =>
                                setCommentContainer(e.target.value)
                              }
                            />
                          ) : (
                            <div>
                              <ReplayingTo>
                                @{comment.replyingTo}
                              </ReplayingTo>
                              {comment.content}
                            </div>
                          )}
                        </Comments>
                        <ButtonDirection>
                          {isEditable ? (
                            <SendButton>update</SendButton>
                          ) : (
                            ''
                          )}
                        </ButtonDirection>
                      </div>
                    )}
                  </Comments>
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

                    <Reply onClick={() => handleClick(comment.id)}>
                      {comment.user.username === 'ramsesmiron' ? (
                        <ReplyIcon src={reply}></ReplyIcon>
                      ) : (
                        <DeleteIcon src={deleteIcon}></DeleteIcon>
                      )}
                      {comment.user.username === 'ramsesmiron' ? (
                        'Replay'
                      ) : (
                        <span style={{ color: '#ED6368' }}>
                          Delete
                        </span>
                      )}

                      {comment.user.username === 'ramsesmiron' ? (
                        ''
                      ) : (
                        <EditIcon
                          src={edit}
                          onClick={toggleEdit}
                        ></EditIcon>
                      )}

                      {comment.user.username === 'ramsesmiron'
                        ? ''
                        : 'Edit'}
                    </Reply>
                  </Footer>
                </CardForComments>
              </div>
              {selectedComment === comment.id &&
              display &&
              comment.user.username === 'ramsesmiron' ? (
                <AddComment />
              ) : null}
            </div>
          ))}
      </div>
      <AddComment />
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

const ReplayingTo = styled.span`
  color: #5357b6;
  font-weight: 500;
  margin-right: 6px;
`;

const EditContent = styled.textarea`
  width: 80vw;
  height: 122px;
  outline: none;
  padding: 8px;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  color: #67727e;
  margin-top: 16px;
  overflow-wrap: break-word;
  border-radius: 5px;
  border: 1px solid #5357b6;
  resize: none;
`;

const ButtonDirection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;
