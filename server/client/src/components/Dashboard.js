import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <SurveyList />
      <div className="fixed-action-btn">
        <Link
          className="btn-floating btn-large red darken-3"
          to="./surveys/new"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
}
