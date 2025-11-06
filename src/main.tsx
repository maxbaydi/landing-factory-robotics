import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import App from './App';
import './i18n';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#5A4FF5',
          colorBgBase: '#000000',
          colorTextBase: '#FFFFFF',
          colorBgContainer: '#111111',
          colorBorder: '#222222',
          borderRadius: 12,
          fontFamily: "'Inter', sans-serif",
          fontSize: 16,
        },
        components: {
          Layout: {
            headerBg: 'rgba(0, 0, 0, 0.8)',
            bodyBg: '#000000',
            footerBg: '#000000',
          },
          Card: {
            colorBgContainer: '#050505',
          },
          Button: {
            primaryShadow: '0 8px 25px rgba(90, 79, 245, 0.4)',
          },
          Menu: {
            darkItemBg: 'transparent',
            darkItemSelectedBg: '#111111',
          },
          Input: {
            colorBgContainer: '#111111',
            colorTextPlaceholder: '#888888',
          },
          Select: {
            colorBgContainer: '#111111',
          },
        },
      }}
      locale={ruRU}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </StrictMode>
);

