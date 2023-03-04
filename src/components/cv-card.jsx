import React, { Component } from "react";
import CvBadgeComponent from "./cv-badge";
import CvCardListItemComponent from "./cv-card-list-item";

class CvCardComponent extends Component {
  state = {};
  render() {
    const card = this.props.card;
    const body = this.props.card.body;
    const list = this.props.card.body.list;

    const listItems = list.map((item) => {
      const badges = item.badges;

      const badgesItems = badges?.map((badge) => {
        return (
          <CvBadgeComponent key={badge.text} badge={badge}></CvBadgeComponent>
        );
      });

      return (
        <CvCardListItemComponent
          key={item.title}
          item={item}
          badges={badgesItems}
        ></CvCardListItemComponent>
      );
    });

    return (
      <div className="cv-card">
        <div className="cv-card-header">
          {card.title}
          <small>{card.titleDescription}</small>
        </div>
        <div className="cv-card-header">{card.headerTitle}</div>
        <div className="cv-badge card-cv-badge">
          {card.headerBadges[0].content}
        </div>
        <div className="cv-card-body">
          <div className="cv-card-brief">{body.brief}</div>
          <ul className="list">{listItems}</ul>
        </div>
      </div>
    );
  }
}

export default CvCardComponent;
