import { Card, Row, Col, Typography } from 'antd';
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import './ContactsPage.css';

const { Title, Paragraph, Text } = Typography;

const ContactsPage = () => {
  const { t } = useTranslation();

  const contactItems = [
    {
      icon: <PhoneOutlined />,
      title: t('contacts.phone'),
      content: t('contacts.phonePlaceholder'),
      color: '#00D9FF',
    },
    {
      icon: <MailOutlined />,
      title: t('contacts.email'),
      content: t('contacts.emailPlaceholder'),
      color: '#0066FF',
    },
    {
      icon: <EnvironmentOutlined />,
      title: t('contacts.address'),
      content: t('contacts.addressPlaceholder'),
      color: '#00D9FF',
    },
    {
      icon: <ClockCircleOutlined />,
      title: t('contacts.workHours'),
      content: t('contacts.workHoursText'),
      color: '#0066FF',
    },
  ];

  return (
    <>
      <SEO
        title={t('seo.contacts.title')}
        description={t('seo.contacts.description')}
        keywords={t('seo.contacts.keywords')}
      />

      <div className="contacts-page">
        <div className="contacts-header-container">
          <div className="container">
            <Title level={1} className="page-title">
              {t('contacts.title')}
            </Title>
            <Paragraph className="page-subtitle">
              {t('contacts.subtitle')}
            </Paragraph>
          </div>
        </div>

        <div className="container contacts-content">
          <Row gutter={[48, 48]}>
            {contactItems.map((item, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card className="contact-item-card card-hover">
                  <div className="contact-item">
                    <div className="contact-icon">{item.icon}</div>
                    <div className="contact-text">
                      <Text className="contact-title">{item.title}</Text>
                      <Text className="contact-content">{item.content}</Text>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          <Row gutter={[48, 48]} className="info-row">
            <Col xs={24} lg={12}>
              <Card className="company-info-card card-hover">
                <Title level={4} className="info-title gradient-text">
                  {t('contacts.companyPlaceholder')}
                </Title>
                <Paragraph className="info-text">
                  {t('home.about.description')}
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card className="map-placeholder card-hover">
                <div className="map-placeholder-content">
                  <EnvironmentOutlined className="map-icon" />
                  <Title level={4} className="map-title">
                    Интерактивная карта
                  </Title>
                  <Paragraph className="map-description">
                    Местоположение нашего офиса
                  </Paragraph>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ContactsPage;

