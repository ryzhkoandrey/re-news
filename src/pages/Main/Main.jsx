import styles from './styles.module.css';
import { useEffect } from 'react';
import { getNews } from '../../api/apiNews';
import NewsBanner from '../../components/NewsBanner/NewsBanner';

const Main = () => {
   useEffect(() => {
      const fetchNews = async () => {
         try {
            const news = await getNews();
            console.log(news);
         } catch (error) {
            console.log(error);
         }
      };

      fetchNews();
   }, []);

   return (
      <main className={styles.main}>
         <NewsBanner
            item={{
               title: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
               published: '2025-08-09T12:00:00Z',
               author: 'Troy Corlson',
               image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
            }}
         />
      </main>
   );
};

export default Main;
