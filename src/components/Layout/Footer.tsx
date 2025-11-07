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
        <Row gutter={[{ xs: 0, sm: 24, md: 32, lg: 48 }, { xs: 48, sm: 48 }]} className="footer-main">
          <Col xs={24} sm={24} md={6} lg={6} className="footer-brand-section">
            <div className="footer-logo">
              <img src="/logo.png" alt="Comet Forward" className="footer-logo-image" />
              <Text className="footer-logo-text">COMET FORWARD</Text>
            </div>
            <div className="footer-address-item">
              <Text className="footer-address-country">{t('contacts.russia.title')}</Text>
              <Text className="footer-address-text">{t('contacts.russia.address')}</Text>
            </div>
            <div className="footer-address-item">
              <Text className="footer-address-country">{t('contacts.kazakhstan.title')}</Text>
              <Text className="footer-address-text">{t('contacts.kazakhstan.address')}</Text>
            </div>
            <div className="footer-address-item">
              <Text className="footer-address-country">{t('contacts.china.title')}</Text>
              <Text className="footer-address-text">{t('contacts.china.address')}</Text>
            </div>
          </Col>

          <Col xs={24} sm={24} md={6} lg={6} className="footer-contacts-section">
            <div className="footer-contact-item">
              <Text className="footer-contact-country">{t('contacts.russia.countryCode')}</Text>
              <div className="footer-contact-detail">
                <Text className="footer-contact-label">{t('contacts.phone')}</Text>
                <a href={`tel:${t('contacts.russia.phoneOffice').replace(/[^0-9+]/g, '')}`} className="footer-contact-link">
                  {t('contacts.russia.phoneOffice')}
                </a>
              </div>
              <div className="footer-contact-detail">
                <Text className="footer-contact-label">{t('contacts.email')}</Text>
                <a href={`mailto:${t('contacts.russia.email')}`} className="footer-contact-link">
                  {t('contacts.russia.email')}
                </a>
              </div>
            </div>
            <div className="footer-contact-item">
              <Text className="footer-contact-country">{t('contacts.kazakhstan.countryCode')}</Text>
              <div className="footer-contact-detail">
                <Text className="footer-contact-label">{t('contacts.phone')}</Text>
                <a href={`tel:${t('contacts.kazakhstan.phoneOffice').replace(/[^0-9+]/g, '')}`} className="footer-contact-link">
                  {t('contacts.kazakhstan.phoneOffice')}
                </a>
              </div>
              <div className="footer-contact-detail">
                <Text className="footer-contact-label">{t('contacts.email')}</Text>
                <a href={`mailto:${t('contacts.kazakhstan.email')}`} className="footer-contact-link">
                  {t('contacts.kazakhstan.email')}
                </a>
              </div>
            </div>
            <div className="footer-contact-item">
              <Text className="footer-contact-country">{t('contacts.china.countryCode')}</Text>
              <div className="footer-contact-detail">
                <Text className="footer-contact-label">{t('contacts.phone')}</Text>
                <a href={`tel:${t('contacts.china.phoneOffice').replace(/[^0-9+]/g, '')}`} className="footer-contact-link">
                  {t('contacts.china.phoneOffice')}
                </a>
              </div>
              <div className="footer-contact-detail">
                <Text className="footer-contact-label">{t('contacts.email')}</Text>
                <a href={`mailto:${t('contacts.china.email')}`} className="footer-contact-link">
                  {t('contacts.china.email')}
                </a>
              </div>
            </div>
          </Col>

          <Col xs={24} sm={24} md={6} lg={5} className="footer-nav-section">
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

          <Col xs={24} sm={24} md={6} lg={7} className="footer-cta-section">
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

