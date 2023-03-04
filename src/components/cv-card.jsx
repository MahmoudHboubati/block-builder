import React, { Component } from "react";
import CvCardBodyComponent from "./cv-card-body";

class CvCardComponent extends Component {
  state = {};
  render() {
    const card = this.props.card;
    const bodies = this.props.card.bodies;

    const bodiesTags = bodies.map((b) => {
      return <CvCardBodyComponent key={b.k} body={b}></CvCardBodyComponent>;
    });

    return (
      <div className="cv-card">
        <div className="cv-card-header">
          {card.title}
          {card.titleDescription ? (
            <small>{card.titleDescription}</small>
          ) : null}
        </div>
        <div className="cv-card-header">{card.headerTitle}</div>
        <div className="cv-badge card-cv-badge">
          {card.headerBadges[0].content}
        </div>
        {bodiesTags}
      </div>
    );
  }
}

export default CvCardComponent;
