import { data } from "./constants/data.js";
import news from "./modal/news.js";

const DefaultData = async () => {
  try {
    await news.deleteMany({});
    await news.insertMany(data);
    console.log("data importes successfully");
  } catch (error) {
    console.log("error", error.message);
  }
};
export default DefaultData;
