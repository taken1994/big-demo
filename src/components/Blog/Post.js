import React from 'react';
import axios from 'axios';
import marked from 'marked';
class Post extends React.Component {
  constructor(){
    super();
    this.state={
      Content: ''
    }
  }
  componentDidMount(){
    // use math random to avoid browser cache
    let address=`https://raw.githubusercontent.com/taken1994/big-demo/master/posts/${this.props.params.title}.md?v=${Math.random()}`;
    axios.get(address).then((res) => {
        console.log(res);
        this.setState({
          Content: res.data
        });
      });
    }

  render () {
    let content=marked(this.state.Content !='' ? this.state.Content : 'loading')
    return(
      <div>
        <div dangerouslySetInnerHTML={{__html: content}} />
      </div>
    )
  }
}

export default Post;
// this.props.params.title中的title对应routes.js中的title
