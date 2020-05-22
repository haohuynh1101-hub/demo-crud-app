/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import ProductList from "./../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  actFetchProductsRequest,
  actDeleteProductRequest,
} from "./../../actions/index";
class ProductListPage extends Component {
  componentDidMount() {
    this.props.aaaaaa();
  }
  onDelete = (id) => {
    this.props.onDeleteProduct(id);
  };
  render() {
    var { products } = this.props;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/product/add" className="btn btn-info mb-10">
          Thêm sản phẩm
        </Link>
        {/* <ProductList>{this.showProducts(products)}</ProductList> */}
        <ProductList products={products} />
      </div>
    );
  }
  // showProducts = (products) => {
  //   var result = null;
  //   if (products.length > 0) {
  //     result = products.map((product, index) => {
  //       return (
  //         <ProductItem
  //           key={index}
  //           product={product}
  //           index={index}
  //           onDelete={this.onDelete}
  //         />
  //       );
  //     });
  //   }
  //   return result;
  // };
}
const mapStatetoProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchtoPros = (dispatch, props) => {
  return {
    aaaaaa: () => {
      dispatch(actFetchProductsRequest());
    },
    onDeleteProduct: (id) => {
      dispatch(actDeleteProductRequest(id));
    },
  };
};
// export connect(ProductListPage)
export default connect(mapStatetoProps, mapDispatchtoPros)(ProductListPage);
