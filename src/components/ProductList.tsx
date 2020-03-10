import React from 'react';
import ProductItem from './ProductItem';
import { AppState } from '../reducers';
import { connect } from 'react-redux';
import {ProductModel} from '../models/ProductModel';

interface ProductListProps {
    products: ProductModel[]
}

const ProductList = (props: any) => {
    return (
        <section className="section">
            <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
            <div className="row">
                {props.products.map((x: ProductModel) => 
                    <ProductItem key={x.id} product={x as ProductModel}></ProductItem>)
                }
            </div>
        </section>
    );
}

const mapStateToProps = (state: AppState) => {
    return state.products;
}

const a = connect(mapStateToProps, null)(ProductList)

export default connect(mapStateToProps, null)(ProductList);