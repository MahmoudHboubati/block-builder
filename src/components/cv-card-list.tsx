import React, { PureComponent } from "react";
import { CvCardBodyListModel } from "../core/models/BadgeModel";
import CvBadgeComponent from "./cv-badge";
import CvCardListItemComponent from "./cv-card-list-item";

interface CvCardListProps {
  list: CvCardBodyListModel[];
}

interface CvCardListState {}

class CvCardListComponent extends React.Component<CvCardListProps, CvCardListState> {
  render() {
    const items = this.props.list[0].items;

    const content = items.map((item) => {
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

    return <ul className="list">{content}</ul>;
  }
}

export default CvCardListComponent;
