import { useEffect, useState } from 'react';
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
  initialValue: number;
}

function Contents<Props>({ initialValue }: any) {
  const [items, setItems] = useState<Items[]>();
  const [score, setScore] = useState(12);
  const [score2, setScore2] = useState(5);

  const Increment = () => {
    setScore(score + 1);
  };
  const Decrement = () => {
    setScore(score - 1);
  };

  useEffect(() => {
    if (Array.isArray(data)) {
      setItems(data);
    } else {
      setItems([data]);
    }
  }, []);
  return (
    <div>
      <div>
        {items &&
          items.map((item) => (
            <Card key={ID}>
              <Header>
                <Images src={firstAvatar}></Images>
                <Username>{item.comments[0].user.username}</Username>
                <CreatedAt>{item.comments[0].createdAt}</CreatedAt>
              </Header>
              <Comments>{item.comments[0].content}</Comments>
              <Footer>
                <VotingComp>
                  <PlusIcon
                    src={plus}
                    alt=""
                    onClick={Increment}
                  ></PlusIcon>
                  <Score>{score}</Score>
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
}

export default Contents;
