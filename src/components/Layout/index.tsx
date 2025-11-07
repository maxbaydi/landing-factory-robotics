import { ReactNode } from 'react';
import { Layout as AntLayout } from 'antd';
import Header from './Header';
import Footer from './Footer';

const { Content } = AntLayout;

interface LayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: LayoutProps) => {
  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </AntLayout>
  );
};

export default AppLayout;


