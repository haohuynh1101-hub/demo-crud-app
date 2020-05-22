/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import callApi, { getFetch } from "../../utils/apiCaller";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  actAddProductRequest,
  actGetProductRequest,
} from "../../actions/index";
class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.State = {
      id: "",
      txtName: "",
      txtPrice: "",
      chkStatus: "",
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    var { id, txtName, txtPrice, chkStatus } = this.state;
    var { history } = this.props;
    var product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: chkStatus,
    };
    if (id) {
      callApi(`products/${id}`, "PUT", {
        name: txtName,
        price: txtPrice,
        status: chkStatus,
      }).then((res) => {
        history.goBack();
      });
    } else {
      this.props.onAddProduct(product);
      history.goBack();
    }
  };
  //lifecycle time
  async componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      let data = await getFetch(`products/${id}`, "GET", null);
      this.setState({
        id: data.id,
        txtName: data.name,
        txtPrice: data.price,
        chkStatus: data.status,
      });
      // .then(
      //   (res) => {
      //     // console.log(res, "resresresresres");
      //     var data = res.data;
      //     this.setState({
      //       id: data.id,
      //       txtName: data.name,
      //       txtPrice: data.price,
      //       chkStatus: data.status,
      //     });
      //   }
      // );
      // console.log(this.props.onEditProduct(id));
    }
  }

  // static getDerivedStateFromProps(nextprops){
  //   if(nextprops&&nextprops.itemEditing){
  //     var{itemEditing}=nextprops;
  //     this.setState({
  //       id:itemEditing.id,
  //       txtName:itemEditing.name,
  //       txtPrice:itemEditing.price,
  //       chkStatus:itemEditing.status
  //     });
  //   }
  // }
  render() {
    if (this.state == null) return <div>loading ......</div>;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Product Name:</label>
            <input
              type="text"
              className="form-control"
              name="txtName"
              value={this.state.txtName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Product Price:</label>
            <input
              type="number"
              className="form-control"
              name="txtPrice"
              value={this.state.txtPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Product Status:</label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                name="chkStatus"
                value={this.state.chkStatus}
                checked={this.state.chkStatus}
                onChange={this.onChange}
              />
              con hang
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <Link to="/product-list" className="btn btn-danger ml-10">
            Trở lại
          </Link>
        </form>
      </div>
    );
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
}
const mapStatetoProps = (state) => {
  return {
    itemEditing: state.itemEditing,
  };
};
const mapDispatchtoProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
    },
    onEditProduct: (id) => {
      dispatch(actGetProductRequest(id));
    },
  };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(ProductActionPage);
