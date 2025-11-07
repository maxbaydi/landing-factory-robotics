import { Card, Row, Col, Typography } from 'antd';
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import AnimatedStarryBackground from '../components/AnimatedStarryBackground';
import './ContactsPage.css';

const { Title, Paragraph, Text } = Typography;

interface RepresentativeData {
  title: string;
  phoneOffice: string;
  phoneMessengers?: string;
  messengersLabel?: string;
  address: string;
  addressChinese?: string;
  email: string;
  mapUrl: string;
}

const ContactsPage = () => {
  const { t } = useTranslation();

  const representatives: RepresentativeData[] = [
    {
      title: t('contacts.russia.title'),
      phoneOffice: t('contacts.russia.phoneOffice'),
      phoneMessengers: t('contacts.russia.phoneMessengers'),
      messengersLabel: t('contacts.russia.messengersLabel'),
      address: t('contacts.russia.address'),
      email: t('contacts.russia.email'),
      mapUrl: t('contacts.russia.mapUrl'),
    },
    {
      title: t('contacts.kazakhstan.title'),
      phoneOffice: t('contacts.kazakhstan.phoneOffice'),
      phoneMessengers: t('contacts.kazakhstan.phoneMessengers'),
      messengersLabel: t('contacts.kazakhstan.messengersLabel'),
      address: t('contacts.kazakhstan.address'),
      email: t('contacts.kazakhstan.email'),
      mapUrl: t('contacts.kazakhstan.mapUrl'),
    },
    {
      title: t('contacts.china.title'),
      phoneOffice: t('contacts.china.phoneOffice'),
      address: t('contacts.china.address'),
      addressChinese: t('contacts.china.addressChinese'),
      email: t('contacts.china.email'),
      mapUrl: t('contacts.china.mapUrl'),
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
          <AnimatedStarryBackground />
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
          <Row gutter={[{ xs: 0, sm: 24, md: 32 }, { xs: 24, sm: 32 }]} className="representatives-row">
            {representatives.map((rep, index) => (
              <Col xs={24} key={index}>
                <Card className="representative-card">
                  <Row gutter={{ xs: 0, sm: 24, md: 32 }} align="stretch">
                    <Col xs={24} lg={10}>
                      <div className="contact-section">
                        <Title level={3} className="representative-title">
                          {rep.title}
                        </Title>

                        <div className="contact-info">
                          <div className="contact-item">
                            <PhoneOutlined className="contact-icon" />
                            <div className="contact-details">
                              <Text className="contact-label">
                                {t('contacts.phone')} ({t('contacts.officeLabel')})
                              </Text>
                              <Text className="contact-value">{rep.phoneOffice}</Text>
                            </div>
                          </div>

                          {rep.phoneMessengers && (
                            <div className="contact-item">
                              <WhatsAppOutlined className="contact-icon" />
                              <div className="contact-details">
                                <Text className="contact-label">
                                  {rep.messengersLabel}
                                </Text>
                                <Text className="contact-value">
                                  {rep.phoneMessengers}
                                </Text>
                              </div>
                            </div>
                          )}

                          <div className="contact-item">
                            <EnvironmentOutlined className="contact-icon" />
                            <div className="contact-details">
                              <Text className="contact-label">
                                {t('contacts.address')}
                              </Text>
                              <Text className="contact-value">{rep.address}</Text>
                              {rep.addressChinese && (
                                <Text className="contact-value-chinese">
                                  ({rep.addressChinese})
                                </Text>
                              )}
                            </div>
                          </div>

                          <div className="contact-item">
                            <MailOutlined className="contact-icon" />
                            <div className="contact-details">
                              <Text className="contact-label">
                                {t('contacts.email')}
                              </Text>
                              <Text className="contact-value">
                                <a href={`mailto:${rep.email}`}>{rep.email}</a>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col xs={24} lg={14}>
                      <div className="map-container">
                        <iframe
                          src={rep.mapUrl}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`Map ${rep.title}`}
                        />
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default ContactsPage;

