import React from "react";

export default function Landing() {
  return (
    <div className="landingPage">
      <div className="landingContent">
        <div className="landingDesc">
          As a company feedback is essential in approving company quality and
          assurance. One of the easiest way to communicate with customers is via
          Email. With this application we allow for 5 mass emails to be sent out
          for $5. A template is already created and all you need to do is
          provide information for the template and send out and collect feedback
          from your customers.
        </div>
        <div className="landingExample">
          <h3>Example</h3>
          <div className="pieContent">
            <div className="landingPie">
              <div className="pieChart" id="landingExamplePie"></div>

              <div className="pieChartExample">
                Campaign Title: Feedback Central
                <br />
                Subject: We'd love to hear your feedback!
                <br />
                Body: Did you enjoy your experience with Feedback Central?
                <br />
                <span className="landingChoices">
                  <span className="choice">Yes</span>
                  <span className="choice">No</span>
                </span>
              </div>
            </div>
            <div className="pieContext">
              The following information will be shown for each survey sent out
              to customers. The number of people who enjoyed the experience will
              be shown in green on the pie chart. While those that didn't enjoy
              their experience will be shown in red. Additionally the total for
              each will be displayed. The content for each survey will be shown
              as well.
              <ul style={{ margin: "5vh 0vw" }}>
                <li>
                  Campaign Title: The Campaign title represents the survey name
                  located in the surveys
                </li>
                <li>
                  Subject: The subject is the title of the email that will
                  appear in the recipents inbox
                </li>
                <li>
                  Body: The body of this applys to the body of the email which
                  will prompt the user to respond either yes or no to the prompt
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
