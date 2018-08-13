import { getCubitsDatabase, CUBITS, TYPES, MOVEMENT } from './cubits';

export class Logic {
  getCollection() {
    let collection = getCubitsDatabase();
    return collection;
  }

  getCubits(slots) {
    const collection = this.getCollection();
    let cubits = [];
    for (let i = 0; i < slots.length; i++) {
      const data = slots[i];
      let cubit = collection[data.cubit];
      if(cubit) {
        cubits.push(cubit);
      }
    }
    return cubits;
  }

  getCubit(key) {
    const collection = this.getCollection();
    return collection[key];
  }

  getCubitix() {
    const collection = this.getCollection();
    return Object.keys(collection);
  }

  setup(ctx) {
    const collection = this.getCubitix();

    // Populate bags with Cubits
    let bags = [
      ctx.random.Shuffle([...collection]),
      ctx.random.Shuffle([...collection])
    ];

    // Populate hands form bags
    let hands = [[],[]];
    for (let i = 0; i < bags.length; i++) {
      for (let x = 0; x < 3; x++) {
        hands[i].push(bags[i].pop());
      }
    }

    return {
      arena: null,
      players: {
        '0': {
          draw: 3,
          actions: {
            default: 1,
            used: 0,
          },
          reinforcements: [],
          bag: bags[0],
          hand: hands[0],
          exile: [],
          afterlife: [],
          slots: [],
          field: [],
          units: [
            { key: '1', type: 'R', color: '#FF5733', x: 0, y: 0, limit: 4, slots: [], moved: false },
            { key: '2', type: 'N', color: '#F9FF33', x: 0, y: 1, limit: 3, slots: [], moved: false },
            { key: '3', type: 'B', color: '#008000', x: 0, y: 2, limit: 3, slots: [], moved: false },
            { key: '4', type: 'Q', color: '#33FFA8', x: 0, y: 3, limit: 2, slots: [], moved: false },
            { key: '5', type: 'K', color: '#33F6FF', x: 0, y: 4, limit: 1, slots: [], moved: false },
            { key: '6', type: 'B', color: '#3346FF', x: 0, y: 5, limit: 3, slots: [], moved: false },
            { key: '7', type: 'N', color: '#800080', x: 0, y: 6, limit: 3, slots: [], moved: false },
            { key: '8', type: 'R', color: '#FF0000', x: 0, y: 7, limit: 4, slots: [], moved: false },
            { key: '9', type: 'P', color: '#FF5733', x: 1, y: 0, limit: 2, slots: [], moved: false },
            { key: '10', type: 'P', color: '#F9FF33', x: 1, y: 1, limit: 2, slots: [], moved: false },
            { key: '11', type: 'P', color: '#008000', x: 1, y: 2, limit: 2, slots: [], moved: false },
            { key: '12', type: 'P', color: '#33FFA8', x: 1, y: 3, limit: 2, slots: [], moved: false },
            { key: '13', type: 'P', color: '#33F6FF', x: 1, y: 4, limit: 2, slots: [], moved: false },
            { key: '14', type: 'P', color: '#3346FF', x: 1, y: 5, limit: 2, slots: [], moved: false },
            { key: '15', type: 'P', color: '#800080', x: 1, y: 6, limit: 2, slots: [], moved: false },
            { key: '16', type: 'P', color: '#FF0000', x: 1, y: 7, limit: 2, slots: [], moved: false }
          ]
        },
        '1': {
          draw: 3,
          actions: {
            default: 1,
            used: 0,
          },
          reinforcements: [],
          bag: bags[1],
          hand: hands[1],
          exile: [],
          afterlife: [],
          slots: [],
          field: [],
          units: [
            { key: '17', type: 'R', color: '#FF5733', x: 7, y: 0, limit: 4, slots: [], moved: false },
            { key: '18', type: 'N', color: '#F9FF33', x: 7, y: 1, limit: 3, slots: [], moved: false },
            { key: '19', type: 'B', color: '#008000', x: 7, y: 2, limit: 3, slots: [], moved: false },
            { key: '20', type: 'Q', color: '#33FFA8', x: 7, y: 3, limit: 2, slots: [], moved: false },
            { key: '21', type: 'K', color: '#33F6FF', x: 7, y: 4, limit: 1, slots: [], moved: false },
            { key: '22', type: 'B', color: '#3346FF', x: 7, y: 5, limit: 3, slots: [], moved: false },
            { key: '23', type: 'N', color: '#800080', x: 7, y: 6, limit: 3, slots: [], moved: false },
            { key: '24', type: 'R', color: '#FF0000', x: 7, y: 7, limit: 4, slots: [], moved: false },
            { key: '25', type: 'P', color: '#FF5733', x: 6, y: 0, limit: 2, slots: [], moved: false },
            { key: '26', type: 'P', color: '#F9FF33', x: 6, y: 1, limit: 2, slots: [], moved: false },
            { key: '27', type: 'P', color: '#008000', x: 6, y: 2, limit: 2, slots: [], moved: false },
            { key: '28', type: 'P', color: '#33FFA8', x: 6, y: 3, limit: 2, slots: [], moved: false },
            { key: '29', type: 'P', color: '#33F6FF', x: 6, y: 4, limit: 2, slots: [], moved: false },
            { key: '30', type: 'P', color: '#3346FF', x: 6, y: 5, limit: 2, slots: [], moved: false },
            { key: '31', type: 'P', color: '#800080', x: 6, y: 6, limit: 2, slots: [], moved: false },
            { key: '32', type: 'P', color: '#FF0000', x: 6, y: 7, limit: 2, slots: [], moved: false }
          ]
        }
      }
    };
  }

  getMoveAtPosition(g, playerId, opponentId, x, y, limitPassive = false, limitAggression = false) {

    if(x < 0 || y < 0 || x > 7 || y > 7) {
      return {x: x, y: y, type: MOVEMENT.invalid};
    }

    let obstructionUnit = g.players[playerId].units.find(function(u) { return u.x === x && u.y === y; });
    if(obstructionUnit !== undefined) {
      return {x: x, y: y, type: MOVEMENT.ally};
    }

    let obstructionField = undefined; // TODO: Add field obstructions
    if(obstructionField !== undefined) {
      return {x: x, y: y, type: MOVEMENT.obstructed};
    }

    let capture = g.players[opponentId].units.find(function(u) { return u.x === x && u.y === y; });
    if(capture !== undefined && limitAggression === false) {
      return {x: x, y: y, type: MOVEMENT.capture};
    } 

    if(limitPassive) {
      return {x: x, y: y, type: MOVEMENT.invalid};
    } else {
      return {x: x, y: y, type: MOVEMENT.passive};
    }
    
  }

  moves(g, playerId, source) {
    let opponentId = playerId === '0' ? '1' : '0';
    let forward = playerId === '0' ? +1 : -1; // On the X

    let unit = g.players[playerId].units.find(function(u) { return u.x === source.x && u.y === source.y; });
    if(unit === undefined) {
      return [];
    }

    let modifiers = [];

    if(unit.type === 'P') {
      // Single Movement Forward
      modifiers.push({
        key: '101',
        data: null
      });
      // Attack Diagonal Forward
      modifiers.push({
        key: '102',
        data: null
      });
      // Double Movement Forward
      modifiers.push({
        key: '103',
        data: null
      });      
    } else if(unit.type === 'K') {
      // Move Cardinal 1
      modifiers.push({
        key: '1000',
        data: {
          distance: 1
        }
      });
      modifiers.push({
        key: '1001',
        data: {
          distance: 1
        }
      });
      // Castle Left [Add Conditional]
      modifiers.push({
        key: '104',
        data: null
      });
      // Castle Right [Add Conditional]
      modifiers.push({
        key: '105',
        data: null
      });
    } else if(unit.type === 'Q') {
      /// Move Orthogonal
      modifiers.push({
        key: '1000',
        data: {
          distance: 8
        }
      });
      // Move Diagonal
      modifiers.push({
        key: '1001',
        data: {
          distance: 8
        }
      });
    } else if(unit.type === 'R') {
      // Move Orthogonal
      modifiers.push({
        key: '1000',
        data: {
          distance: 8
        }
      });      
    } else if(unit.type === 'B') {
      // Move Diagonal
      modifiers.push({
        key: '1001',
        data: {
          distance: 8
        }
      });
    } else if(unit.type === 'N') {
      // Move Pattern
      modifiers.push({
        key: '1003',
        data: {
          steps: [2,1]
        }
      });
    } 

    let cubits = this.getCubits(unit.slots);
    for (let i = 0; i < cubits.length; i++) {
      const cubit = cubits[i];
      if(cubit.types.includes(TYPES.movement)) {
        modifiers.push({
          key: cubit.key,
          data: cubit.data
        });
      }
    }

    let moves = [];
    for (let i = 0; i < modifiers.length; i++) {
      let modifier = modifiers[i];

      if(modifier.key === '101') { // Pawn
        let x = source.x + forward;

        let move = this.getMoveAtPosition(g, playerId, opponentId, x, source.y, false, true);
        if(move.type !== MOVEMENT.invalid) {
          moves.push(move);
        }
      } 
      if (modifier.key === '102') { // Pawn - Attack
        let x = source.x + forward;
        let y1 = source.y - 1;
        let y2 = source.y + 1;

        let attacks = [
          this.getMoveAtPosition(g, playerId, opponentId, x, y1, true, false),
          this.getMoveAtPosition(g, playerId, opponentId, x, y2, true, false)
        ];

        for (let a = 0; a < attacks.length; a++) {
          const move = attacks[a];
          if(move.type !== MOVEMENT.invalid) {
            moves.push(move);
          }
        }
      } 
      if (modifier.key === '103') { // Pawn - Double Move
        if(unit.moved === true) {
          continue;
        }

        let x = source.x + (forward * 2);

        let move = this.getMoveAtPosition(g, playerId, opponentId, x, source.y, false, true);
        if(move.type !== MOVEMENT.invalid) {
          moves.push(move);
        }
      } 
      if(modifier === '104') { // King
        if(unit.moved === true) {
          continue;
        }

      } 
      if(modifier.key === '105') { // King
        if(unit.moved === true) {
          continue;
        }

      } 
      if(modifier.key === CUBITS.Orthogonal || modifier.key === CUBITS.Cardinal) { // Orthogonal or Cardinal
        let steps,x,y;

        for (x = source.x - 1, steps = 0; x >= 0 && steps < modifier.data.distance; x--, steps++) {
          let move = this.getMoveAtPosition(g, playerId, opponentId, x, source.y);
          if(move.type === MOVEMENT.passive) {
            moves.push(move);
          } else if(move.type === MOVEMENT.capture) {
            moves.push(move);
            break;
          } else {
            break;
          }
        }
        for (x = source.x + 1, steps = 0; x < 8 && steps < modifier.data.distance; x++, steps++) {
          let move = this.getMoveAtPosition(g, playerId, opponentId, x, source.y);
          if(move.type === MOVEMENT.passive) {
            moves.push(move);
          } else if(move.type === MOVEMENT.capture) {
            moves.push(move);
            break;
          } else {
            break;
          }
        }
        for (y = source.y - 1, steps = 0; y >= 0 && steps < modifier.data.distance; y--, steps++) {
          let move = this.getMoveAtPosition(g, playerId, opponentId, source.x, y);
          if(move.type === MOVEMENT.passive) {
            moves.push(move);
          } else if(move.type === MOVEMENT.capture) {
            moves.push(move);
            break;
          } else {
            break;
          }
        }
        for (y = source.y + 1, steps = 0; y < 8 && steps < modifier.data.distance; y++, steps++) {
          let move = this.getMoveAtPosition(g, playerId, opponentId, source.x, y);
          if(move.type === MOVEMENT.passive) {
            moves.push(move);
          } else if(move.type === MOVEMENT.capture) {
            moves.push(move);
            break;
          } else {
            break;
          }
        }
      }

      if(modifier.key === CUBITS.Diagonal || modifier.key === CUBITS.Cardinal) { // Diagonal or Cardinal
        let steps,x,y;

        for (x = source.x + 1, y = source.y + 1, steps = 0; x < 8 && y < 8 && steps < modifier.data.distance; x++, y++, steps++) {
          let move = this.getMoveAtPosition(g, playerId, opponentId, x, y);
          if(move.type === MOVEMENT.passive) {
            moves.push(move);
          } else if(move.type === MOVEMENT.capture) {
            moves.push(move);
            break;
          } else {
            break;
          }
        }

        for (x = source.x - 1, y = source.y - 1, steps = 0; x >= 0 && y >= 0 && steps < modifier.data.distance; x--, y--, steps++) {
          let move = this.getMoveAtPosition(g, playerId, opponentId, x, y);
          if(move.type === MOVEMENT.passive) {
            moves.push(move);
          } else if(move.type === MOVEMENT.capture) {
            moves.push(move);
            break;
          } else {
            break;
          }
        }

        for (x = source.x - 1, y = source.y +1, steps = 0; x >= 0 && y < 8 && steps < modifier.data.distance; x--, y++, steps++) {
          let move = this.getMoveAtPosition(g, playerId, opponentId, x, y);
          if(move.type === MOVEMENT.passive) {
            moves.push(move);
          } else if(move.type === MOVEMENT.capture) {
            moves.push(move);
            break;
          } else {
            break;
          }
        }

        for (x = source.x + 1, y = source.y - 1, steps = 0; x < 8 && y >= 0 && steps < modifier.data.distance; x++, y--, steps++) {
          let move = this.getMoveAtPosition(g, playerId, opponentId, x, y);
          if(move.type === MOVEMENT.passive) {
            moves.push(move);
          } else if(move.type === MOVEMENT.capture) {
            moves.push(move);
            break;
          } else {
            break;
          }
        }

      }
      if(modifier.key === CUBITS.Pattern) { // Pattern
        let targets = [];
        targets.push({ x: source.x + modifier.data.steps[0], y: source.y + modifier.data.steps[1] });
        targets.push({ x: source.x + modifier.data.steps[0], y: source.y - modifier.data.steps[1] });
        targets.push({ x: source.x - modifier.data.steps[0], y: source.y + modifier.data.steps[1] });
        targets.push({ x: source.x - modifier.data.steps[0], y: source.y - modifier.data.steps[1] });
        targets.push({ x: source.x + modifier.data.steps[1], y: source.y + modifier.data.steps[0] });
        targets.push({ x: source.x - modifier.data.steps[1], y: source.y + modifier.data.steps[0] });
        targets.push({ x: source.x + modifier.data.steps[1], y: source.y - modifier.data.steps[0] });
        targets.push({ x: source.x - modifier.data.steps[1], y: source.y - modifier.data.steps[0] });

        for (let i = 0; i < targets.length; i++) {
          const target = targets[i];
          let move = this.getMoveAtPosition(g, playerId, opponentId, target.x, target.y);
          if(move.type === MOVEMENT.passive || move.type === MOVEMENT.capture) {
            moves.push(move);
          }
        }
        
      } 
      if(modifier.key === CUBITS.SideStep) { // Sidestep
        let targets = [];
        targets.push({ x: source.x, y: source.y + 1 });
        targets.push({ x: source.x, y: source.y - 1 });

        for (let i = 0; i < targets.length; i++) {
          const target = targets[i];
          let move = this.getMoveAtPosition(g, playerId, opponentId, target.x, target.y);
          if(move.type === MOVEMENT.passive || move.type === MOVEMENT.capture) {
            moves.push(move);
          }
        }

      }
    }

    return moves;
  }

  getMoveForLocation(g, player, source, destination) {
    let moves = this.moves(g, player, source);

    for (let i = 0; i < moves.length; i++) {
      const move = moves[i];
      if(move.x === destination.x && move.y === destination.y) {
        return move;
      }
    }

    return {x: destination.x, y: destination.y, type: MOVEMENT.invalid};
  }

  hasCubit(g, playerId, cubitId) {
    for (let a = 0; a < g.players[playerId].units.length; a++) {
      const unit = g.players[playerId].units[a];     
      for (let b = 0; b < unit.slots.length; b++) {
        const data =  unit.slots[b];
        if(data.cubit === cubitId) {
          return true;
        }
      }
    }

    for (let a = 0; a < g.players[playerId].slots.length; a++) {
      const data = g.players[playerId].slots[a];
      if(data.cubit === cubitId) {
        return true;
      }
    }

    return false;
  }

  getCubitValue(g, playerId, collection) {
    let value = 0;

    

    if(!Array.isArray(collection)) {
      collection = [collection];
    }

    for (let a = 0; a < g.players[playerId].units.length; a++) {
      const unit = g.players[playerId].units[a];     
      for (let b = 0; b < unit.slots.length; b++) {
        const data =  unit.slots[b];
        if(collection.includes(data.cubit) === true) {
          let cubit = this.getCubit(data.cubit);
          value += cubit.data.amount;
        }
      }
    }

    for (let a = 0; a < g.players[playerId].slots.length; a++) {
      const data = g.players[playerId].slots[a];
      if(collection.includes(data.cubit) === true) {
        let cubit = this.getCubit(data.cubit);
        value += cubit.data.amount;
      }
    }

    return value;
  }

  getNumberOfDraws(g, playerId) {
    let offset = this.getCubitValue(g, playerId, [CUBITS.DrawPlusOne, CUBITS.DrawNegOne]);
    let amount = g.players[playerId].draw + offset;
    return Math.max(Math.min(amount, 5), 1); // Min: 1, Max: 5
  }

  getNumberOfActions(g, playerId) {
    let offset = this.getCubitValue(g, playerId, [CUBITS.ActionPlusOne, CUBITS.ActionNegOne]);
    let amount =  g.players[playerId].actions.default + offset;
    return Math.max(Math.min(amount, 5), 1);  // Min: 1, Max: 5
  }

  onPlayed(g, ctx, cubit) {

    let event = {
      actionCost: 1,
      forceEndTurn: false,
      data: cubit.data,
    };

    if(cubit.key === CUBITS.ActionPlusOne) {
      event.actionCost = 0;
    } else if(cubit.key === CUBITS.KingOfHill) {
      let options = {
        '1': {x: 3, y: 3},
        '2': {x: 3, y: 4},
        '3': {x: 4, y: 3},
        '4': {x: 4, y: 4},
      }
      const die = ctx.random.D4();
      event.data.location = options[die];
    }

    // handled actions
    let total = this.getNumberOfActions(g, ctx.currentPlayer);
    g.players[ctx.currentPlayer].actions.used += event.actionCost;

    // If ran out of actions auto end phase
    if(g.players[ctx.currentPlayer].actions.used >= total) {
      ctx.events.endPhase();
    }

    // If skip turn
    if(event.forceEndTurn === true) {
      ctx.events.endTurn();
    }

    return event;
  }

  onActivated(g, playerId, cubit) {

  }

  onRemoved(g, playerId, cubit) {

  }
}