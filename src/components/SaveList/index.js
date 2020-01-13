import React from 'react';
import { connect } from 'react-redux';

// Styles et assets
import './saveList.scss';


class SaveList extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {showModal: false};
    }
    
    
    playModal = () => {
        console.log(this.state);
        let modalToDisplay = !this.state.showModal;
        this.setState({...this.state, showModal: modalToDisplay});

    };

    render() {
        if (!this.state.showModal) {
            return <button className="saveList" onClick={() => this.props.modalAction()}>Sauvegarder la liste</button>
        } else {
            return <button className="connect" onClick={() => this.playModal()}>Test</button>
        }
    }
}

export default SaveList;