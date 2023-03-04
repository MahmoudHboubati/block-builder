import React, { Component } from "react";
import { CvCardBodyModel } from "../core/models/BadgeModel";
import CvBadgeComponent from "./cv-badge";
import CvCardListItemComponent from "./cv-card-list-item";

interface Props {
  body: CvCardBodyModel;
}

interface State {}

class CvCardBodyComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const body = this.props.body;
    const list = body.list;

    const listItems = list.map((item) => {
      const badges = item.badges;

      const badgesItems = badges?.map((badge) => {
        return (
          <CvBadgeComponent key={badge.k} badge={badge}></CvBadgeComponent>
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
      <div className="cv-card-body">
        <div className="cv-card-brief">{body.brief}</div>
        <ul className="list">{listItems}</ul>
      </div>
    );
  }
}

export default CvCardBodyComponent;
