import { useState, useMemo, useEffect, useRef } from 'react';
import { Row, Col, Input, Typography, Card, Button, Pagination } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ArrowRightOutlined, SearchOutlined } from '@ant-design/icons';
import { AnimatePresence, motion } from 'framer-motion';
import { getProducts, type Product } from '../utils/products';
import SEO from '../components/SEO';
import AnimatedStarryBackground from '../components/AnimatedStarryBackground';
import './CatalogPage.css';

const { Title, Paragraph } = Typography;

const ITEMS_PER_PAGE = 5;
const SEARCH_DELAY = 500;

const CatalogPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsGridRef = useRef<HTMLDivElement>(null);

  const products = getProducts(t);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(inputValue);
    }, SEARCH_DELAY);

    return () => clearTimeout(timer);
  }, [inputValue]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesSearch;
    });
  }, [products, searchTerm]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (productsGridRef.current) {
      productsGridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleProductClick = (productId: string) => {
    navigate(`/products/${productId}`);
  };

  const getProductDescription = (product: Product): string => {
    return product.specifications?.['purpose'] || t('catalog.noDescription');
  };

  return (
    <>
      <SEO
        title={t('seo.catalog.title')}
        description={t('seo.catalog.description')}
        keywords={t('seo.catalog.keywords')}
      />

      <div className="products-page">
        <div className="products-header-container">
          <AnimatedStarryBackground />
          <div className="container">
            <Title level={1} className="page-title">
              {t('catalog.title')}
            </Title>
            <Paragraph className="page-subtitle">
              {t('catalog.subtitle')}
            </Paragraph>

            <div className="products-filters">
              <Input
                placeholder={t('catalog.filter.search')}
                prefix={<SearchOutlined />}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                size="large"
                className="search-input"
                allowClear
              />
            </div>
          </div>
        </div>

        <div className="container products-grid" ref={productsGridRef}>
          {filteredProducts.length > 0 ? (
            <>
              <div className="catalog-pagination-wrapper">
                <Pagination
                  current={currentPage}
                  pageSize={ITEMS_PER_PAGE}
                  total={filteredProducts.length}
                  onChange={handlePageChange}
                  showSizeChanger={false}
                  className="catalog-pagination"
                  showTotal={(total) => t('catalog.pagination.total', { total })}
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] as const }}
                >
                  <Row gutter={[0, 24]}>
                    {paginatedProducts.map((product) => (
                      <Col xs={24} key={product.id}>
                        <Card 
                          className="featured-product-card clickable horizontal"
                          onClick={() => handleProductClick(product.id)}
                        >
                          <div className="featured-card-content">
                            <div className="featured-image-wrapper">
                              <img
                                src={product.images.main}
                                alt={product.name}
                                className="featured-product-image"
                                onError={(e) => {
                                  e.currentTarget.src = '/main_hero.png';
                                }}
                              />
                            </div>
                            <div className="featured-info">
                              <div className="featured-category">{product.category}</div>
                              <Title level={3} className="featured-product-title">
                                {product.name}
                              </Title>
                              <Paragraph className="featured-description">
                                {getProductDescription(product)}
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
                </motion.div>
              </AnimatePresence>

              <div className="catalog-pagination-wrapper bottom">
                <Pagination
                  current={currentPage}
                  pageSize={ITEMS_PER_PAGE}
                  total={filteredProducts.length}
                  onChange={handlePageChange}
                  showSizeChanger={false}
                  className="catalog-pagination"
                  showTotal={(total) => t('catalog.pagination.total', { total })}
                />
              </div>
            </>
          ) : (
            <div className="no-products">
              <Title level={3} className="no-products-text">
                {t('catalog.noProducts')}
              </Title>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CatalogPage;

