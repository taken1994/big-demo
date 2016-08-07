import React from 'react'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

class Hambuger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle(){this.setState({open: !this.state.open})};
  handleClose(){this.setState({open: false})};

  render () {
    let styles={
      icon:{
        boxShadow:'0',
        width:'100vw',
      },
      title:{
        marginTop:'0px',
        color:'#fff',
        fontSize:'32px',
        lineHeight:'70px',
        textAlign:'center',
        backgroundColor:'#00BCD4',
        marginBottom:'20px'
      },
      menu:{
        textAlign:'center'
      },
      line:{
        textDecoration:'none',
        display:'block'
      }
    }
    return(
      <div>
        <AppBar style={styles.icon} onLeftIconButtonTouchTap={this.handleToggle.bind(this)}/>
        <Drawer docked={false} width={256} open={this.state.open} onRequestChange={this.handleToggle.bind(this)}>
          <p style={styles.title}>TAKEN SPACE</p>
          <div style={styles.menu}>
            <MenuItem onTouchTap={this.handleClose.bind(this)}><Link style={styles.line} activeStyle={{color: 'red'}} onlyActiveOnIndex={true} to='/'>首页</Link></MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}><Link style={styles.line} activeStyle={{color: 'red'}} to='blog'>博客</Link></MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}><Link style={styles.line} activeStyle={{color: 'red'}} to='about'>关于</Link></MenuItem>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default Hambuger;
