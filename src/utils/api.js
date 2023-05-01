import axios from 'axios';

axios.defaults.baseURL = 'https://63ca6a48f36cbbdfc757bd22.mockapi.io/users';

export const getTweets = async () => {
  try {
    const { data } = await axios.get();
    return data;
  } catch (error) {
    console.log(error.message);
    return;
  }
};
export const incrementTweets = async (id, followers) => {
  try {
    const { data } = await axios.put(id, {
      followers: followers + 1,
      follow: true,
    });

    return data;
  } catch (error) {
    console.log(error.message);
    return;
  }
};
export const decrementTweets = async (id, followers) => {
  try {
    const { data } = await axios.put(id, {
      followers,
      follow: false,
    });

    return data;
  } catch (error) {
    console.log(error.message);
    return;
  }
};
