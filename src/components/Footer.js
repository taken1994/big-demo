import React from 'react';

class Footer extends React.Component {
  getStyles(){
    return{
      root:{
        textAlign:'center',
        backgroundColor:'#727272',
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
    let Me=`https://raw.githubusercontent.com/taken1994/big-demo/master/src/images/timg.png`
    return(
      <div style={styles.root}>
        <p>更多信息，可以加微信</p>
        <img src={Me}  style={styles.img}/>
      </div>
    )
  }
}

export default Footer;
