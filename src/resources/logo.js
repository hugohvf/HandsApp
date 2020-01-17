import React, { Component } from 'react';
import { Image } from 'react-native';

class LogoTitle extends React.Component {
    render() {
      return (
        <Image
          source={require('./icon/hands.png')}
          style={{ width: 30, height: 30 }}
        />
      );
    }
  }

  export default LogoTitle;