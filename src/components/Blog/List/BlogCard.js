import React, { Component } from 'react';
import {hashHistory} from 'react-router';

class BlogCard extends Component {
  handleClick(){

    hashHistory.push(`blog/${this.props.name}`)

    // 也可用第二种方式，删除上在一条语句，进行上下文跳转
    // this.context.router.push(`blog/${this.props.name}`)
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
        <div style={styles.index}>{this.props.index}</div>
        <div style={styles.content}>
          <h3>{this.props.title}</h3>
          <p>{this.props.data}</p>
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


// 也可用第二种方式，进行上下文跳转
// BlogCard.contextTypes ={
//   router:React.PropTypes.object.isRequired
// }
export default BlogCard;
