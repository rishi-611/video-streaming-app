import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = (values) => {
    this.props.createStream(values);
  };

  render() {
    return (
      <div>
        <StreamForm
          onSubmit={this.onSubmit}
          header="Create New Stream"
        ></StreamForm>
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
