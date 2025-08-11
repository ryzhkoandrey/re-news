import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { getNews } from '../../api/apiNews';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import mockNews from '../../data/mockNews';

const Main = () => {
   const [news, setNews] = useState([]);
   console.log(news);

   useEffect(() => {
      const fetchNews = async () => {
         try {
            const response = await getNews();
            if (Array.isArray(response?.news) && response.news.length > 0) {
               setNews(response.news);
            } else {
               console.warn('Новости не получены или пусты. Используем mockNews');
               setNews(mockNews);
            }
         } catch (error) {
            console.log(error);
         }
      };

      fetchNews();
   }, []);

   return (
      <main className={styles.main}>
         {news.length > 0 ? <NewsBanner item={news[0]} /> : null}
      </main>
   );
};

export default Main;
