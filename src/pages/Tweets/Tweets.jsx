import { useEffect, useState } from "react";

import { getTweets } from "../../utils/api";

import ListCard from "../../components/ListCards/ListCards";

const Tweets = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const users = await getTweets();

        setTweets(users);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTweets();
  }, []);

  return (
    <>
      <ListCard tweets={tweets} />
    </>
  );
};

export default Tweets;
