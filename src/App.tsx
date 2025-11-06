import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AppLayout from './components/Layout';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactsPage from './pages/ContactsPage';
import PageTransition from './components/PageTransition';

const App = () => {
  const location = useLocation();

  return (
    <AppLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="/products" element={<PageTransition><CatalogPage /></PageTransition>} />
          <Route path="/catalog" element={<PageTransition><CatalogPage /></PageTransition>} />
          <Route path="/products/:id" element={<PageTransition><ProductDetailPage /></PageTransition>} />
          <Route path="/contacts" element={<PageTransition><ContactsPage /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </AppLayout>
  );
};

export default App;

