import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "leopdnfjkncdk cnsjcnsan jcidjf klsjos ana vnfin akjdsa alksoc cdunc",
      },
      {
        icon: <FaHiking />,
        title: "free Hiking",
        info:
          "leopdnfjkncdk cnsjcnsan jcidjf klsjos ana vnfin akjdsa alksoc cdunc",
      },
      {
        icon: <FaShuttleVan />,
        title: "free Shuttle services",
        info:
          "leopdnfjkncdk cnsjcnsan jcidjf klsjos ana vnfin akjdsa alksoc cdunc",
      },
      {
        icon: <FaBeer />,
        title: "free Beers",
        info:
          "leopdnfjkncdk cnsjcnsan jcidjf klsjos ana vnfin akjdsa alksoc cdunc",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
