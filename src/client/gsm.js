import React from 'react';
import PropTypes from 'prop-types';

import SetupView from './views/setup';
import PlayView from './views/play';
import OverView from './views/over';
import { ToastContainer, toast } from 'react-toastify';

class GameStateManager extends React.Component {
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
      selection: null,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    this.forceUpdate();
  };

  componentDidUpdate(props) {   
    if(this.props.isActive === false) {
      return;
    }

    // Handle Notifications
    if (this.props.G.players[this.props.playerID].check === true && props.G.players[this.props.playerID].check === false) {
      toast("Check");
    }
    if (this.props.ctx.phase === 'play' && props.ctx.phase !== 'play') {
      toast("Your Turn");
    }
    if (this.props.ctx.phase === 'resolution' && props.ctx.phase !== 'resolution') {
      this.props.moves.resolution();
    }
  }

  getView() {
    if(this.props.ctx.gameover) {
      return React.createElement(OverView, this.props);
    } else if(this.props.ctx.phase === "config") {
      return React.createElement(SetupView, this.props);
    } else {
      return React.createElement(PlayView, this.props);
    }
  }

  render() {
    return (
      <section>
         { this.getView() }
        <ToastContainer autoClose={2000} position={toast.POSITION.BOTTOM_RIGHT} />
      </section>
    );
  }
}

export default GameStateManager;