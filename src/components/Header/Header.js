import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Fab, Modal } from '@material-ui/core';
import { Link } from 'react-router-dom';
import data from '../../assets/products.json';
import _ from 'lodash';
import './styles.css';

import {
    toggle_modal
} from '../../reducers/reducer';

// import AppBar from '../../components/Heading/AppBar.js';

class HeaderComponent extends Component {
    handleToggleModal() {
        this.props.toggle_modal();
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
                </div>
            )
        }
        
        )
    }
    render() {
        var product = data.products[this.props.idx]
        return (
            <div className="header">
                <Button variant="contained" onClick={()=>this.handleToggleModal()}>Cart</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
    toggle_modal
})(HeaderComponent);
