import React from 'react';
import axios from 'axios';
import marked from 'marked';
import CircularProgress from 'material-ui/CircularProgress';
import {Card} from 'material-ui/Card';
import hljs from 'highlight.js';


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

  render () {
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
    let content=marked(this.state.Content)
    let styles={
      cir:{
        textAlign:'center'
      },
      root:{
        margin:'30px auto',
        width:'90%',
        boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)',
        padding:'30px',
        marginTop:'100px'
      }
    }
    return(
      this.state.wait ?
      <div style={styles.cir}>
        <CircularProgress />
        <h1>连接GITHUB，提取数据中 . . .</h1>
      </div>:
      <Card style={styles.root}>
        <div dangerouslySetInnerHTML={{__html: content}} />
      </Card>
    )
  }
}

export default Post;
// this.props.params.title中的title对应routes.js中的title
