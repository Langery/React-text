/* jshint esversion: 6 */
import React, { Component } from 'react';

import { Button } from 'react-desktop/macOs';

class Btn extends Component {
  render () {
    return (
      <div>
        <Button color="blue" onClick={() => console.log('Click!')}>
          Press me!
        </Button>
      </div>
    );
  }
}

export default Btn;
