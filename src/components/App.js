import React, { PropTypes } from 'react'

import Hambuger from './Hambuger';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render () {
    return(
      <div>
        <div style={{position:'absolute'}}>
          <Hambuger />
        </div>
        {this.props.children}
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
export default App;
