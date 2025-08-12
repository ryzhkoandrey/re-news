import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { getNews } from '../../api/apiNews';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import mockNews from '../../data/mockNews';
import NewsList from '../../components/NewsList/NewsList';

const Main = () => {
   const [news, setNews] = useState([]);
   console.log(news);

   useEffect(() => {
      const fetchNews = async () => {
         try {
            const response = await getNews();
            if (response?.news) {
               setNews(response.news);
            } else {
               console.warn('Ошибка сервера. Используем mockNews');
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
         <NewsList news={news} />
      </main>
   );
};

export default Main;
