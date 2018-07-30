import React from 'react';
import PropTypes from 'prop-types';

class Knight extends React.Component {
  static propTypes = {
    color: PropTypes.string,
  };

  render() {
    let teamColor = this.props.color === 'b' ? '#000000' : '#FFFFFF';

    return (
      <g transform="scale(0.0015,0.0015) translate(50,50)">
        <path d="M60.81 476.91h300v-60h-300v60zm233.79-347.3l13.94 7.39c31.88-43.62 61.34-31.85 61.34-31.85l-21.62 53 35.64 19 2.87 33 64.42 108.75-43.55 29.37s-26.82-36.39-39.65-43.66c-10.66-6-41.22-10.25-56.17-12l-67.54-76.91-12 10.56 37.15 42.31c-.13.18-.25.37-.38.57-35.78 58.17 23 105.69 68.49 131.78H84.14C93 85 294.6 129.61 294.6 129.61z" style={{fill: teamColor, fillOpacity: 1}} transform="translate(0, 0) scale(1, 1) rotate(-360, 256, 256)"></path>
      </g>
    );
  }
}

export default Knight;