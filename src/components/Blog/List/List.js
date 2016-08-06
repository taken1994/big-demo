import React from 'react';
import map from 'lodash/fp/map';
import BlogCard from './BlogCard'
import axios from 'axios'

class List extends React.Component {
  constructor(){
    super();
    this.state={
      posts: ''
    }
  }
  componentDidMount(){
    // use math random to avoid browser cache
    let address=`https://raw.githubusercontent.com/taken1994/big-demo/master/posts/index.json?v=${Math.random()}`;
    axios.get(address).then((res) => {
        console.log(res);
        this.setState({
          posts: res.data
        });
      });
    }
  render () {
    let List=[]
    if (this.props.search == '') {
      map((b) => {List.push(
        <BlogCard title={b.title} date={b.date} index={b.index} key={Math.random()}/>);},this.state.posts);
    }else {
      let query=new RegExp(this.props.search,"i");
      for(let i=0;i<this.state.posts.length;i++){
        if (query.test(this.state.posts[i].title)) {
          List.push(
            <BlogCard title={this.state.posts[i].title}
              date={this.state.posts[i].date}
              index={this.state.posts[i].index}
              key={Math.random()} />
          )
        }
      }
    }
    return(
      <div>
        {List}
      </div>
    )
  }
}

export default List;
