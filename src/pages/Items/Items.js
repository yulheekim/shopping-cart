import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import data from '../../assets/products.json';
import _ from 'lodash';

// import {
// } from '../../components';
// import {
// } from '../../reducers/reducer';
// import './styles.css';

// import AppBar from '../../components/Heading/AppBar.js';

class ItemsComponent extends Component {
    populateProductTitles = (products) => {
        return _.map(products, (product, index) => {
            return (
                <div key={index}>{product.title}</div>
            )
        }
        
        )
    }
    render() {
        return (
            <div>
                {this.populateProductTitles(data.products)}
                {/* <Button variant="contained" color="primary">
                    Add to Cart
                </Button> */}
            </div>
        );
    }
}

export { ItemsComponent };

const mapStateToProps = (state, ownProps) => {
    const { reducer } = state;
    const { } = reducer;
    return {
        ...ownProps,

    };
};

export const Items = connect(mapStateToProps, {

})(ItemsComponent);
