import React from 'react'
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

class Hambuger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: "",
      btnColor:false
    };
  }

  handleToggle(){this.setState({open: !this.state.open})};
  handleClose(){this.setState({open: false})};

  componentDidMount() {
    this.setNavState();
  }
  componentWillReceiveProps() {
    this.setNavState();
  }
  setNavState(){
    this.setState({
      btnColor: this.context.router.isActive('/about') ? true :
        this.context.router.isActive('/skill') ? true : false,
      title:this.context.router.isActive('/', true) ? 'HOME' :
        this.context.router.isActive('/blog')? 'BLOG' :
        this.context.router.isActive('/about')? 'ABOUT' :
        this.context.router.isActive('/skill')? 'SKILL' : 'HOME'
    });
  }
  render () {
    let styles={
      icon:{
        position:'absolute',
        top:'10px',
        left:'10px',
        width:'52px',
        height:'52px',
        padding:'10px'
      },
      smallIcon:{
        width:'32px',
        height:'32px'
      },
      title:{
        marginTop:'0px',
        color:'#fff',
        fontSize:'25px',
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
        <IconButton tooltip="menu"
          style={styles.icon} iconStyle={styles.smallIcon}
          onTouchTap={this.handleToggle.bind(this)}>
          {this.state.btnColor ? <Menu color='#00BCD4'/> : <Menu color='#fff'/>}
        </IconButton>
        <Drawer docked={false} width={256} open={this.state.open} onRequestChange={this.handleToggle.bind(this)}>
          <p style={styles.title}>TAKEN@{this.state.title}</p>
          <div style={styles.menu}>
            <MenuItem onTouchTap={this.handleClose.bind(this)}><Link style={styles.line} activeStyle={{color: 'red'}} onlyActiveOnIndex={true} to='/'>首页</Link></MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}><Link style={styles.line} activeStyle={{color: 'red'}} to='blog'>博客</Link></MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}><Link style={styles.line} activeStyle={{color: 'red'}} to='skill'>技能</Link></MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}><Link style={styles.line} activeStyle={{color: 'red'}} to='about'>关于</Link></MenuItem>
          </div>
        </Drawer>
      </div>
    )
  }
}
Hambuger.contextTypes ={
  router:React.PropTypes.object.isRequired
}
export default Hambuger;
