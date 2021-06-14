import React from "react";
import { connect } from "react-redux";
import { showStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.showStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.stream.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return (
        <div className="container text-center">
          <h3>
            Loading <i class="fas fa-circle-notch"></i>
          </h3>
        </div>
      );
    }
    const initialValues = {
      title: this.props.stream.title,
      description: this.props.stream.description,
    };
    return (
      <div>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={initialValues}
          header="Edit Your Stream"
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { showStream, editStream })(StreamEdit);
