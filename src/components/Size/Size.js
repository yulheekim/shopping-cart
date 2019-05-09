import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Fab, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import data from '../../assets/products.json';
import _ from 'lodash';
import './styles.css';

import {
    handle_size_click,
} from '../../reducers/reducer';
import styles from './styles';
const {
    sizeButton
} = styles

// import AppBar from '../../components/Heading/AppBar.js';


class SizeComponent extends Component {
    handleSizeClick(size) {
        this.props.handle_size_click(size);
    }
    render() {
        var product = data.products[this.props.idx]
        return (
            <div className="sizeFilter">
                Sizes: 
                <br/>
                
                <Fab variant="round" color={(this.props.selectedSize).includes("XS") ? "primary" : "default"} style={sizeButton} onClick={() => this.handleSizeClick("XS")}>XS</Fab>
                <Fab variant="round" color={(this.props.selectedSize).includes("S") ? "primary" : "default"} style={sizeButton} onClick={()=> this.handleSizeClick("S")}>S</Fab>
                <Fab variant="round" color={(this.props.selectedSize).includes("M") ? "primary" : "default"} style={sizeButton} onClick={()=> this.handleSizeClick("M")}>M</Fab>
                <Fab variant="round" color={(this.props.selectedSize).includes("ML") ? "primary" : "default"} style={sizeButton} onClick={()=> this.handleSizeClick("ML")}>ML</Fab>
                <Fab variant="round" color={(this.props.selectedSize).includes("L") ? "primary" : "default"} style={sizeButton}onClick={()=> this.handleSizeClick("L")}>L</Fab>
                <Fab variant="round" color={(this.props.selectedSize).includes("XL") ? "primary" : "default"} style={sizeButton} onClick={()=> this.handleSizeClick("XL")}>XL</Fab>
                <Fab variant="round" color={(this.props.selectedSize).includes("XXL") ? "primary" : "default"} style={sizeButton} onClick={()=> this.handleSizeClick("XXL")}>XXL</Fab>

            </div>
        );
    }
}

export { SizeComponent };


const mapStateToProps = (state, ownProps) => {
    const { reducer } = state;
    const { selectedSize } = reducer;
    return {
        ...ownProps,
        selectedSize,
    };
};

export const Size = connect(mapStateToProps, {
    handle_size_click,
})(SizeComponent);
