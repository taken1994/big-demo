import React, { Component } from 'react';
import {hashHistory} from 'react-router';

class Card extends Component {
  handleClick(){
    hashHistory.push(`blog/${this.props.name}`)
  }
  render(){
    let styles={
      root:{
        width:'80%',
        height:'100px',
        margin:'20px auto',
        cursor:'pointer',
        boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)',
      },
      index:{
        float:'left',
        width:'80px',
        height:'100px',
        textAlign:'center',
        backgroundColor:'#00bcd4',
        color:'#fff',
        lineHeight:'100px'
      },
      content:{
        float:'left',
        color:'#777',
        paddingLeft:'25px'
      }
    }
    return(
      <div style={styles.root} className="card" onClick={this.handleClick.bind(this)}>
        <a href={this.props.href} className="work-list">
          <Card className="work-card">
            <CardMedia overlay={<CardTitle title={this.props.title} subtitle={this.props.subtitle} style={styles.title}/>} >
              <img src={this.props.src} />
            </CardMedia>
          </Card>
        </a>
      </div>
    )
  }
}

Card.defaultProps = {
  title:'未完待续',
  subtitle:'未完待续',
  href:'#',
  src:'#'
};
// 默认样式

Card.propTypes = {
  title:React.PropTypes.string.isRequired,
  subtitle:React.PropTypes.string.isRequired,
  href:React.PropTypes.string.isRequired，
  src:React.PropTypes.string.isRequired，
};

export default Card;
