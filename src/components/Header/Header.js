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
                        
                    </div>
                </Modal>
            </div>
        );
    }
}

export {HeaderComponent};


const mapStateToProps = (state, ownProps) => {
    const { reducer } = state;
    const { modalOpen, } = reducer;
    return {
        ...ownProps,
        modalOpen

    };
};

export const Header = connect(mapStateToProps, {
    toggle_modal
})(HeaderComponent);
