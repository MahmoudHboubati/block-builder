import React from "react";
import { CvProgressModel } from "../core/models/BadgeModel";

interface CvProgressProps {
  progress: CvProgressModel;
}

interface CvProgressState {}

class CvProgress extends React.Component<CvProgressProps, CvProgressState> {
  render() {
    const progress = this.props.progress;

    return (
      <div className="progress-container">
        <div className="progress-title">{progress.title}</div>
        <div className={`progress progress-${progress.color}`}>
          <span
            className="progress-indicator"
            data-value={progress.value}
          ></span>
        </div>
      </div>
    );
  }
}

export default CvProgress;
