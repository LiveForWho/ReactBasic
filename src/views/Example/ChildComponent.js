import React from "react";
import "./Demo.scss";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleDelete = (job) => {
    console.log("CLick: ", job);
    this.props.deleteJob(job);
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("run did update", "props: ", prevProps, "state: ", prevState);
  }

  componentDidMount() {
    console.log("run did mount");
  }

  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    /*
    JSX=> return block
    */
    return (
      <>
        {showJobs === false ? (
          <div>
            <button
              style={{ color: "red" }}
              onClick={() => this.handleShowHide()}
            >
              Show
            </button>
          </div>
        ) : (
          <>
            <div className="jobList">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title}-{item.salary} <></>
                    <span onClick={() => this.handleDelete(item)}>X</span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

// const ChildComponent = (props) => {
//   console.log("check prop: ", props);
//   let { arrJobs } = props;
//   /*
//     JSX=> return block
//     */
//   return (
//     <>
//       <div className="jobList">
//         {arrJobs.map((item, index) => {
//           if (item.salary >= 500) {
//             return (
//               <div key={item.id}>
//                 {item.title}-{item.salary}$
//               </div>
//             );
//           }
//         })}
//       </div>
//     </>
//   );
// };

export default ChildComponent;
