import axios from "axios";
export const postListBySubscriber = async ({ list }: any) => {
  try {
    const { data } = await axios.post(
      "https://2rwhth5wwl.execute-api.ap-northeast-2.amazonaws.com/dev/postListBySubscriber",
      list
    );
    return data;
  } catch (error) {
    throw Error;
  }
};
