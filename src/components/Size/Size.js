import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Fab, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import data from '../../assets/products.json';
import _ from 'lodash';
import './styles.css';

// import {
// } from '../../reducers/reducer';
// import './styles.css';

// import AppBar from '../../components/Heading/AppBar.js';

const styles = {
    sizeButton: {
        margin: '0.5rem',

    },
};
class SizeComponent extends Component {
    render() {
        var product = data.products[this.props.idx]
        return (
            <div className="sizeFilter">
                Sizes: 
                <br/>
                <Fab variant="round" className={this.props.classes.sizeButton}>XS</Fab>
                <Fab variant="round" className={this.props.classes.sizeButton}>S</Fab>
                <Fab variant="round" className={this.props.classes.sizeButton}>M</Fab>
                <Fab variant="round" className={this.props.classes.sizeButton}>L</Fab>
                <Fab variant="round" className={this.props.classes.sizeButton}>XL</Fab>
                <Fab variant="round" className={this.props.classes.sizeButton}>XXL</Fab>

            </div>
        );
    }
}

export default withStyles(styles)(SizeComponent);


const mapStateToProps = (state, ownProps) => {
    const { reducer } = state;
    const { } = reducer;
    return {
        ...ownProps,

    };
};

export const Size = connect(mapStateToProps, {

})(SizeComponent);
