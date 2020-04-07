import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
import PropTypes from "prop-types";

class MyButton extends React.Component {
  render() {
    return (
      <button
        onClick={() => {
          console.log("hello-world");
          this.props.validate();
        }}
      >
        {" "}
        {this.props.name}
      </button>
    );
  }
}

MyButton.propTypes = {
  name: PropTypes.string,
  validate: PropTypes.func,
};

customElements.define(
  "app-button",
  reactToWebComponent(MyButton, React, ReactDOM)
);
