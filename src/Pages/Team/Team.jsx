import React, { Component } from 'react'
import UserCard from '../../Components/UserCard';
import './Team.scss'
export default class Team extends Component {

  constructor(){
    super();
// name,imageUrl,githubUrl,linkedInUrl,college,status
    this.state = {
      membersData : []
    }
  }

  

  async componentDidMount(){
      const url=  "http://localhost:5001/team/getMembers"
      
      const response = await fetch(url , {
        method  : 'GET',
        headers : {
          'Content-Type' : 'application/json'
        }
      });

      const json  = await response.json();
      this.setState({membersData : json});
  }

  render() {
    return (

        <div className='my-3'>
          
            <h1> Team Members </h1>

            <div className='row-team'>
              {this.state.membersData.map((element)=>{
                  return <div className='ech-person' key={element.githubUrl}>
                      <UserCard userData={element}/>
                   </div> 
              })}
            </div>
        </div>
  
    )
  }
}
