import React, { PureComponent } from "react";
import { CvCardBodyListItemModel } from "../core/models/BadgeModel";

interface ContentComponentProps {
  content: any;
}

interface ContentComponentState {}

class ContentComponent extends React.Component<
  ContentComponentProps,
  ContentComponentState
> {
  render() {
    console.log(this.props.content instanceof Array);

    return <></>;
  }
}

export default ContentComponent;
