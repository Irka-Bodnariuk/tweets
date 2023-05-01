import PropTypes from "prop-types";
import { useState } from "react";

import Card from "../Card/Card";
import Button from "../Button/Button";

import { List } from "./ListCard.styled";

const ListCards = ({ tweets }) => {
  const [page, setPage] = useState(3);

  return (
    <>
      <List>
        {tweets
          ?.slice(0, page)
          .map(({ id, avatar, followers, tweets, user, follow }) => {
            return (
              <Card
                key={id}
                id={id}
                avatar={avatar}
                followers={followers}
                tweets={tweets}
                user={user}
                follow={follow}
              />
            );
          })}
      </List>
      {page < tweets.length && (
        <Button onClick={() => setPage((prevState) => prevState + 3)}>
          Load More
        </Button>
      )}
    </>
  );
};

ListCards.propTypes = {
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      followers: PropTypes.number.isRequired,
      tweets: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      follow: PropTypes.bool.isRequired,
    })
  ),
};

export default ListCards;
