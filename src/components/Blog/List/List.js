import React from 'react';
import map from 'lodash/fp/map';
import BlogCard from './BlogCard'
import axios from 'axios'
import CircularProgress from 'material-ui/CircularProgress';


class List extends React.Component {
  constructor(){
    super();
    this.state={
      posts: '',
      wait:true
    }
  }
  componentDidMount(){
    // use math random to avoid browser cache
    let address=`https://raw.githubusercontent.com/taken1994/big-demo/master/posts/index.json?v=${Math.random()}`;
    axios.get(address).then((res) => {
        console.log(res);
        this.setState({
          posts: res.data,
          wait:false
        });
      });
    }
  render () {
    let styles={
      cir:{
        textAlign:'center'
      }
    }
    let List=[]
    if (this.props.search == '') {
      map((b) => {List.push(
        <BlogCard title={b.title} date={b.date} index={b.index} key={Math.random()}/>);},this.state.posts);
    }else {
      let query=new RegExp(this.props.search,"i");
      for(let i=0;i<this.state.posts.length;i++){
        if (query.test(this.state.posts[i].title)||query.test(this.state.posts[i].index)) {
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
          this.state.wait ?
          <div style={styles.cir}>
            <CircularProgress />
            <h1>连接GITHUB中 . . .</h1>
          </div>:
          <div>            
            {List}
          </div>
    )
  }
}

export default List;
