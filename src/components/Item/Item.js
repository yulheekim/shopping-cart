import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardContent, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import data from '../../assets/products.json';
import _ from 'lodash';

import {
    add_item_cart
} from '../../reducers/reducer';

import './styles.css';
import styles from './styles';
import { isNoSubstitutionTemplateLiteral } from 'typescript';
const {
    addCartButton,
    itemCard
} = styles

// import AppBar from '../../components/Heading/AppBar.js';


class ItemComponent extends Component {
    addItem(iid) {
        this.props.add_item_cart(iid);
    }

    render() {
        var product = data.products[this.props.idx]
        if (this.props.selectedSize.some(e => product.availableSizes.includes(e)) || this.props.selectedSize.length === 0) {
            return (
                <Card style={itemCard}>
                        <img src={require("../../assets/products/" + product.sku + "_1.jpg")} alt="shirt img" className="productImg"/>
                        <br/>
                        <div className="title">{product.title}</div>
                        <div className="price">{product.currencyFormat + product.price}</div>
                        <div className="description">{product.description}</div>
                    <Button variant="contained" color="primary" style={addCartButton} onClick={() => this.addItem(product.id)}>
                        Add to Cart
                    </Button>                
                </Card>
            );
        }
        else {
            return (
                null
            )
        }
        
    }
}

export {ItemComponent};


const mapStateToProps = (state, ownProps) => {
    const { reducer } = state;
    const { selectedSize, } = reducer;
    return {
        ...ownProps,
        selectedSize,

    };
};

export const Item = connect(mapStateToProps, {
    add_item_cart,
})(ItemComponent);
