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

type Items = {
  currentUser: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  comments: {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: {
      image: {
        png: string;
        webp: string;
      };
      username: string;
    };
    replies: {
      id: number;
      content: string;
      createdAt: string;
      score: number;
      replyingTo: string;
      user: {
        image: {
          png: string;
          webp: string;
        };
        username: string;
      };
    }[];
  }[];
};
import data from '../data.json';

const ID = Math.random() * 1000;

interface Props {
  comments: any;
}

export const Contents: React.FC<Props> = ({ comments }) => {
  const [items, setItems] = useState<Items[]>();
  const [score, setScore] = useState();

  console.log(comments.score);

  const Increment = () => {
    setScore(score + 1);
  };

  const Decrement = () => {
    setScore(score - 1);
  };

  return (
    <div>
      <div>
        {comments &&
          comments.map((comment: any) => (
            <Card key={comment.id}>
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
                    onClick={Increment}
                  ></PlusIcon>
                  <Score>{comment.score}</Score>
                  <MinusIcon
                    src={minus}
                    alt=""
                    onClick={Decrement}
                  ></MinusIcon>
                </VotingComp>
                <Reply>
                  <ReplyIcon src={reply}></ReplyIcon>
                  Replay
                </Reply>
              </Footer>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Contents;
