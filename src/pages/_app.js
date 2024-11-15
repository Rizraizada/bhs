import { useRouter } from 'next/router';
import '@/styles/globals.css';
import Layout from '@/components/Layout';
import UserProvider from '@/context/UserContext';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isAdminRoute = router.pathname.startsWith('/admin/');

  return (
    <UserProvider>
      {isAdminRoute ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </UserProvider>
  );
}
