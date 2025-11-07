import { ReactNode } from 'react';
import { Layout as AntLayout } from 'antd';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import PageTransition from '../PageTransition';

const { Content } = AntLayout;

interface LayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: LayoutProps) => {
  const location = useLocation();

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Header />
      <PageTransition key={location.pathname}>
        <Content>{children}</Content>
        <Footer />
      </PageTransition>
    </AntLayout>
  );
};

export default AppLayout;


