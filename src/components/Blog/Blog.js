import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import List from './List/List';
import Header from './Header/Header';



class Blog extends React.Component {

  constructor(){
    super();
    this.state={
      search:''
    }
  }
  cardSearch(x){
    this.setState({
      search:x
    })
  }
  render(){
    return(
      <div>
        <Header change={this.cardSearch.bind(this)}/>
        <List search={this.state.search} />
        <Footer/>
      </div>
    )
  }
}
export default Blog;
