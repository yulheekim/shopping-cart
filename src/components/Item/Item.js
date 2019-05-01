import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardContent, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import data from '../../assets/products.json';
import _ from 'lodash';
import './styles.css';

// import {
// } from '../../reducers/reducer';
// import './styles.css';

// import AppBar from '../../components/Heading/AppBar.js';

const styles = {
    itemCard: {
        minWidth: 275,
        width: '20%',
        textAlign: 'center',
        position: 'relative',
        display: 'inline-block',
        padding: '1rem 0',
        margin: '.5rem'
    },
    addCartButton: {
        marginTop: '0.5rem'
    },
};
class ItemComponent extends Component {
    render() {
        var product = data.products[this.props.idx]
        return (
            <Card className={this.props.classes.itemCard}>
                    <img src={require("../../assets/products/" + product.sku + "_1.jpg")} alt="shirt img" className="productImg"/>
                    <br/>
                    <div className="title">{product.title}</div>
                    <div className="price">{product.currencyFormat + product.price}</div>
                    <div className="description">{product.description}</div>
                <Button variant="contained" color="primary" className={this.props.classes.addCartButton}>
                    Add to Cart
                </Button>                
            </Card>
        );
    }
}

export default withStyles(styles)(ItemComponent);


const mapStateToProps = (state, ownProps) => {
    const { reducer } = state;
    const { } = reducer;
    return {
        ...ownProps,

    };
};

export const Item = connect(mapStateToProps, {

})(ItemComponent);
