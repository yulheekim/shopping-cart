import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import data from '../../assets/products.json';
import _ from 'lodash';

import {
    Header,
    Item,
    Size
} from '../../components';
// import {
// } from '../../reducers/reducer';
import './styles.css';

// import AppBar from '../../components/Heading/AppBar.js';

class ItemsComponent extends Component {
    populateItemCards = (products) => {
        return _.map(products, (product, index) => {
            return (
                <Item key={index} idx={index}/>
            )
        }
        
        )
    }
    render() {
        return (
            <div className="whole">
                <Header />
                <div className="lower">
                    <Size />
                    <div className="catalog">
                        {this.populateItemCards(data.products)}
                    </div>
                </div>
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
