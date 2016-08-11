import React, { PropTypes } from 'react'

import Hambuger from './Hambuger';
import Footer from './Footer';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render () {
    return(
      <div>
        <Hambuger />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
export default App;
