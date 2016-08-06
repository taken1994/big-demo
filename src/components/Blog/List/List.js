import React from 'react';
import map from 'lodash/fp/map';
import BlogCard from './BlogCard'
import blogs from '../Blog/Blog'

class List extends React.Component {
  render () {
    let List=[]
    if (this.props.search == '') {
      map((b) => {List.push(<BlogCard title={b.title} date={b.date} index={b.index} key={Math.random()}/>);},blogs);
    }else {
      let query=new RegExp(this.props.search,"i");
      for(let i=0;i<blogs.length;i++){
        if (query.test(blogs[i].title)) {
          List.push(
            <BlogCard title={blogs[i].title} date={blogs[i].date} index={blogs[i].index} key={Math.random()} />
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
