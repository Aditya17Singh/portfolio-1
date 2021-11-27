import React from "react";
let b = document.querySelector("body");

class Dark extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: null,
    };
  }
  handleChange = () => {
    this.setState({
      mode: !this.state.mode,
    });
  };
  render() {
    return (
      <>
        <div
          className={
            this.state.mode ? b.classList.add("body") : (b.classList = "")
          }
        >
          <div className=" ">
            <button onClick={this.handleChange} className="btn-p btn-position">
            <i class="fas fa-moon"></i>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Dark;
