import PropTypes from "prop-types";
import { useState } from "react";

import Button from "../Button/Button";
import logo from "../../images/Vector.png";

import { decrementTweets, incrementTweets } from "../../utils/api";

import {
  Item,
  Line,
  WrapAvatar,
  Avatar,
  Logo,
  Image,
  Tweets,
  Followers,
} from "./Card.styled";

const Card = ({ id, avatar, followers, tweets, user, follow }) => {
  const [isfollow, setIsFollow] = useState(follow);
  const [followersUser, setFollowersUser] = useState(followers);

  const ToggleFollow = async () => {
    try {
      if (!isfollow) {
        const user = await incrementTweets(id, followers);

        setFollowersUser(user.followers);
        setIsFollow(user.follow);
      }
      if (isfollow) {
        const user = await decrementTweets(id, followers);

        setFollowersUser(user.followers);
        setIsFollow(user.follow);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Item>
      <Logo src={logo} alt="logo" />
      <Image />

      <Line>
        <WrapAvatar>
          <Avatar src={avatar} alt={user} />
        </WrapAvatar>
      </Line>

      <Tweets>{tweets} Tweets</Tweets>
      <Followers>{followersUser.toLocaleString("en-US")} Followers</Followers>

      <Button onClick={() => ToggleFollow()} follow={isfollow}>
        {isfollow ? "Following" : "Follow"}
      </Button>
    </Item>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  tweets: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  follow: PropTypes.bool.isRequired,
};

export default Card;
