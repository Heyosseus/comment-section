import styled from "styled-components";


export const Card = styled.div`
  width: 92vw;
  background: #fff;
  height: auto;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
  @media (min-width: 1024px) {
    justify-content: center;
    align-items: center;
    width: 880px;
  }
`;
export const CardForComments = styled(Card)`
  width: 90vw;
  margin: 16px 0 0 16px;
  @media (min-width: 1024px) {
    justify-content: center;
    align-items: center;
    width: 880px;
  }
`;

export const CardHeaderForm = styled.form`
  width: 92vw;
  background: #fff;
  height: auto;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0 0 16px;
  @media (min-width: 1024px) {
    justify-content: center;
    align-items: center;
    width: 880px;
  }
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 263px;
`;
export const Images = styled.img`
  width: 32px;
  height: 32px;
  src: ${(props) => props.src};
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