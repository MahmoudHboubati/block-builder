import React, { Component } from "react";

class CvBadgeComponent extends Component {
  render() {
    const badge = this.props.badge;

    return (
      <div
        
        className={`cv-badge ${
          badge.outline ? "cv-badge-has-extend" : ""
        }  cv-badge-small`}
      >
        {badge.text}
        {badge.outline ? (
          <div className="cv-badge-extend">{badge.outline}</div>
        ) : null}
      </div>
    );
  }
}

export default CvBadgeComponent;
