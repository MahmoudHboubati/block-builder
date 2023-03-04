import React, { Component } from "react";

class CvCardListItemComponent extends Component {
  render() {
    const item = this.props.item;
    const badges = this.props.badges;
    return (
      <li className="cv-list-item">
        <span className="cv-list-item-title">{item.title}</span> {item.content}
        <div className="cv-badge-container">{badges}</div>
      </li>
    );
  }
}

export default CvCardListItemComponent;
