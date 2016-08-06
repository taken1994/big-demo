import React from 'react'
import IconButton from 'material-ui/IconButton';
import MenuButton from 'material-ui/svg-icons/navigation/menu';
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
        marginTop:'10px',
        marginLeft:'10px',
        width: '52px',
        height: '52px',
      },
      svg: {
        width: '32px',
        height: '32px',
      },
      title:{
        color:'#fff',
        fontSize:'32px',
        lineHeight:'64px',
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
        <IconButton style={styles.icon} iconStyle={styles.svg} onTouchTap={this.handleToggle.bind(this)}>
          <MenuButton color='#fff' hoverColor='#004D40'/>
        </IconButton>
        <Drawer docked={false} width={256} open={this.state.open} onRequestChange={this.handleToggle.bind(this)}>
          <p style={styles.title}>TAKEN'S SPACE</p>
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
