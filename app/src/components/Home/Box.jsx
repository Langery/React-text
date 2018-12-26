/* jshint esversion: 6 */
import React, { Component } from 'react';

import { Box, Text } from 'react-desktop/macOs';

class BoxIndex extends Component {
  render () {
    return (
      <Box label="Box" padding="10px 30px">
        <Text>Some text...</Text>
      </Box>
    );
  }
}

export default BoxIndex;
