import React from 'react';
import PropTypes from 'prop-types';

// UI
import { 
  Token, 
  Grid
} from 'boardgame.io/ui';

import * as Cubits from './cubits';

// Bootstrap
import { 
  NavItem,
  Button,
  Modal, ModalHeader, ModalBody, ModalFooter,
  Media,
  Badge
} from 'reactstrap';

import { IoMdHelp } from 'react-icons/io';

import { GameLogic } from '../game/logic';
import { CUBIT_TYPES, KEYWORDS } from '../game/common';

export class Help extends React.Component {
  static propTypes = {
    playerID: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.teamColors = {'0': 'w', '1': 'b'};

    this.logic = new GameLogic();

    this.state = {
      modal: false
    };
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  getCubitFromType(type) {
    switch (type) {
      case CUBIT_TYPES.MovementOrthogonal:
        return Cubits.CubitOrthogonal;
      case CUBIT_TYPES.MovementDiagonal:
        return Cubits.CubitDiagonal;
      case CUBIT_TYPES.MovementCardinal:
        return Cubits.CubitCardinal;
      case CUBIT_TYPES.MovementJump:
        return Cubits.CubitPattern;
      case CUBIT_TYPES.MovementSideStep:
        return Cubits.CubitSidestep;
      case CUBIT_TYPES.MovementSwap:
        return Cubits.CubitSwap;
      case CUBIT_TYPES.DrawPlusOne:
        return Cubits.CubitDrawPlus;
      case CUBIT_TYPES.DrawNegOne:
        return Cubits.CubitDrawMinus;
      case CUBIT_TYPES.DoubleAction:
        return Cubits.CubitDoubleAction;
      case CUBIT_TYPES.Condemn:
        return Cubits.CubitCondemn;
      case CUBIT_TYPES.Knowledge:
        return Cubits.CubitKnowledge;
      case CUBIT_TYPES.KingOfHill:
        return Cubits.CubitKingOfHill;
      default:
        return Cubits.CubitText;
    }
  }

  getKeyword(keyword) {
    switch (keyword) {
      case KEYWORDS.Arena:
        return "Arena";
      case KEYWORDS.Movement:
        return "Movement";
      case KEYWORDS.Trap:
        return "Trap";
      default:
        return keyword;
    }
  }

  render() {
    let playerID = this.props.playerID ? this.props.playerID : "0";
    let cubits = this.logic.getCubits(playerID);
    let collection = [];
    for (const cubit of cubits) {

      let team = this.teamColors[cubit.ownership];
      let type = this.getCubitFromType(cubit.type);
      let element = React.createElement(type, { name: cubit.name, value: cubit.name, team: team, color: null, });
      let icon = React.createElement(Token, {key: cubit.id, x: 0, y: 0}, element);
      let colorMap = {};
      colorMap['0,0'] = '#817F7F';

      let tags = [];
      for (const key of cubit.keywords) {
        let keyword = this.getKeyword(key);
        tags.push(<Badge key={key} color="info">{keyword}</Badge>);
      }
      if(cubit.keywords.length > 0) {
        tags.push(<br key="keywords" />);
      }

      let item = (
        <Media key={cubit.type} className="p-1">
          <Media left href="#">
            <Grid rows={1} cols={1} colorMap={colorMap} style={{ width: 50, strokeWidth: 0.05, stroke: '#000000' }}>
              { icon }
            </Grid>
          </Media>
          <Media body>
            <Media heading style={{ height: 50 }}>
              { cubit.name }
            </Media>
            { tags }
            { cubit.description }
          </Media>
        </Media>
      );

      collection.push(item);
    }

    return (
      <NavItem className="list-inline-item">
        <Button size="sm" color="primary" title="Help" onClick={this.toggle}><IoMdHelp className="icon-inline" /></Button>
      
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Help</ModalHeader>
          <ModalBody>
            <h5 className="text-center">Rules</h5>
            <p>
              Hello!  Welcome to Lusus.  
              The game that is like chess but with even more rules!  
              To begin both you and your opponent will need to be on this screen on different devices.  
              Then select the appropriate button to the right, if you are player 1 then click Start Match if you are player 2 select Join Match.  
              Player one will need to send player 2 the game code, it will be added to your clipboard by selecting the share icon in the upper right hand corner.</p>
            <p>
              The game works in phases. 
              First is the Play Phase.  
              During this phase you can use your actions to play cubies from your hand and activate certain cubies’ abilities.  
              Then it is the Move Phase where you will move a unit on the board.  
              Then the Draw Phase will automatically happen, where you will get a new hand and some abilities will resolve and turn counters will increase. 
              That will end your turn and it will be the next player.
            </p>
            <p>
              Unlike chess this game has numerous win / lose conditions. 
              You can still win the game by capturing the opponent's king but unlike chess there is no idea of checkmate. 
              The act of capture is needed to claim victory (This is important because of things like traps). 
              A number of cubies also have alternate win conditions that are specific to when the cubie is active. 
              Also there are a number of lose conditions as well.
              Frist you can lose if you do not have enough cubies left to draw a full hand (so in a sense your bag size is like you health). 
              Second, you can also lose if you have no valid moves to make on your movement phase.
            </p>
            <h5 className="text-center">Cubies</h5>
            { collection }
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </NavItem>
    );
  }
}