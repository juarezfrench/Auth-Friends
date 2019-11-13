import React, {setState} from 'react';
// import moment from 'moment';
// import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utilities/axiosWithAuth';
import {Card} from 'semantic-ui-react'

class Friends extends React.Component {
  state = {
    getFriends: [],
    friends: {
        name: '',
        age: '',
        email: ''

    }
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    
    axiosWithAuth()
      .get(`/api/friends`)
      .then(response => {
        console.log("get friends response", response);
        this.setState({
          getFriends: response.data
        });
      })
      .catch(err => console.log("friends list error: ", err.response));
  };


  render() {
      
   
    return (
        <Card.Group>
        {Array.from(this.state.getFriends).map(friend => (
          <div key={friend.id}>
               <Card>
                <Card.Content>
                <Card.Header>{friend.name}</Card.Header>
                  {/* <Card.Meta>{follower.login}</Card.Meta> */}
                  <Card.Description>
                    <span>{friend.age}</span>
                    <span>{friend.email}</span>
                  </Card.Description>
                </Card.Content>
              </Card>
          </div>
        ))}
        </Card.Group>

      );
      }
      }
      

export default Friends;
