import { Key, useEffect, useState } from 'react';
import firstAvatar from '../assets/avatars/image-amyrobson.png';
import secondAvatar from '../assets/avatars/image-maxblagun.png';
import plus from '../assets/icons/icon-plus.svg';
import minus from '../assets/icons/icon-minus.svg';
import reply from '../assets/icons/icon-reply.svg';

import {
  Card,
  Comments,
  CreatedAt,
  Header,
  Images,
  Username,
} from '../styles/Content';
import {
  Footer,
  MinusIcon,
  PlusIcon,
  Reply,
  ReplyIcon,
  Score,
  VotingComp,
} from '../styles/Footer';
import AddComment from './AddComment';

import data from '../data.json';

interface Props {
  comments: any;
  handleClick: any;
  display: any;
  selectedComment: any;
  increment: any;
  decrement: any;
}

const Contents: React.FC<Props> = ({
  comments,
  handleClick,
  display,
  selectedComment,
  increment,
  decrement,
}) => {
  return (
    <div>
      <div>
        {comments &&
          comments.map((comment: any) => (
            <div key={comment.id}>
              <Card>
                <Header>
                  <Images src={comment.user.image.png}></Images>
                  <Username>{comment.user.username}</Username>
                  <CreatedAt>{comment.createdAt}</CreatedAt>
                </Header>
                <Comments>{comment.content}</Comments>
                <Footer>
                  <VotingComp>
                    <PlusIcon
                      src={plus}
                      alt=""
                      onClick={increment}
                    ></PlusIcon>
                    <Score>{comment.score}</Score>
                    <MinusIcon
                      src={minus}
                      alt=""
                      onClick={decrement}
                    ></MinusIcon>
                  </VotingComp>
                  <Reply onClick={() => handleClick(comment.id)}>
                    <ReplyIcon src={reply}></ReplyIcon>
                    Replay
                  </Reply>
                </Footer>
              </Card>
              {selectedComment === comment.id && display ? (
                <AddComment />
              ) : null}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Contents;
