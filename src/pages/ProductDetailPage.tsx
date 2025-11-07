import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Row,
  Col,
  Typography,
  Button,
  Card,
  Descriptions,
  Tag,
  Image,
} from 'antd';
import { ArrowLeftOutlined, PhoneOutlined } from '@ant-design/icons';
import productsData from '../data/products.json';
import SEO from '../components/SEO';
import SchemaOrg from '../components/SchemaOrg';
import AnimatedStarryBackground from '../components/AnimatedStarryBackground';
import './ProductDetailPage.css';

const { Title, Paragraph } = Typography;

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  specifications: Record<string, string>;
  images: {
    main: string;
    details: string;
  };
  applications?: string;
  features?: string[];
}

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState<'main' | 'details'>('main');

  const product = (productsData as Product[]).find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <Title level={2}>Продукт не найден</Title>
        <Button type="primary" onClick={() => navigate('/products')}>
          Вернуться к каталогу
        </Button>
      </div>
    );
  }

  const seoTitle = `${product.name} | ${t('seo.products.title')}`;
  const seoDescription = product.description || t('seo.products.description');

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={`${product.name}, ${product.category}, ${t('seo.products.keywords')}`}
        image={product.images.main}
      />
      <SchemaOrg
        type="Product"
        data={{
          name: product.name,
          description: product.description,
          image: window.location.origin + product.images.main,
          brand: 'Comet Forward',
        }}
      />

      <div className="product-detail-page">
        <div className="product-header-container">
          <AnimatedStarryBackground />
          <div className="container">
            <Title level={1} className="product-hero-title">
              {product.name}
            </Title>
            {product.category && (
              <Paragraph className="product-hero-category">
                {product.category}
              </Paragraph>
            )}
          </div>
        </div>

        <div className="container">
          <div className="breadcrumb-container">
            <Button
              type="text"
              icon={<ArrowLeftOutlined />}
              onClick={() => navigate('/products')}
              className="back-button"
            >
              {t('productDetail.backToProducts')}
            </Button>
          </div>

          <Row gutter={[64, 48]} className="product-detail-content">
            <Col xs={24} lg={14}>
              <div className="product-gallery">
                <div className="main-image-wrapper card-hover">
                  <Image
                    src={currentImage === 'main' ? product.images.main : product.images.details}
                    alt={product.name}
                    className="product-main-image"
                    fallback="/public/main_hero.png"
                  />
                </div>
                <div className="image-thumbnails">
                  <Card
                    className={`thumbnail card-hover ${currentImage === 'main' ? 'active' : ''}`}
                    onClick={() => setCurrentImage('main')}
                  >
                    <img src={product.images.main} alt="Основное фото" />
                  </Card>
                  <Card
                    className={`thumbnail card-hover ${currentImage === 'details' ? 'active' : ''}`}
                    onClick={() => setCurrentImage('details')}
                  >
                    <img src={product.images.details} alt="Детали" />
                  </Card>
                </div>
              </div>
            </Col>

            <Col xs={24} lg={10}>
              <div className="product-info">
                <Tag color="purple" className="product-category-tag">
                  {product.category}
                </Tag>
                <Title level={1} className="product-title">
                  {product.name}
                </Title>

                {product.description && (
                  <div className="info-section">
                    <Title level={5} className="section-title">{t('productDetail.description')}</Title>
                    <Paragraph className="product-description-text">
                      {product.description}
                    </Paragraph>
                  </div>
                )}

                {product.applications && (
                  <div className="info-section">
                    <Title level={5} className="section-title">{t('productDetail.applications')}</Title>
                    <Paragraph className="product-description-text">
                      {product.applications}
                    </Paragraph>
                  </div>
                )}

                {product.features && product.features.length > 0 && (
                  <div className="info-section">
                    <Title level={5} className="section-title">{t('productDetail.features')}</Title>
                    <div className="features-list">
                      {product.features.map((feature, index) => (
                        <Tag key={index} className="feature-tag">
                          {feature}
                        </Tag>
                      ))}
                    </div>
                  </div>
                )}

                <Button
                  type="primary"
                  size="large"
                  icon={<PhoneOutlined />}
                  className="contact-button"
                  onClick={() => navigate('/contacts')}
                  block
                >
                  {t('productDetail.contact')}
                </Button>
              </div>
            </Col>
          </Row>

          {Object.keys(product.specifications).length > 0 && (
            <div className="specifications-section">
              <Title level={3} className="specifications-title">
                {t('productDetail.specifications')}
              </Title>
              <Descriptions bordered layout="vertical" column={4}>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <Descriptions.Item
                    key={key}
                    label={<span className="spec-label">{key}</span>}
                    className="spec-item"
                  >
                    <span className="spec-value">{value}</span>
                  </Descriptions.Item>
                ))}
              </Descriptions>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
