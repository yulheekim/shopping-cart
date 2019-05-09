import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
// import { Link } from 'react-router-dom';
import data from '../../assets/products.json';
import _ from 'lodash';
import './styles.css';

import {
    delete_item_cart,
    toggle_modal
} from '../../reducers/reducer';

// import AppBar from '../../components/Heading/AppBar.js';

class HeaderComponent extends Component {
    handleToggleModal() {
        this.props.toggle_modal();
    }
    deleteItemCart(pid) {
        this.props.delete_item_cart(pid);
    }
    populateCartItems = () => {
        return _.map(this.props.itemsCart, (product_id, index) => {
            var product = _.find(data.products, ['id', product_id]);
            console.log(product)
            return (
                <div key={index} className="cartItem">
                    <img src={require("../../assets/products/" + product.sku + "_1.jpg")} alt="shirt img" className="cartProductImg" />
                    <div className="cartInfo">
                        <b>{product.title}</b><br/>
                        {product.description}<br/>
                        {product.currencyFormat + product.price}<br/>
                        Amount: 1
                    </div>
                    <div className="trash">
                        <DeleteIcon onClick={()=> this.deleteItemCart(product_id)} />
                    </div>
                </div>
            )
        }
        
        )
    }
    render() {
        var product = data.products[this.props.idx]
        return (
            <div className="header">
                <h1>Cute T-Shirts</h1>
                <div className="cartButton"><Button variant="contained" onClick={()=>this.handleToggleModal()}>Cart</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                
                <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.modalOpen}
                onClose={()=>this.handleToggleModal()}
                >
                    <div className="modal">
                        {this.populateCartItems()}<br/>
                        <Button variant="contained" color="primary" onClick={()=>this.handleToggleModal()} >Checkout</Button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export {HeaderComponent};


const mapStateToProps = (state, ownProps) => {
    const { reducer } = state;
    const { itemsCart, modalOpen, } = reducer;
    return {
        ...ownProps,
        itemsCart,
        modalOpen

    };
};

export const Header = connect(mapStateToProps, {
    delete_item_cart,
    toggle_modal
})(HeaderComponent);
