/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
class ProductItem extends Component {
  render() {
    var { product, index } = this.props;
    var statusName = product.status ? "con hang" : "het hang";
    var statusClass = product.status
      ? "label label-warning"
      : "label label-default";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={statusClass}>{statusName}</span>
        </td>
        <td>
          <Link to={`/product/${product.id}/edit`}  className="btn btn-large  btn-danger mr-10">
            Sửa
          </Link>

          <button 
          type="button"
           className="btn btn-large  btn-success"
           onClick={()=>this.onDelete(product.id)}
           >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
  onDelete=(id)=>{
    // eslint-disable-next-line no-restricted-globals
    if(confirm('Bạn có chắc chắn muốn xóa?')){
      this.props.onDelete(id);
    }
  }
}
export default ProductItem;
