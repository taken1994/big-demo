import React, { Component } from 'react';
import '../../style/common.css';

class BlogCard extends Component {
  render(){
    let styles={
    root:{
        width:'80%',
        height:'90px',
        margin:'30px auto',
        maxWidth:'800px'
      },
      left:{
        float:'left',
        color:'#fff',
        backgroundColor:'#00BCD4',
        lineHeight:'90px',
        textAlign:'center',
        width:'12%',
        fontSize:'24px',
        fontWeight:'700'
      },
      right:{
        float:'left',
        paddingLeft:'20px',
        color:'#777'
      },
      h3:{
        lineHeight:'56px'
      },
      p:{
        opacity:'0.8'
        // 设置透明度
      }
    }
    return(
      <div style={styles.root} className="card">
        <div style={styles.left}>{this.props.index}</div>
        <div style={styles.right}>
          <h3 style={styles.h3}>{this.props.title}</h3>
          <p style={styles.p}>{this.props.data}</p>
        </div>
      </div>
    )
  }
}

BlogCard.defaultProps = {
  title:'请输入标题',
  index:1,
  data:'2016.7.19'
};
// 默认样式

BlogCard.propTypes = {
  title:React.PropTypes.string.isRequired,
  index:React.PropTypes.number.isRequired,
  data:React.PropTypes.string.isRequired
};
// 设置类型，不是该类型会发生警告。可设置类型为number, string, element or array

export default BlogCard;
