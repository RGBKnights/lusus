import React from 'react';
import PropTypes from 'prop-types';

class ActionPlus extends React.Component {
  static propTypes = {
    color: PropTypes.string,
  };

  render() {
    let teamColor = this.props.color === 'b' ? '#000000' : '#FFFFFF';
    let style = { fill: teamColor, fillOpacity: 1 };

    return (
      <g transform="scale(0.0018,0.0018) translate(20,20)">
        <path 
          d="M272.824 24.318c-14.929.312-25.66 3.246-32.767 8.446L142.898 84.91l-54.105 73.514C77.42 175.98 85.517 210 121.111 188.197l38.9-51.351c49.476-42.711 150.485-23.032 102.587 62.591-23.53 49.582-12.457 73.79 17.76 83.95l13.812-46.381c23.949-53.825 68.502-63.51 66.684-106.904l107.302 7.724-.865-112.045-194.467-1.463zm-54.09 103.338c-17.41-.3-34.486 6.898-46.92 17.375l-39.044 51.33c10.713 8.506 21.413 3.96 32.125-6.363 12.626 6.394 22.365-3.522 30.365-23.297 3.317-13.489 8.21-23.037 23.474-39.045zm-32.617 88.324a13.49 13.49 0 0 0-5.232 1.235L51.72 276.725c-6.784 3.13-9.763 11.202-6.633 17.992l85.27 185.08c3.131 6.783 11.204 9.779 18 6.635l129.15-59.504c6.796-3.137 9.776-11.198 6.646-18L198.871 223.86c-2.344-5.097-7.474-8.043-12.754-7.88z" 
          style={style}
          transform="translate(0, 0) rotate(-360, 256, 256)" />
        <g transform="translate(256,256)">
          <circle cx="128" cy="128" r="128" fill="#000"></circle>
          <circle stroke="#fff" fill="#000" strokeWidth="18" cx="128" cy="128" r="101"></circle>
          <path fill="#fff" d="M119 64v55H64v18h55v55h18v-55h55v-18h-55V64h-18z"></path>
        </g>
      </g>
    );
  }
}

export default ActionPlus;