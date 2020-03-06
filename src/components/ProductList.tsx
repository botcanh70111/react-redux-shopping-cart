import React from 'react';
import ProductItem from './ProductItem';

function ProductList() {
    return (
        <section className="section">
            <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
            <div className="row">
                <ProductItem></ProductItem>
            </div>
        </section>
    );
}

export default ProductList;
