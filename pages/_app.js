import Layout from '../components/Layout';
import { WeatherProvider } from '../WeatherContext';

const MyApp = ({ Component, pageProps }) => {
  return (
    <WeatherProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WeatherProvider>
  );
};

export default MyApp;
