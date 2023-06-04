import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.map((survey) => {
      return (
        <div className="card" key={survey._id}>
          <div className="card-content">
            <div className="cardContext">
              <div className="cardPieContainer">
                <div
                  className="cardPie"
                  style={{
                    background: `conic-gradient(green 0% ${
                      (survey.yes / (survey.yes + survey.no)) * 100
                    }%, red ${
                      (survey.yes / (survey.yes + survey.no)) * 100
                    }% 100%)`,
                  }}
                ></div>
              </div>
              <div className="cardCol">
                <span className="card-title">{survey.title}</span>
                <p>{survey.body}</p>
              </div>
            </div>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="cardSub">
            <p>Yes: {survey.yes}</p>
            <p>No: {survey.no}</p>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className="surveys">{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  surveys.sort(surveys.dateSent).reverse();
  return {
    surveys,
  };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
