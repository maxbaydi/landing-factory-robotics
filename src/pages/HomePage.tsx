import { Button, Typography, Card, Row, Col, Image } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useRef, useEffect, useState } from 'react';
import {
  RocketOutlined,
  ExperimentOutlined,
  CustomerServiceOutlined,
  SafetyOutlined,
  ThunderboltOutlined,
  RobotOutlined,
  GlobalOutlined,
  SettingOutlined,
  DashboardOutlined,
  ShoppingOutlined,
  BookOutlined,
  EnvironmentOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import SEO from '../components/SEO';
import SchemaOrg from '../components/SchemaOrg';
import AnimatedStarryBackground from '../components/AnimatedStarryBackground';
import productsData from '../data/products.json';
import './HomePage.css';

const { Title, Paragraph } = Typography;

const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const galleryTrackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const featuredProducts = productsData.slice(0, 8);
  
  const featuredProductIds = ['dt-01-pro', 'pt-03', 'ht-01', 'gt-01', 'mt-04-pro', 'ht-02'];
  const productsForShowcase = productsData.filter(p => featuredProductIds.includes(p.id));
  const topRowProducts = productsForShowcase.slice(0, 3);
  const bottomRowProducts = productsForShowcase.slice(3, 6);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (galleryTrackRef.current) {
        e.preventDefault();
        galleryTrackRef.current.scrollLeft += e.deltaY;
      }
    };

    const galleryElement = galleryTrackRef.current;
    if (galleryElement) {
      galleryElement.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (galleryElement) {
        galleryElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  const advantages = [
    {
      icon: <RocketOutlined />,
      title: t('home.advantages.experience.title'),
      description: t('home.advantages.experience.description'),
    },
    {
      icon: <ExperimentOutlined />,
      title: t('home.advantages.innovation.title'),
      description: t('home.advantages.innovation.description'),
    },
    {
      icon: <CustomerServiceOutlined />,
      title: t('home.advantages.customization.title'),
      description: t('home.advantages.customization.description'),
    },
    {
      icon: <SafetyOutlined />,
      title: t('home.advantages.quality.title'),
      description: t('home.advantages.quality.description'),
    },
  ];

  const applications = [
    {
      icon: <DashboardOutlined />,
      title: t('home.applications.manufacturing.title'),
      description: t('home.applications.manufacturing.description'),
    },
    {
      icon: <ShoppingOutlined />,
      title: t('home.applications.logistics.title'),
      description: t('home.applications.logistics.description'),
    },
    {
      icon: <BookOutlined />,
      title: t('home.applications.education.title'),
      description: t('home.applications.education.description'),
    },
    {
      icon: <EnvironmentOutlined />,
      title: t('home.applications.agriculture.title'),
      description: t('home.applications.agriculture.description'),
    },
  ];

  const technologies = [
    {
      icon: <GlobalOutlined />,
      title: t('home.technologies.slam.title'),
      description: t('home.technologies.slam.description'),
    },
    {
      icon: <RobotOutlined />,
      title: t('home.technologies.autonomous.title'),
      description: t('home.technologies.autonomous.description'),
    },
    {
      icon: <ThunderboltOutlined />,
      title: t('home.technologies.avoidance.title'),
      description: t('home.technologies.avoidance.description'),
    },
    {
      icon: <SettingOutlined />,
      title: t('home.technologies.ros.title'),
      description: t('home.technologies.ros.description'),
    },
  ];

  const additionalInfo = [
    {
      icon: <ThunderboltOutlined />,
      title: t('home.additionalInfo.autoCharging.title'),
      description: t('home.additionalInfo.autoCharging.description'),
    },
    {
      icon: <RocketOutlined />,
      title: t('home.additionalInfo.highPayload.title'),
      description: t('home.additionalInfo.highPayload.description'),
    },
    {
      icon: <GlobalOutlined />,
      title: t('home.additionalInfo.allWeather.title'),
      description: t('home.additionalInfo.allWeather.description'),
    },
    {
      icon: <SettingOutlined />,
      title: t('home.additionalInfo.modular.title'),
      description: t('home.additionalInfo.modular.description'),
    },
    {
      icon: <DashboardOutlined />,
      title: t('home.additionalInfo.industryManufacturing.title'),
      description: t('home.additionalInfo.industryManufacturing.description'),
    },
    {
      icon: <ShoppingOutlined />,
      title: t('home.additionalInfo.warehouseLogistics.title'),
      description: t('home.additionalInfo.warehouseLogistics.description'),
    },
    {
      icon: <BookOutlined />,
      title: t('home.additionalInfo.educationResearch.title'),
      description: t('home.additionalInfo.educationResearch.description'),
    },
    {
      icon: <EnvironmentOutlined />,
      title: t('home.additionalInfo.agricultureFarming.title'),
      description: t('home.additionalInfo.agricultureFarming.description'),
    },
  ];

  return (
    <>
      <SEO
        title={t('seo.home.title')}
        description={t('seo.home.description')}
        keywords={t('seo.home.keywords')}
      />
      <SchemaOrg
        type="Organization"
        data={{
          name: 'Comet Forward Intelligent Technology',
          url: window.location.origin,
          description: t('home.about.description'),
          telephone: '+7 (XXX) XXX-XX-XX',
          email: 'info@cometforward.com',
          addressLocality: 'Город',
          addressRegion: 'Регион',
          addressCountry: 'RU',
        }}
      />
      
      <div className="home-page">
        <section className="hero-section">
          <AnimatedStarryBackground />
          <div className="hero-background-image">
            <img src="/public/main_hero.png" alt="Robots Background" />
          </div>
          <div className="hero-gradient-overlay"></div>
          
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-label">
                <RobotOutlined className="hero-label-icon" />
                {t('home.hero.label')}
              </div>
              <Title level={1} className="hero-title">
                {t('home.hero.title')}
              </Title>
              
              <div className="hero-company-brand">
                <img src="/logo.png" alt="Comet Forward" className="hero-company-logo" />
                <div className="hero-company-info">
                  <h2 className="hero-company-name-chinese">慧行智能科技</h2>
                  <p className="hero-company-name-english">Comet Forward Intelligent Technology Co., Ltd.</p>
                </div>
              </div>
              
              <Paragraph className="hero-subtitle">
                {t('home.hero.subtitle')}
              </Paragraph>
              
              <div className="hero-stats">
                <div className="hero-stat">
                  <RobotOutlined className="hero-stat-icon" />
                  <div className="hero-stat-content">
                    <h3>20+</h3>
                    <p>моделей роботов</p>
                  </div>
                </div>
                <div className="hero-stat">
                  <RocketOutlined className="hero-stat-icon" />
                  <div className="hero-stat-content">
                    <h3>10+</h3>
                    <p>лет опыта</p>
                  </div>
                </div>
              </div>
              
              <Button
                type="primary"
                size="large"
                className="hero-cta"
                onClick={() => navigate('/products')}
              >
                {t('home.hero.cta')}
              </Button>
            </div>
          </div>
        </section>

        <section className="products-gallery-section">
          <div className="container">
            <Title level={2} className="section-title gradient-text">
              {t('home.featuredProducts.title')}
            </Title>
            <Paragraph style={{ textAlign: 'center', color: '#A0A0A0', fontSize: '18px', marginBottom: '60px' }}>
              {t('home.featuredProducts.subtitle')}
            </Paragraph>
            
            <div className="gallery-container">
              <div 
                className={`gallery-track ${isPaused ? 'paused' : ''}`}
                ref={galleryTrackRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {[...featuredProducts, ...featuredProducts].map((product, index) => (
                  <Card
                    key={`${product.id}-${index}`}
                    className="product-card gallery-card"
                    hoverable
                    onClick={() => navigate(`/products/${product.id}`)}
                    cover={
                      <img
                        alt={product.name}
                        src={product.images.main}
                        className="product-card-image"
                      />
                    }
                  >
                    <div className="product-card-content">
                      <Title level={4} className="product-card-title">
                        {product.name}
                      </Title>
                      <Paragraph className="product-card-description">
                        {product.specifications['Назначение'] || product.specifications['Тип/Категория']}
                      </Paragraph>
                      <Button className="product-card-button">
                        {t('featured.viewDetails')}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="container">
            <div className="info-section-with-image">
              <div className="info-section-image">
                <img src="/public/инновационная мастерская (1).png" alt="Innovation" />
              </div>
              <div className="info-section-content">
                <Title level={2} className="info-section-title gradient-text">
                  {t('home.advantages.title')}
                </Title>
                <ul className="info-section-list">
                  {advantages.map((item, index) => (
                    <li key={index} className="info-section-list-item">
                      <div className="info-section-list-item-icon">
                        {item.icon}
                      </div>
                      <div className="info-section-list-item-content">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="info-section-with-image info-section-reverse">
              <div className="info-section-image">
                <img src="/public/демонстрационный стенд (1).png" alt="Applications" />
              </div>
              <div className="info-section-content">
                <Title level={2} className="info-section-title gradient-text">
                  {t('home.applications.title')}
                </Title>
                <ul className="info-section-list">
                  {applications.map((item, index) => (
                    <li key={index} className="info-section-list-item">
                      <div className="info-section-list-item-icon">
                        {item.icon}
                      </div>
                      <div className="info-section-list-item-content">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="info-section-with-image">
              <div className="info-section-image">
                <img src="/public/инновационная мастерская (3).png" alt="Technologies" />
              </div>
              <div className="info-section-content">
                <Title level={2} className="info-section-title gradient-text">
                  {t('home.technologies.title')}
                </Title>
                <ul className="info-section-list">
                  {technologies.map((item, index) => (
                    <li key={index} className="info-section-list-item">
                      <div className="info-section-list-item-icon">
                        {item.icon}
                      </div>
                      <div className="info-section-list-item-content">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="products-showcase-section">
          <div className="container">
            <Title level={2} className="section-title gradient-text">
              {t('featured.hero.title')}
            </Title>
            <Paragraph style={{ textAlign: 'center', color: '#A0A0A0', fontSize: '18px', marginBottom: '60px' }}>
              {t('featured.hero.subtitle')}
            </Paragraph>

            <div className="featured-products-grid">
              <Row gutter={[{ xs: 16, sm: 24, md: 32 }, { xs: 24, sm: 32 }]}>
                {topRowProducts.map((product) => (
                  <Col xs={24} sm={12} lg={8} key={product.id}>
                    <Card 
                      className="featured-product-card clickable"
                      onClick={() => navigate(`/products/${product.id}`)}
                    >
                      <div className="featured-card-content">
                        <div className="featured-image-wrapper">
                          <img
                            src={product.images.main}
                            alt={product.name}
                            className="featured-product-image"
                            onError={(e) => {
                              e.currentTarget.src = '/public/main_hero.png';
                            }}
                          />
                        </div>
                        <div className="featured-info">
                          <div className="featured-category">{product.category}</div>
                          <Title level={3} className="featured-product-title">
                            {product.name}
                          </Title>
                          <Paragraph className="featured-description" ellipsis={{ rows: 2 }}>
                            {product.description || `Категория: ${product.category}`}
                          </Paragraph>
                          <Button 
                            type="primary" 
                            size="large"
                            className="featured-view-button"
                          >
                            {t('featured.viewDetails')}
                            <ArrowRightOutlined />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>

              <div className="bottom-row-wrapper">
                <Row gutter={[{ xs: 16, sm: 24, md: 32 }, { xs: 24, sm: 32 }]}>
                  {bottomRowProducts.map((product) => (
                    <Col xs={24} sm={12} lg={8} key={product.id}>
                      <Card className="featured-product-card non-clickable">
                        <div className="featured-card-content">
                          <div className="featured-image-wrapper">
                            <img
                              src={product.images.main}
                              alt={product.name}
                              className="featured-product-image"
                              onError={(e) => {
                                e.currentTarget.src = '/public/main_hero.png';
                              }}
                            />
                          </div>
                          <div className="featured-info">
                            <div className="featured-category">{product.category}</div>
                            <Title level={3} className="featured-product-title">
                              {product.name}
                            </Title>
                            <Paragraph className="featured-description" ellipsis={{ rows: 2 }}>
                              {product.description || `Категория: ${product.category}`}
                            </Paragraph>
                            <Button 
                              type="primary" 
                              size="large"
                              className="featured-view-button"
                            >
                              {t('featured.viewDetails')}
                              <ArrowRightOutlined />
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>

            <div className="catalog-cta">
              <div className="cta-content">
                <Title level={2} className="cta-title">
                  {t('featured.catalog.title')}
                </Title>
                <Paragraph className="cta-subtitle">
                  {t('featured.catalog.subtitle')}
                </Paragraph>
                <Button 
                  type="primary" 
                  size="large"
                  onClick={() => navigate('/catalog')}
                  className="catalog-button"
                >
                  {t('featured.catalog.button')}
                  <ArrowRightOutlined />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="additional-info-section">
          <div className="container">
            <Title level={2} className="section-title gradient-text">
              {t('home.additionalInfo.title')}
            </Title>
            <Paragraph style={{ textAlign: 'center', color: '#A0A0A0', fontSize: '18px', marginBottom: '40px' }}>
              {t('home.additionalInfo.subtitle')}
            </Paragraph>
            
            <div className="additional-info-grid">
              {additionalInfo.map((item, index) => (
                <div key={index} className="additional-info-card">
                  <div className="additional-info-icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="workshops-section">
          <div className="container">
            <Title level={2} className="section-title gradient-text">
              {t('home.workshops.title')}
            </Title>
            <Paragraph style={{ textAlign: 'center', color: '#A0A0A0', fontSize: '18px', marginBottom: '60px' }}>
              {t('home.workshops.subtitle')}
            </Paragraph>

            <div className="workshop-block workshop-block-first">
              <Title level={3} className="workshop-title">
                {t('home.workshops.display.title')}
              </Title>
              <Image.PreviewGroup>
                <div className="workshop-gallery">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="workshop-image-wrapper">
                      <Image
                        src={`/public/демонстрационный стенд (${num}).png`}
                        alt={`${t('home.workshops.display.title')} ${num}`}
                        className="workshop-image"
                      />
                    </div>
                  ))}
                </div>
              </Image.PreviewGroup>
            </div>

            <div className="workshop-block workshop-block-second">
              <Title level={3} className="workshop-title">
                {t('home.workshops.innovation.title')}
              </Title>
              <Image.PreviewGroup>
                <div className="workshop-gallery">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="workshop-image-wrapper">
                      <Image
                        src={`/public/инновационная мастерская (${num}).png`}
                        alt={`${t('home.workshops.innovation.title')} ${num}`}
                        className="workshop-image"
                      />
                    </div>
                  ))}
                </div>
              </Image.PreviewGroup>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
