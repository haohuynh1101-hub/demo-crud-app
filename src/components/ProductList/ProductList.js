/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ProductItem from "./../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import { actDeleteProductRequest } from "./../../actions/index";

function ProductList({ products, onDeleteProduct }) {
  console.log(products, "propsreopserosep");

  const xoaSP = (id) => {
    onDeleteProduct(id);
  };
  return (
    <div>
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Danh sách sản phẩm</h3>
        </div>
        <div className="panel-body">
          <table className="table table-border table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã SP</th>
                <th>Tên</th>
                <th>Giá</th>
                <th>Trạng Thái</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => {
                return (
                  <ProductItem
                    key={index}
                    product={product}
                    index={index}
                    onDelete={xoaSP}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const mapDispatchtoPros = (dispatch, props) => {
  return {
    onDeleteProduct: (id) => {
      dispatch(actDeleteProductRequest(id));
    },
  };
};

export default connect(null, mapDispatchtoPros)(ProductList);
