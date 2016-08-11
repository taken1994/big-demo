import React from 'react';
import axios from 'axios';
import marked from 'marked';
import CircularProgress from 'material-ui/CircularProgress';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import hljs from 'highlight.js';
import {hashHistory} from 'react-router';


class Post extends React.Component {
  constructor(){
    super();
    this.state={
      Content: '',
      wait:true
    }
  }
  componentDidMount(){
    // use math random to avoid browser cache
    let address=`https://raw.githubusercontent.com/taken1994/big-demo/master/posts/${this.props.params.title}.md?v=${Math.random()}`;
    axios.get(address).then((res) => {
        console.log(res);
        this.setState({
          Content: res.data,
          wait:false
        });
      });
    }
  handleBack(){
    // console.log(hashHistory);
    hashHistory.goBack();
  }
  render () {
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
    let content=marked(this.state.Content)
    let styles={
      h1:{
        backgroundColor: 'rgb(0, 188, 212)',
        lineHeight:'75px',
        textAlign:'center',
        color:'#fff',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 1px 6px, rgba(0, 0, 0, 0.15) 0px 1px 4px'
      },
      cir:{
        textAlign:'center'
      },
      smallIcon: {
        width: 32,
        height: 32,
      },
      small: {
        width: 52,
        height: 52,
        padding: 10,
        position:'absolute',
        top:'10px',
        right:'10px',
      },
    }
    return(
      <div>
        <h1 style={styles.h1}>欢迎阅读</h1>
        <IconButton iconStyle={styles.smallIcon} style={styles.small} onClick={this.handleBack.bind(this)}>
          <ArrowBack color='#fff' />
        </IconButton>
        { this.state.wait ?   <div style={styles.cir}>
                                <CircularProgress />
                                <h1>连接GITHUB，提取数据中 . . .</h1>
                              </div>:"" }
        <div className="post-content">
          <div dangerouslySetInnerHTML={{__html: content}} />
        </div>
      </div>
    )
  }
}

export default Post;
// this.props.params.title中的title对应routes.js中的title
