import styled from "styled-components";
import { BsTwitter } from "react-icons/bs";

export const Container = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 24px;
  text-transform: uppercase;

  color: #373737;
`;
export const Twitter = styled(BsTwitter)`
  width: 200px;
  height: 200px;
  color: #5736a3;
`;
