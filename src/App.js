import React, { PropTypes } from 'react'

import Hambuger from './components/Hambuger';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

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
