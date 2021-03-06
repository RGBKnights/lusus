import { UNITS, CUBITS, LOCATIONS, PLACEMENT, TARGETS, DIRECTIONS, ACTIONS } from './common';

function getUnits() {
  let data = {};
  data[UNITS.Bishop] = {
    key: UNITS.Bishop,
    name: 'Bishop',
    description: 'A bishop moves any number of vacant squares in any diagonal direction by default.',
    movements: [
      { directions: [DIRECTIONS.Forward, DIRECTIONS.Left], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Forward, DIRECTIONS.Right], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Back, DIRECTIONS.Left], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Back, DIRECTIONS.Right], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
    ],
    actions: [],
  };
  data[UNITS.King] = {
    key: UNITS.King,
    name: 'King',
    description: 'The king moves one square horizontally, vertically, or diagonally by default. The game can be won by capturing this piece.',
    movements: [
      { directions: [DIRECTIONS.Forward], distance: 1, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Back], distance: 1, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Left], distance: 1, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Right], distance: 1, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Forward, DIRECTIONS.Left], distance: 1, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Forward, DIRECTIONS.Right], distance: 1, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Back, DIRECTIONS.Left], distance: 1, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Back, DIRECTIONS.Right], distance: 1, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
    ],
    actions: [
      { type: ACTIONS.Castle, name: "Castle", phase: 'move', targeting: true }
    ]
  };
  data[UNITS.Queen] = {
    key: UNITS.Queen,
    name: 'Queen',
    description: 'The queen moves any number of vacant squares in a horizontal, vertical, or diagonal direction by default.',
    movements: [
      { directions: [DIRECTIONS.Forward], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Back], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Left], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Right], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Forward, DIRECTIONS.Left], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Forward, DIRECTIONS.Right], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Back, DIRECTIONS.Left], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Back, DIRECTIONS.Right], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
    ],
    actions: [],
  };
  data[UNITS.Knight] = {
    key: UNITS.Knight,
    name: 'Knight',
    description: 'A Knight moves to any of the closest squares that are not on the same rank, file, or diagonal, thus the move forms an "L"-shape: two squares vertically and one square horizontally, or two squares horizontally and one square vertically. The knight can leap over other pieces.',
    movements: [
      { directions: [DIRECTIONS.Forward, DIRECTIONS.Forward, DIRECTIONS.Left], distance: 1, contiguous: false, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Forward, DIRECTIONS.Forward, DIRECTIONS.Right], distance: 1, contiguous: false, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Back, DIRECTIONS.Back, DIRECTIONS.Left], distance: 1, contiguous: false, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Back, DIRECTIONS.Back, DIRECTIONS.Right], distance: 1, contiguous: false, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Left, DIRECTIONS.Left, DIRECTIONS.Forward], distance: 1, contiguous: false, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Left, DIRECTIONS.Left, DIRECTIONS.Back], distance: 1, contiguous: false, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Right, DIRECTIONS.Right, DIRECTIONS.Forward], distance: 1, contiguous: false, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Right, DIRECTIONS.Right, DIRECTIONS.Back], distance: 1, contiguous: false, targets: [TARGETS.Empty, TARGETS.Enemy] },
    ],
    actions: [],
  };
  data[UNITS.Rook] = {
    key: UNITS.Rook,
    name: 'Rook',
    description: 'A rook moves any number of vacant squares in a horizontal or vertical direction by default.',
    movements: [
      { directions: [DIRECTIONS.Forward], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Back], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Left], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Right], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
    ],
    actions: [],
  };
  data[UNITS.Pawn] = {
    key: UNITS.Pawn,
    name: 'Pawn',
    description: 'A pawn moves straight forward one square, if that square is vacant. If it has not yet moved, a pawn also has the option of moving two squares straight forward, provided both squares are vacant. Pawns cannot move backwards.A pawn can capture an enemy piece on either of the two squares diagonally in front of the pawn.',
    movements: [
      { directions: [DIRECTIONS.Forward], distance: 1, contiguous: true, targets: [TARGETS.Empty] },
      { directions: [DIRECTIONS.Forward], distance: 2, contiguous: true, consumable: true, targets: [TARGETS.Empty] },
      { directions: [DIRECTIONS.Forward, DIRECTIONS.Left],  distance: 1, contiguous: true, targets: [TARGETS.Enemy] },
      { directions: [DIRECTIONS.Forward, DIRECTIONS.Right], distance: 1, contiguous: true, targets: [TARGETS.Enemy] },
    ],
    actions: [],
  };

  return data;
}

function getCubits() {
  let data = {};

  // Movements
  data[CUBITS.Orthogonal] = {
    key: CUBITS.Orthogonal,
    enabled: true,
    name: 'Orthogonal',
    description: 'This piece can move 7 spaces horizontally or vertically (like a Rook)',
    type: 'Buff',
    subordinate: 'Movement - Contiguous',
    placement: [
      { where: LOCATIONS.MyField, condition: PLACEMENT.Empty },
    ],
    movements: [
      { directions: [DIRECTIONS.Forward], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Back], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Left], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Right], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
    ],
    actions: [],
  };
  data[CUBITS.Diagonal] = {
    key: CUBITS.Diagonal,
    enabled: true,
    name: 'Diagonal',
    description: 'This piece can move 7 spaces diagonally (like a Bishop)',
    type: 'Buff',
    subordinate: 'Movement - Contiguous',
    placement: [
      { where: LOCATIONS.MyField, condition: PLACEMENT.Empty },
    ],
    movements: [
      { directions: [DIRECTIONS.Forward, DIRECTIONS.Left], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Forward, DIRECTIONS.Right], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Back, DIRECTIONS.Left], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Back, DIRECTIONS.Right], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
    ],
    actions: [],
  };
  data[CUBITS.Cardinal] = {
    key: CUBITS.Cardinal,
    enabled: true,
    name: 'Cardinal',
    description: 'This piece can move 7 spaces in any direction (like a Queen)',
    type: 'Buff',
    subordinate: 'Movement - Contiguous',
    placement: [
      { where: LOCATIONS.MyField, condition: PLACEMENT.Empty },
    ],
    movements: [
      { directions: [DIRECTIONS.Forward], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Back], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Left], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Right], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Forward, DIRECTIONS.Left], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Forward, DIRECTIONS.Right], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Back, DIRECTIONS.Left], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Back, DIRECTIONS.Right], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
    ],
    actions: [],
  };
  data[CUBITS.Jump] = {
    key: CUBITS.Jump,
    enabled: true,
    name: 'Jump',
    description: 'This piece can move 2 spaces horizontal or vertical and then 1 the option direction (like a Knight)',
    type: 'Buff',
    subordinate: 'Movement - Pattern',
    placement: [
      { where: LOCATIONS.MyField, condition: PLACEMENT.Empty },
    ],
    movements: [
      { directions: [DIRECTIONS.Forward, DIRECTIONS.Forward, DIRECTIONS.Left], distance: 1, contiguous: false, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Forward, DIRECTIONS.Forward, DIRECTIONS.Right], distance: 1, contiguous: false, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Back, DIRECTIONS.Back, DIRECTIONS.Left], distance: 1, contiguous: false, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Back, DIRECTIONS.Back, DIRECTIONS.Right], distance: 1, contiguous: false, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Left, DIRECTIONS.Left, DIRECTIONS.Forward], distance: 1, contiguous: false, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Left, DIRECTIONS.Left, DIRECTIONS.Back], distance: 1, contiguous: false, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Right, DIRECTIONS.Right, DIRECTIONS.Forward], distance: 1, contiguous: false, targets: [TARGETS.Empty, TARGETS.Enemy] },
      { directions: [DIRECTIONS.Right, DIRECTIONS.Right, DIRECTIONS.Back], distance: 1, contiguous: false, targets: [TARGETS.Empty, TARGETS.Enemy] },
    ],
    actions: [],
  };
  data[CUBITS.SideStep] = {
    key: CUBITS.SideStep,
    enabled: true,
    name: 'SideStep',
    description: 'This piece can passively move 1 space horizontally',
    type: 'Buff',
    subordinate: 'Movement - Contiguous',
    placement: [
      { where: LOCATIONS.MyField, condition: PLACEMENT.Empty },
    ],
    movements: [
      { directions: [DIRECTIONS.Left], distance: 1, contiguous: true, targets: [TARGETS.Empty] },
      { directions: [DIRECTIONS.Right], distance: 1, contiguous: true, targets: [TARGETS.Empty] },
    ],
    actions: [],
  };
  data[CUBITS.Swap] = {
    key: CUBITS.Swap,
    enabled: true,
    name: 'Swap',
    description: 'This piece can Swap any adjacent piece as its move',
    type: 'Buff',
    subordinate: 'Movement - Pattern',
    placement: [
      { where: LOCATIONS.MyField, condition: PLACEMENT.Empty },
    ],
    movements: [
      { directions: [DIRECTIONS.Forward], distance: 7, contiguous: true, targets: [TARGETS.Friendly] },
      { directions: [DIRECTIONS.Back], distance: 7, contiguous: true, targets: [TARGETS.Friendly] },
      { directions: [DIRECTIONS.Left], distance: 7, contiguous: true, targets: [TARGETS.Friendly] },
      { directions: [DIRECTIONS.Right], distance: 7, contiguous: true, targets: [TARGETS.Friendly] },
      { directions: [DIRECTIONS.Forward, DIRECTIONS.Left], distance: 7, contiguous: true, targets: [TARGETS.Friendly] },
      { directions: [DIRECTIONS.Forward, DIRECTIONS.Right], distance: 7, contiguous: true, targets: [TARGETS.Friendly] },
      { directions: [DIRECTIONS.Back, DIRECTIONS.Left], distance: 7, contiguous: true, targets: [TARGETS.Friendly] },
      { directions: [DIRECTIONS.Back, DIRECTIONS.Right], distance: 7, contiguous: true, targets: [TARGETS.Friendly] },
    ],
    actions: [],
  };

  data[CUBITS.Enrage] = {
    key: CUBITS.Enrage,
    enabled: true,
    hidden: false,
    name: 'Enrage',
    description: "The piece can only make Capture movements.",
    type: 'Debuff',
    subordinate: 'Movement',
    placement: [
      { where: LOCATIONS.OpponentsField, condition: PLACEMENT.Empty },
    ],
    actions: [],
  };
  data[CUBITS.Passify] = {
    key: CUBITS.Passify,
    enabled: true,
    hidden: false,
    name: 'Passify',
    description: "The piece can only make Passive movements",
    type: 'Debuff',
    subordinate: 'Movement',
    placement: [
      { where: LOCATIONS.OpponentsField, condition: PLACEMENT.Empty },
    ],
    actions: [],
  };
  data[CUBITS.Encumber] = {
    key: CUBITS.Encumber,
    enabled: true,
    hidden: false,
    name: 'Encumber',
    description: "",
    type: 'Debuff',
    subordinate: 'Movement',
    placement: [
      { where: LOCATIONS.OpponentsField, condition: PLACEMENT.Empty },
    ],
    actions: [],
  };
  data[CUBITS.StickyFeet] = {
    key: CUBITS.StickyFeet,
    enabled: true,
    hidden: false,
    name: 'Sticky Feet',
    description: "",
    type: 'Debuff',
    subordinate: 'Movement',
    placement: [
      { where: LOCATIONS.OpponentsField, condition: PLACEMENT.Empty },
    ],
    actions: [],
  };
  data[CUBITS.Poisoned] = {
    key: CUBITS.Poisoned,
    enabled: true,
    hidden: false,
    name: 'Poisoned',
    description: "After this piece makes 3 moves it is sent to the afterlife",
    type: 'Debuff',
    subordinate: 'Movement',
    placement: [
      { where: LOCATIONS.OpponentsField, condition: PLACEMENT.Empty },
    ],
    actions: [],
  };
  data[CUBITS.Bleed] = {
    key: CUBITS.Bleed,
    enabled: true,
    hidden: false,
    name: 'Bleed',
    description: "After moving, remove a random cubie from this piece; if this is only cubit then send the piece to the afterlife",
    type: 'Debuff',
    subordinate: 'Movement',
    placement: [
      { where: LOCATIONS.OpponentsField, condition: PLACEMENT.Empty },
    ],
    actions: [],
  };

  // Aggressive
  data[CUBITS.Looter] = {
    key: CUBITS.Looter,
    enabled: true,
    hidden: false,
    name: 'Looter',
    description: "On Capture before the captured piece is sent to the afterlife, a random cubit attached to it is sent to your bag",
    type: 'Buff',
    subordinate: 'Capture',
    placement: [
      { where: LOCATIONS.MyField, condition: PLACEMENT.Empty },
    ],
    actions: [],
  };

  // Traps
  data[CUBITS.BlinkDodge] = {
    key: CUBITS.BlinkDodge,
    enabled: true,
    hidden: true,
    name: 'Blink Dodge',
    description: "When Captured, move the unit to a random unoccupied adjacent space. If no space is avaible it is captured.",
    type: 'Buff',
    subordinate: 'Trap',
    placement: [
      { where: LOCATIONS.MyField, condition: PLACEMENT.Empty },
    ],
    actions: [],
  };
  data[CUBITS.Recover] = {
    key: CUBITS.Recover,
    enabled: true,
    hidden: true,
    name: 'Recover',
    description: "When Captured put the cubies attached to the piece into the bag.",
    type: 'Buff',
    subordinate: 'Trap',
    placement: [
      { where: LOCATIONS.MyField, condition: PLACEMENT.Empty },
    ],
    actions: [],
  };

  // Targeting
  data[CUBITS.Condemn] = {
    key: CUBITS.Condemn,
    enabled: true,
    hidden: false,
    name: 'Condemn',
    description: "Attached piece slot's can not be targeted",
    type: 'Debuff',
    subordinate: 'Targeting',
    placement: [
      { where: LOCATIONS.OpponentsField, condition: PLACEMENT.Empty },
    ],
    actions: [],
  };
  data[CUBITS.Immunity] = {
    key: CUBITS.Immunity,
    enabled: true,
    hidden: false,
    name: 'Immunity',
    description: "This piece or its slot's can not be targeted",
    type: 'Strategic',
    subordinate: 'Targeting',
    placement: [
      { where: LOCATIONS.MyField, condition: PLACEMENT.Empty },
      { where: LOCATIONS.OpponentsField, condition: PLACEMENT.Empty },
    ],
    actions: [],
  };

  // Removal
  data[CUBITS.Replacement] = {
    key: CUBITS.Replacement,
    enabled: true,
    hidden: false,
    name: 'Replacement',
    description: "Replace a cubie on an opppent's piece with this one",
    type: 'Strategic',
    subordinate: '',
    placement: [
      { where: LOCATIONS.MyField, condition: PLACEMENT.Cubit },
      { where: LOCATIONS.OpponentsField, condition: PLACEMENT.Cubit },
    ],
    actions: [],
  };
  data[CUBITS.Destroy] = {
    key: CUBITS.Destroy,
    enabled: true,
    hidden: false,
    name: 'Destroy',
    description: "Remove a Cubie from a unit",
    type: 'Strategic',
    subordinate: 'Consumable',
    placement: [
      { where: LOCATIONS.MyField, condition: PLACEMENT.Cubit },
      { where: LOCATIONS.OpponentsField, condition: PLACEMENT.Cubit },
    ],
    actions: [],
  };
  data[CUBITS.Eliminate] = {
    key: CUBITS.Eliminate,
    enabled: true,
    hidden: false,
    name: 'Eliminate',
    description: "Remove all Cubies from a unit",
    type: 'Strategic',
    subordinate: 'Consumable',
    placement: [
      { where: LOCATIONS.MyField, condition: PLACEMENT.Unit },
      { where: LOCATIONS.OpponentsField, condition: PLACEMENT.Unit },
    ],
    actions: [],
  };

  // Tests...
  data[CUBITS.NoLeftTurn] = {
    key: CUBITS.NoLeftTurn,
    enabled: true,
    hidden: false,
    name: 'No Left Turn',
    description: "Removes the ability for the unit to make any moves involved moving left.",
    type: 'Debuff',
    subordinate: 'Movement',
    placement: [
      { where: LOCATIONS.OpponentsField, condition: PLACEMENT.Empty },
    ],
    actions: [],
  };
  data[CUBITS.NoRightTurn] = {
    key: CUBITS.NoRightTurn,
    enabled: true,
    hidden: false,
    name: 'No Right Turn',
    description: "Removes the ability for the unit to make any moves involved moving right.",
    type: 'Debuff',
    subordinate: 'Movement',
    placement: [
      { where: LOCATIONS.OpponentsField, condition: PLACEMENT.Empty },
    ],
    actions: [],
  };
  data[CUBITS.Monster] = {
    key: CUBITS.Monster,
    enabled: true,
    hidden: false,
    name: 'Monster',
    description: "Some Crazy Movement",
    type: 'Buff',
    subordinate: 'Movement',
    placement: [
      { where: LOCATIONS.MyField, condition: PLACEMENT.Empty },
    ],
    movements: [
      { directions: [DIRECTIONS.Left], distance: 1, contiguous: true, targets: [TARGETS.Friendly] },
      { directions: [DIRECTIONS.Right], distance: 1, contiguous: true, targets: [TARGETS.Friendly] },
      { directions: [DIRECTIONS.Left, DIRECTIONS.Forward, DIRECTIONS.Left, DIRECTIONS.Forward], distance: 2, contiguous: false, targets: [TARGETS.Empty] },
      { directions: [DIRECTIONS.Right, DIRECTIONS.Forward, DIRECTIONS.Right, DIRECTIONS.Forward], distance: 2, contiguous: false, targets: [TARGETS.Empty] },
      { directions: [DIRECTIONS.Forward], distance: 7, contiguous: true, targets: [TARGETS.Empty, TARGETS.Enemy] },
    ],
    actions: [],
  };
  data[CUBITS.Swapaport] = {
    key: CUBITS.Swapaport,
    enabled: true,
    hidden: false,
    name: 'Swapaport',
    description: "Some Crazy Swap Stuff",
    type: 'Buff',
    subordinate: 'Movement',
    placement: [
      { where: LOCATIONS.MyField, condition: PLACEMENT.Empty },
    ],
    movements: [
      { directions: [DIRECTIONS.Left], distance: 7, contiguous: false, targets: [TARGETS.Friendly] },
      { directions: [DIRECTIONS.Right], distance: 7, contiguous: false, targets: [TARGETS.Friendly] },
      { directions: [DIRECTIONS.Forward], distance: 7, contiguous: false, targets: [TARGETS.Friendly] },
      { directions: [DIRECTIONS.Back], distance: 7, contiguous: false, targets: [TARGETS.Friendly] },

      { directions: [DIRECTIONS.Left, DIRECTIONS.Forward], distance: 7, contiguous: false, targets: [TARGETS.Friendly] },
      { directions: [DIRECTIONS.Right, DIRECTIONS.Forward], distance: 7, contiguous: false, targets: [TARGETS.Friendly] },
      { directions: [DIRECTIONS.Left, DIRECTIONS.Back], distance: 7, contiguous: false, targets: [TARGETS.Friendly] },
      { directions: [DIRECTIONS.Right, DIRECTIONS.Back], distance: 7, contiguous: false, targets: [TARGETS.Friendly] },

      { directions: [DIRECTIONS.Left, DIRECTIONS.Left, DIRECTIONS.Forward], distance: 2, contiguous: false, targets: [TARGETS.Friendly] },
      { directions: [DIRECTIONS.Right, DIRECTIONS.Right, DIRECTIONS.Forward], distance: 2, contiguous: false, targets: [TARGETS.Friendly] },
      { directions: [DIRECTIONS.Left, DIRECTIONS.Left, DIRECTIONS.Back], distance: 2, contiguous: false, targets: [TARGETS.Friendly] },
      { directions: [DIRECTIONS.Right, DIRECTIONS.Right, DIRECTIONS.Back], distance: 2, contiguous: false, targets: [TARGETS.Friendly] },
      { directions: [DIRECTIONS.Left, DIRECTIONS.Forward, DIRECTIONS.Forward, ], distance: 2, contiguous: false, targets: [TARGETS.Friendly] },
      { directions: [DIRECTIONS.Left, DIRECTIONS.Back, DIRECTIONS.Back,], distance: 2, contiguous: false, targets: [TARGETS.Friendly] },
      { directions: [DIRECTIONS.Right, DIRECTIONS.Forward, DIRECTIONS.Forward], distance: 2, contiguous: false, targets: [TARGETS.Friendly] },
      { directions: [DIRECTIONS.Right, DIRECTIONS.Back, DIRECTIONS.Back], distance: 2, contiguous: false, targets: [TARGETS.Friendly] },
    ],
    actions: [],
  };

  data[CUBITS.Mulligan] = {
    key: CUBITS.Mulligan,
    enabled: true,
    hidden: false,
    name: 'Mulligan',
    description: "On Activation you shuffle your hand back into your library, then draws a new hand of one fewer cards than you had before.",
    type: 'Buff',
    subordinate: 'Activatable',
    placement: [
      { where: LOCATIONS.MyField, condition: PLACEMENT.Empty },
    ],
    actions: [
      { type: ACTIONS.Mulligan, name: "Mulligan", phase: 'play', targeting: false }
    ],
  };

  return data;
}

export const Database = {
  units: getUnits(),
  cubits: getCubits(),
};