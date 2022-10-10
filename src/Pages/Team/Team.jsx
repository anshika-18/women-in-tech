import React, { Component } from "react";
import UserCard from "../../Components/UserCard";
import "./Team.scss";
export default class Team extends Component {
  constructor() {
    super();
    // name,imageUrl,githubUrl,linkedInUrl,college,status
    this.state = {
      membersData: [],
    };
  }

  async componentDidMount() {
    this.setState({
      membersData: [
        {
          id: 1,
          name: "Jane Doe",
          imageUrl:
            "https://i.pinimg.com/564x/3e/b3/f3/3eb3f34ccea3c7d84a415a261cf9cd08.jpg",
          status: "Creative Head",
          linkedInUrl: "#",
          githubUrl: "#",
          instagramUrl: "#",
        },
        {
          id: 2,
          name: "Jane Smith",
          imageUrl:
            "https://i.pinimg.com/564x/6f/1b/8b/6f1b8bdfd6b74fc267148515aaa33e5d.jpg",
          status: "Creative Head",
          linkedInUrl: "#",
          githubUrl: "#",
          instagramUrl: "#",
        },
        {
          id: 3,
          name: "Jenifer Doe",
          imageUrl:
            "https://i.pinimg.com/564x/49/67/10/49671023fb589dc2df4f6043618d0314.jpg",
          status: "Creative Head",
          linkedInUrl: "#",
          githubUrl: "#",
          instagramUrl: "#",
        },
        {
          id: 4,
          name: "Jane Watson",
          imageUrl:
            "https://i.pinimg.com/736x/ff/d7/14/ffd714d05ba643bbd3dab3c8fd473aa5.jpg",
          status: "Creative Head",
          linkedInUrl: "#",
          githubUrl: "#",
          instagramUrl: "#",
        },
        {
          id: 5,
          name: "Emma Smith",
          imageUrl:
            "https://i.pinimg.com/564x/db/5d/ac/db5dac24913fd008681b2262d7127ad3.jpg",
          status: "Creative Head",
          linkedInUrl: "#",
          githubUrl: "#",
          instagramUrl: "#",
        },
      ],
    });
  }

  render() {
    return (
      <div className="my-3">
        <h1> Team Members </h1>

        <div className="row-team">
          {this.state.membersData.map((element) => {
            return (
              <div className="ech-person" key={element.id}>
                <UserCard userData={element} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
