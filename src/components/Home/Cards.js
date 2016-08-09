import React, { Component } from 'react';
import {Card,CardMedia,CardTitle} from 'material-ui/Card';

class Cards extends Component {
  render(){
    let styles={
      title:{
        padding:'5px'
      }
    }
    return(
      <div className='work-container'>
        <a href={this.props.href} className="work-list">
          <Card className="work-card">
            <CardMedia overlay={<CardTitle title={this.props.title} subtitle={this.props.subtitle}/>} >
              <img src={this.props.src} style={styles.title}/>
            </CardMedia>
          </Card>
        </a>
      </div>
    )
  }
}

Cards.defaultProps = {
  title:'未完待续',
  subtitle:'未完待续',
  href:'#',
  src:'#'
};
// 默认样式

Cards.propTypes = {
  title:React.PropTypes.string.isRequired,
  subtitle:React.PropTypes.string.isRequired,
  href:React.PropTypes.string.isRequired,
  src:React.PropTypes.string.isRequired,
};

export default Cards;
