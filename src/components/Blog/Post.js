import React from 'react';
import axios from 'axios';

class Post extends React.Component {
  constructor(){
    super();
    this.state={
      Content: ''
    }
  }
  componentDidMount(){
    // use math random to avoid browser cache
    let address=`https://raw.githubusercontent.com/taken1994/big-demo/master/posts/css.md?v=${Math.random()}`;
    axios.get(address).then((res) => {
        console.log(res);
        this.setState({
          Content: res.data,
        });
      });
    }
  render () {
    return(
      <div>
        {this.props.params.title}
        {this.state.Content}
      </div>
    )
  }
}

export default Post;
// this.props.params.title中的title对应routes.js中的title
