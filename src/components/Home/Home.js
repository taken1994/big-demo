import React, { PropTypes } from 'react'

class Home extends React.Component {
  render () {
    let styles={
      root:{
        width:'100%',
        height:'100vh',
        background: 'url("https://raw.githubusercontent.com/taken1994/big-demo/master/src/images/1982774_190125031_2.jpg") no-repeat fixed center center/cover'
      },
      title:{
        color:'#fff',
        textAlign:'center',
        paddingTop:'30%',
        fontSize:'50px',
        fontWeight:'bold'
      },
      span:{
      color:'#00BCD4',
      fontSize:'36px'
      },
      cover:{
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,0.5)'
      }
    }
    return(
      <div style={styles.root}>
        <div style={styles.cover}>
          <h1 style={styles.title}>欢迎光临<br/><span style={styles.span}>TAKEN SPACE</span></h1>
        </div>
      </div>
    )
  }
}

export default Home;
