import { Layout, Row, Col, Typography, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Footer.css';

const { Footer: AntFooter } = Layout;
const { Text, Title } = Typography;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <AntFooter className="site-footer">
      <div className="footer-content">
        <Row gutter={[48, 48]} className="footer-main">
          <Col xs={24} sm={24} md={6} className="footer-brand-section">
            <div className="footer-logo">
              <img src="/logo.png" alt="Comet Forward" className="footer-logo-image" />
              <Text className="footer-logo-text">COMET FORWARD</Text>
            </div>
            <Text className="footer-address">{t('footer.address')}</Text>
          </Col>

          <div className="footer-divider" />

          <Col xs={24} sm={24} md={6} className="footer-nav-section">
            <div className="footer-links">
              <Link to="/" className="footer-link">
                {t('nav.home')}
              </Link>
              <Link to="/products" className="footer-link">
                {t('nav.products')}
              </Link>
              <Link to="/contacts" className="footer-link">
                {t('nav.contacts')}
              </Link>
            </div>
          </Col>

          <div className="footer-divider" />

          <Col xs={24} sm={24} md={10} className="footer-cta-section">
            <div className="footer-cta">
              <Title level={4} className="footer-cta-title">
                {t('footer.cta.title')}
              </Title>
              <Text className="footer-cta-subtitle">
                {t('footer.cta.subtitle')}
              </Text>
              <Link to="/contacts">
                <Button type="primary" size="large" className="footer-cta-button">
                  {t('footer.cta.button')}
                </Button>
              </Link>
            </div>
          </Col>
        </Row>

        <div className="footer-bottom-divider" />

        <div className="footer-copyright">
          <Text>{t('footer.copyright')}</Text>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;

