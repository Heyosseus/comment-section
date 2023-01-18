import styled from "styled-components";


export const Card = styled.div`
  width: 92vw;
  background: #fff;
  height: 256px;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 243px;
`;
export const Images = styled.img`
  width: 32px;
  height: 32px;
`;

export const Username = styled.h3`
  font-weight: 500;
  line-height: 19px;
  color: #334253;
`;

export const CreatedAt = styled.p`
  font-weight: 400;
  line-height: 24px;
  color: #67727e;
`;

export const Comments = styled.p`
  font-weight: 400;
  line-height: 24px;
  color: #67727e;
  margin-top: 16px;
`;