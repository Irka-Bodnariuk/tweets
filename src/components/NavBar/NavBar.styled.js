import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
`;

export const Link = styled(NavLink)`
  width: 100px;

  display: flex;

  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  color: #373737;

  background: #ebd8ff;
  text-decoration: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  color: #373737;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;

  cursor: pointer;

  &.active {
    background: #5cd3a8;
    color: #373737;
  }
`;
