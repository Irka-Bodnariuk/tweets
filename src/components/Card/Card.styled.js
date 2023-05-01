import styled from "styled-components";

import img from "../../images/picture2_1.png";

export const Item = styled.li`
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 380px;
  height: 460px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Image = styled.div`
  width: 308px;
  height: 168px;
  background-image: url(${img});
  margin-top: 28px;
  margin-bottom: 18px;
`;

export const Line = styled.div`
  position: relative;
  width: 380px;
  height: 8px;
  margin-bottom: 62px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const WrapAvatar = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  left: 150px;
  top: -36px;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 85.9232px;
`;
export const Avatar = styled.img`
  display: flex;

  width: 62px;
  height: 62px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  border-radius: 85.9232px;
`;
export const Tweets = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 16px;

  color: #ebd8ff;
`;
export const Followers = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
  margin: 0;
  margin-bottom: 26px;
`;
