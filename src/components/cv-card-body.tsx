import React, { Component } from "react";
import {
  CvCardBodyListItemModel,
  CvCardBodyListModel,
  CvCardBodyModel,
  CvProgressModel,
} from "../core/models/BadgeModel";
import CvBadgeComponent from "./cv-badge";
import CvCardListComponent from "./cv-card-list";
import CvCardListItemComponent from "./cv-card-list-item";
import CvProgress from "./cv-progress";

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

    const isListItems =
      body.content instanceof Array &&
      body.content.length > 0 &&
      body.content[0] instanceof CvCardBodyListModel;

    const isProgressItems =
      body.content instanceof Array &&
      body.content.length > 0 &&
      body.content[0] instanceof CvProgressModel;

    let content: JSX.Element[] = null;

    if (isListItems) {
      content = [
        <CvCardListComponent
          key={1}
          list={body.content as CvCardBodyListModel[]}
        ></CvCardListComponent>,
      ];
    } else if (isProgressItems) {
      const list = body.content as CvProgressModel[];

      content = list.map((item) => {
        return <CvProgress key={item.k} progress={item}></CvProgress>;
      });
    }

    return (
      <div className="cv-card-body">
        {body.brief ? <div className="cv-card-brief">{body.brief}</div> : null}
        {content}
      </div>
    );
  }
}

export default CvCardBodyComponent;
