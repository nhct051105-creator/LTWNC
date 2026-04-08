import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header/Header';
import Footer from '../../components/ui/Footer/Footer';
import ProductCard from '../../components/ui/ProductCard/ProductCard';
import { products } from '../../data/products';
import { formatCurrency } from '../../utils/format';
import './ProductPage.css';

const categories = [
  { value: 'all', label: 'Tất cả sản phẩm' },
  { value: 'Nam', label: 'Thời trang nam' },
  { value: 'Nữ', label: 'Thời trang nữ' },
  { value: 'Giày dép', label: 'Giày dép' },
  { value: 'Phụ kiện', label: 'Phụ kiện' }
];

const ProductPage = () => {
  const [category, setCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    if (category === 'all') {
      return products;
    }
    return products.filter((product) => product.category === category);
  }, [category]);

  return (
    <div className="product-page">
      <Header />

      <main className="product-main">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Trang chủ</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Sản phẩm</span>
          </div>

          <div className="page-header">
            <h1 className="page-title">Sản phẩm nổi bật</h1>
            <p className="page-description">
              Khám phá bộ sưu tập mới nhất với thiết kế thời trang, chất liệu cao cấp và phong cách đầy cảm hứng.
            </p>
          </div>

          <div className="product-content">
            <aside className="product-sidebar">
              <div className="filter-section">
                <h3 className="filter-title">Danh mục</h3>
                <ul className="filter-list">
                  {categories.map((cat) => (
                    <li key={cat.value}>
                      <button
                        className={`filter-item ${category === cat.value ? 'active' : ''}`}
                        onClick={() => setCategory(cat.value)}
                      >
                        {cat.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="product-grid-section">
              <div className="product-controls">
                <div className="results-count">
                  Hiển thị {filteredProducts.length} sản phẩm
                </div>
              </div>

              <div className="products-grid">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      image={product.image}
                      alt={product.name}
                      category={product.category}
                      name={product.name}
                      currentPrice={formatCurrency(product.price)}
                      oldPrice={product.oldPrice ? formatCurrency(product.oldPrice) : undefined}
                      link={`/product/${product.id}`}
                    />
                  ))
                ) : (
                  <div className="no-products">Không có sản phẩm trong danh mục này</div>
                )}
              </div>

              <div className="pagination">
                <button className="pagination-btn prev" disabled>
                  <span className="material-icons">chevron_left</span>
                  Trước
                </button>
                <div className="pagination-numbers">
                  <button className="pagination-number active">1</button>
                </div>
                <button className="pagination-btn next" disabled>
                  Sau
                  <span className="material-icons">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;
