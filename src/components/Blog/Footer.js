import React from 'react';
import Me from '../../images/timg.png';

class Footer extends React.Component {
  getStyles(){
    return{
      root:{
        textAlign:'center',
        backgroundColor:'#212121',
        color:"#fff",
        padding:'30px 10px'
      },
      img:{
        width:'40%',
        marginTop:'20px',
        maxWidth:'200px'
      }
    }
  };
  render () {
    const styles=this.getStyles();
    return(
      <div style={styles.root}>
        <p>更多信息，可以加微信</p>
        <img src={Me}  style={styles.img}/>
      </div>
    )
  }
}

export default Footer;