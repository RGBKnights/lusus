import React from 'react';
import PropTypes from 'prop-types';

class HitnRun extends React.Component {
  static propTypes = {
    color: PropTypes.string,
  };

  render() {
    let teamColor = this.props.color === 'b' ? '#000000' : '#FFFFFF';
    let style = { fill: teamColor, fillOpacity: 1 };

    return (
      <g transform="scale(0.0018,0.0018) translate(20,20)">
        <title>{this.props.name}</title>
        <path 
          d="M414.666 22.572L19.91 114.15l251.8 266.028-59.66 59.69 282.602 53.44-53.41-282.75-31.545 31.563 36.826 84.86-79.253-87.507-80.643-79.217 41.025 80.377-135.38-114.785L414.667 22.572zM232.484 215.77c11.482 0 20.787 9.308 20.787 20.79 0 2.462-.43 4.824-1.215 7.016l35.55 34.21 33.06-30.81 12.74 13.672-17.374 16.19 138.286 133.64L473.236 471l-60.515-17.447-140.55-135.84-18.096 16.86-12.74-13.67 32.578-30.358-35.418-34.082c-1.903.574-3.92.887-6.01.887-11.48 0-20.787-9.31-20.787-20.79 0-11.482 9.306-20.79 20.787-20.79zm68.883 75.617l-12.963 13.463L426.96 438.256l12.964-13.463-138.557-133.406z"
          style={style}
          transform="translate(0, 0) scale(1, 1) rotate(-360, 256, 256)" />
      </g>
    );
  }
}

export default HitnRun;