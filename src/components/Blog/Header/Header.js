import React from 'react';
import Search from './Search';


class Header extends React.Component {
  getStyles(){
    return{
      root:{
        backgroundColor:'#00bcd4'
      }
    }
  }
  render () {
    const styles=this.getStyles();
    return(
      <div style={styles.root}>
        <Search handleSearch={this.props.change}/>
      </div>
    )
  }
}

export default Header;
