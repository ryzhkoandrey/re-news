import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { getNews } from '../../api/apiNews';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import mockNews from '../../data/mockNews';
import NewsList from '../../components/NewsList/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton';

const Main = () => {
   const [news, setNews] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const fetchNews = async () => {
         try {
            const response = await getNews();
            if (response?.news) {
               setNews(response.news);
            } else {
               setNews(mockNews);
               console.warn('Ошибка сервера. Используем mockNews');
               console.log(news);
            }
         } catch (error) {
            console.log(error);
         } finally {
            // setIsLoading(false);
         }
      };

      fetchNews();
   }, []);

   return (
      <main className={styles.main}>
         {news.length > 0 && !isLoading ? (
            <NewsBanner item={news[0]} />
         ) : (
            <Skeleton type="banner" count={1} />
         )}

         <NewsList news={news} />
      </main>
   );
};

export default Main;
