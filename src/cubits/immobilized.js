import React from 'react';
import PropTypes from 'prop-types';

class Immobilized extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
  };

  render() {
    let teamColor = this.props.color === 'b' ? '#000000' : '#FFFFFF';
    let style = { fill: teamColor, fillOpacity: 1 };

    return (
      <g transform="scale(0.0018,0.0018) translate(20,20)">
        <title>{this.props.name}</title>
        <path 
          d="M43.12 18l13.946 121.818c51.795 18.367 110.16 2.117 146.756-11.197L197.552 18H43.12zm178.394 104.672l1.033 18.232-6.18 2.334C178.31 157.604 109 180.324 45.412 154.78l-4.976-1.997-2.743-23.94-.05.04c-6.823 5.494-11.255 11.322-13.114 15.88-1.65 4.042-1.544 6.487-.364 8.725 24.097 21.185 79.74 25.714 129.445 18.842 25.163-3.48 48.764-9.534 65.656-16.334 8.445-3.4 15.213-7.032 19.425-10.205 3.857-2.903 4.75-4.973 4.876-5.1-.33-3.84-3.246-8.01-11.12-12.725-3.074-1.842-6.764-3.617-10.932-5.293zm18.752 43.37c-4.28 2.34-9.043 4.543-14.28 6.65-18.806 7.573-43.477 13.814-69.91 17.468-19.318 2.67-39.59 4.136-59.11 3.467-16.87 13.56-39.095 27.05-60.882 34.435 2.138 18.11 3.646 37.887 4.168 61.16 82.547-24.995 136.176-62.393 199.572-97.058.148-8.782.297-17.082.442-26.12zm-211.95 12.054c1.935 10.436 3.735 20.875 5.338 31.71 11.99-4.484 24.688-11.25 36.102-18.7-15.194-2.408-29.33-6.563-41.44-13.01zm211.157 34.816c-60.008 33.52-115.123 70.45-199.02 95.018-.002 17.76-.527 37.457-1.707 59.765l-.047.87-.212.84c-2.055 8.21-3.527 15.688-4.494 22.507.302-.104.58-.194.893-.307 6.485-2.336 15.45-6.38 25.804-11.572 20.71-10.383 47.118-25.36 73.25-40.974 26.135-15.614 52.034-31.88 71.888-44.88 9.927-6.5 18.352-12.19 24.48-16.532 3.065-2.17 5.56-4.008 7.317-5.382.336-.263.575-.482.865-.73.314-19.22.645-38.997.983-58.624zm-1.336 81.223c-6.08 4.244-13.64 9.338-22.448 15.105-12.728 8.334-27.848 17.95-43.917 27.88 25.2 20.31 54.754 32.147 84.836 45.835 15.352-14.047 37.583-23.992 67.956-27.767-27.123-8.056-53.87-16.52-80.562-25.03l-6.354-2.025.088-6.668c.122-9.2.26-18.256.4-27.33zm-82.565 52.904c-4.114 2.495-8.247 4.99-12.398 7.47-11.33 6.77-22.687 13.397-33.682 19.636 12 33.453 38.326 66.337 61.53 93.85 17.01.247 34.857.683 53.11 1.936 3.28.225 6.505.386 9.694.505-6.277-24.386-4.454-51.29 10.47-73.283-29.89-13.406-61.288-26.33-88.724-50.115zm195.815 24.474c-44.467.338-71.494 12.427-86.37 28.416-18.025 19.375-20.142 46.255-12.476 70.617 4.113-.11 8.137-.306 12.077-.584-1.25-5.176-2.09-11.09-2.328-17.43-.52-13.83 1.628-29.78 10.57-42.78l.25-.362.285-.335c10.372-12.303 26.925-18.544 45.57-22.323 18.645-3.78 39.776-4.836 60.164-4.453.84.015 1.668.05 2.505.07-.425-2.54-.735-4.752-1.158-6.48-.34-1.393-.703-2.385-1.065-3.14-10.02-.885-19.366-1.282-28.025-1.216zM93.555 383.05c-8.76 4.8-17.12 9.227-24.795 13.075-10.71 5.37-20.082 9.643-27.774 12.414-3.03 1.09-5.78 1.947-8.408 2.54.058 10.436 1.71 18.686 4.547 25.078 5.88 13.254 16.68 20.465 33.914 25.156 19.31 5.257 45.883 5.99 76.206 6.373-20.3-24.53-41.888-53.246-53.69-84.636zm277.9 17.157c-17.14.01-34.337 1.212-48.914 4.166-16.43 3.33-29.083 9.153-35.075 16.01-5.437 8.188-7.605 20.41-7.19 31.474.21 5.62 1.035 10.896 2.096 14.936.46 1.75 1.034 3.146 1.538 4.324 3.578.465 6.97.89 10.244 1.29l9.026-10.958s9.738 8.013 22.345 16.124c12.608 8.11 28.636 15.7 36.723 16.01 7.663.292 20.613-6.435 30.707-14.285 4.964-3.862 9.23-7.732 12.31-10.69-2.514-3.37-5.95-7.78-10.02-12.376-8.338-9.415-19.717-18.643-25.766-20.04-18.542-4.276-31.368-.657-31.368-.657l-4.792-17.35s9.855-2.68 24.352-1.812c4.832.29 10.182.973 15.853 2.28 6.73 1.553 12.768 4.925 18.24 9.122L388.5 410.8c2.918-.56 5.838-.842 8.736-.87 8.925-.09 17.646 2.23 25.5 6.23 5.592-5.686 12.22-8.89 18.79-9.976-2.917-.537-6.13-1.074-9.618-1.588-14.625-2.158-33.607-3.954-53.117-4.32-2.438-.047-4.886-.07-7.335-.07zm100.176 15.908c4.142 3.49 7.597 7.442 10.32 11.28 3.63 5.117 4.5 10.938 3.99 16.4 1.502-2.272 2.808-5.056 3.464-7.695.92-3.696.55-6.74-.367-8.37-3.055-5.438-9.574-9.522-17.406-11.615zm-26.716 7.106c-2.454-.023-4.805.856-7.44 3.333 3.722 3.502 6.993 7.41 9.67 11.582 4.22 6.577 6.55 14.585 6.106 22.498 4.017-1.784 7.18-3.608 8.553-5.117 2.28-2.508 4.705-6.78 5.69-10.49.987-3.708.513-6.174-.225-7.215-3.778-5.324-10.985-11.623-17.06-13.546-1.9-.6-3.62-1.027-5.294-1.043zm-48.863 4.833c-1.196.027-2.37.135-3.515.322 6.054 4.776 11.404 10.53 16.184 15.926 9.258 10.455 15.774 20.25 15.774 20.25l3.822 5.737c2.072-1.158 3.61-2.305 4.387-3.35 2.667-3.58 2.452-14.158-.707-19.082-6.828-10.642-21.86-19.522-34.74-19.802-.404-.01-.806-.01-1.205 0z"
          style={style}
          transform="translate(0, 0) scale(1, 1) rotate(-360, 256, 256)" />
      </g>
    );
  }
}

export default Immobilized;