import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      {
        id: "TT1",
        title: "Developer",
        salary: "500",
      },
      {
        id: "TT2",
        title: "Tester",
        salary: "400",
      },
      {
        id: "TT3",
        title: "PM",
        salary: "1000",
      },
    ],
  };

  addNewJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  deleteJob = (job) => {
    let currentJob = this.state.arrJobs;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJob,
    });
  };

  render() {
    /*
    JSX=> return block
    */
    console.log("check state: ", this.state);
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteJob={this.deleteJob}
        />
      </>
    );
  }
}

export default MyComponent;
