import axios from "axios";
import { postListBySubscriber } from "./postListBySubscriber";
interface Props {
  keyword: string;
}
export const getListByKeyword = async ({ keyword }: Props) => {
  try {
    const { data } = await axios.get(
      `https://2rwhth5wwl.execute-api.ap-northeast-2.amazonaws.com/dev/getListByKeyword?searchQuery=${keyword}`
    );
    return postListBySubscriber({ list: data });
  } catch (error) {
    throw Error;
  }
};
