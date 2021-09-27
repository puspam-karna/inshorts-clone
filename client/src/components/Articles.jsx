import { useEffect, useState } from "react";
import { getNews } from "../service/api";
import InfiniteScroll from "react-infinite-scroll-component";
import Article from "./Article";

export default function Articles() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    dailyNews();
  }, [page]);
  const dailyNews = async () => {
    let response = await getNews(page);

    setNews([...news, ...response.data]);
  };
  return (
    <InfiniteScroll
      dataLength={news.length}
      next={() => setPage((page) => page + 1)}
      hasMore={true}
    >
      {news?.length && news.map((article) => <Article article={article} />)}
    </InfiniteScroll>
  );
}