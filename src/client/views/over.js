import React from 'react';
import PropTypes from 'prop-types';

// Bootstrap
import { 
  // Form, FormGroup, Label, Input, Button,
  // Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

export class OverView extends React.Component {
  static propTypes = {
    G: PropTypes.any.isRequired,
    ctx: PropTypes.any.isRequired,
    moves: PropTypes.any.isRequired,
    events: PropTypes.any.isRequired,
    gameID: PropTypes.string,
    playerID: PropTypes.string,
    isActive: PropTypes.bool,
    isMultiplayer: PropTypes.bool,
    isConnected: PropTypes.bool,
  };

  constructor(params) {
    super(params);

    this.state = {
      test: false,
    };
  }

  render() {
    return (
      <div>
        <h1>GAME OVER</h1>
        <p>Do something better with this view...</p>
      </div>
    );
  }
}