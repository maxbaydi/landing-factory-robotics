import { Layout, Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

const { Header: AntHeader } = Layout;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const menuItems = [
    {
      key: '/',
      label: t('nav.home'),
    },
    {
      key: '/catalog',
      label: t('nav.products'),
    },
    {
      key: '/contacts',
      label: t('nav.contacts'),
    },
  ];

  const handleMenuClick = (e: { key: string }) => {
    navigate(e.key);
  };

  return (
    <AntHeader className="site-header">
      <div className="header-content">
        <div className="nav-container">
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={menuItems}
            onClick={handleMenuClick}
            className="header-menu"
          />
        </div>
      </div>
    </AntHeader>
  );
};

export default Header;

