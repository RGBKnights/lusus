import React from 'react';
import PropTypes from 'prop-types';

class Guard extends React.Component {
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
          d="M72.877 31.904c-.99-.014-1.958.006-2.988.098C43.67 35.408 22.545 61.005 18 93.775v26.15c2.296 16.266 8.804 30.665 17.848 41.565-6.58 1.237-12.504 3.53-17.848 6.717v23.813c22.983.386 43.265 14.03 57.31 34.318C89.56 246.92 98 274.598 98 305c0 30.402-8.44 58.08-22.69 78.662C61.266 403.95 40.984 417.592 18 417.98v8.577L23.03 494h7.67l108.204-161.824L140 304c.732-41.132 16.536-59.598 32-48 4.26 3.195 8.3 6.024 12.135 8.533l23.574-35.258c-21.607-17.4-59.103-43.23-90.68-68.658 10.89-13.647 17.894-32.612 17.894-53.627C134.924 65.494 108.478 32 76 32c-1.12-.036-2.133-.082-3.123-.096zm366.246 0c-.99.014-2.002.06-3.123.096-32.478 0-58.924 33.494-58.924 74.99 0 21.015 7.005 39.98 17.895 53.627-31.577 25.43-69.073 51.26-90.68 68.658l23.577 35.258A232.03 232.03 0 0 0 340 256c15.464-11.598 31.268 6.868 32 48l1.096 28.174L481.3 494h7.67l5.03-67.443v-8.578c-22.983-.388-43.265-14.03-57.31-34.318C422.44 363.08 414 335.402 414 305c0-30.402 8.44-58.08 22.69-78.662 14.045-20.288 34.327-33.932 57.31-34.318v-23.813c-5.344-3.187-11.27-5.48-17.848-6.717 9.044-10.9 15.552-25.3 17.848-41.566v-26.15c-4.546-32.77-25.67-58.366-51.89-61.772a28.52 28.52 0 0 0-2.987-.098zM148.758 46.758l40.068 110.215 47.34-31.653zm214.484 0l-87.408 78.562 47.34 31.653zM230.25 150.93l-16.625 11.117L435.588 494h24.057zm51.5 0l-14.922 22.316 12.03 17.99 19.517-29.19zM18 210.018v189.964c15.993-.38 30.943-9.855 42.512-26.566C72.322 356.356 80 332.036 80 305c0-27.035-7.678-51.357-19.488-68.416-11.57-16.71-26.52-26.186-42.512-26.566zm476 0c-15.993.38-30.943 9.855-42.512 26.566C439.678 253.644 432 277.964 432 305c0 27.035 7.678 51.357 19.488 68.416 11.57 16.71 26.52 26.186 42.512 26.566zM233.145 223.62L52.355 494h24.057l168.762-252.39zm-98.397 215.52L98.066 494h34.55zm242.504 0l2.13 54.86h34.552z"
          style={style}
          transform="translate(0, 0) rotate(-360, 256, 256)" />
      </g>
    );
  }
}

export default Guard;