import React from 'react';
import map from 'lodash/fp/map';
import Cards from './Cards'
import axios from 'axios'
import CircularProgress from 'material-ui/CircularProgress';


class CardList extends React.Component {
  constructor(){
    super();
    this.state={
      cards: '',
      wait:true
    }
  }
  componentDidMount(){
    // use math random to avoid browser cache
    let address=`https://raw.githubusercontent.com/taken1994/big-demo/master/posts/Card.json?v=${Math.random()}`;
    axios.get(address).then((res) => {
        console.log(res);
        this.setState({
          cards: res.data,
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
    let Card=[]
    map((b) => {Card.push(
      <Cards title={b.title} subtitle={b.subtitle} href={b.href} src={b.src} key={Math.random()}/>);},this.state.cards);
    return(
          this.state.wait ?
          <div style={styles.cir}>
            <CircularProgress />
            <h1>连接GITHUB中 . . .</h1>
          </div>:
          <div className='work-container'>
            {Card}
          </div>
    )
  }
}

export default CardList;
