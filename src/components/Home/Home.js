import React, { PropTypes } from 'react'

class Home extends React.Component {
  render () {
    let styles={
      root:{
        width:'100vw',
        height:'100vh',
        background: 'url("https://raw.githubusercontent.com/taken1994/big-demo/master/src/images/1982774_190125031_2.jpg") no-repeat fixed center center/cover'
      },
      title:{
        color:'#fff',
        textAlign:'center',
        paddingTop:'30%',
        fontSize:'50px',
        fontWeight:'bold'
      }
    }
    return(
      <div style={styles.root}>
        <h1 style={styles.title}>欢迎光临</h1>
      </div>
    )
  }
}

export default Home;
