import React from 'react';
import axios from 'axios';
import CircularProgress from 'material-ui/CircularProgress';
import {Card} from 'material-ui/Card';
import UserInfo from './UserInfo';
import Repos from './Repos';
import github from './github';

class About extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        user: {},
        repos:{},
        wait:true
      };
    }
    componentDidMount() {
      github.getGithubInfo('taken1994')
        .then((data) => {
          this.setState({
            user: data.user,
            repos: data.repos,
            wait:false
          });
        });
    }
  render () {
    let styles={
      root:{
        backgroundColor:'#00bcd4',
        height:'75px',
        width:'100%'
      },
      cir:{
        textAlign:'center'
      }
    }
    return(
      <div className='account'>
        <div style={styles.root}></div>
        <Card className="content" >
          {
            this.state.wait ?
            <div style={styles.cir}>
              <CircularProgress />
              <h1>连接GITHUB中 . . .</h1>
            </div>:
            <div>
              <UserInfo userInfo={this.state.user} />
              <Repos repos={this.state.repos} />
            </div>
          }
        </Card>
      </div>
    )
  }
}


export default About;
