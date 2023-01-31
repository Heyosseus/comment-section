import styled from 'styled-components';
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const VotingComp = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  height: 40px;
  background: #f5f6fa;
  border-radius: 10px;
  margin-top: 16px;
  &:hover {
    cursor: pointer;
  }
  /* @media (min-width: 1024px){
    display: grid;
    height: 80px;
    width: 30px;
  } */
`;

export const PlusIcon = styled.img`
  width: 10px;
  height: 10px;
`;

export const MinusIcon = styled.img`
  width: 10px;
  height: 3px;
`;

export const ReplyIcon = styled.img`
  width: 14px;
  height: 12.2px;
`;
export const EditIcon = styled.img`
  width: 14px;
  height: 14px;
`;
export const DeleteIcon = styled.img`
  width: 12px;
  height: 14px;
`;

export const Score = styled.div`
  color: #5357b6;
  font-weight: 500;
  line-height: 19px;
`;

export const Reply = styled.div`
  color: #5357b6;
  font-weight: 500;
  line-height: 24px;
  display: flex;
  gap: 4px;
  align-items: center;
  margin-top: 16px;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
`;
