import React from "react";
import { connect } from "react-redux";
import "../../css/deleteModal.css";
import history from "../../history";
import Modal from "../../Modal";
import { showStream, deleteStream } from "../../actions";

class DeleteModal extends React.Component {
  componentDidMount() {
    this.props.showStream(this.props.match.params.id);
  }

  ModalContent() {
    if (!this.props.stream) {
      return (
        <p>
          Are you sure that you want to delete the stream?
          <br />
          This action can not be undone
        </p>
      );
    }
    return (
      <p>
        Are you sure that you want to delete the stream
        <br />
        <strong>{this.props.stream.title}</strong>?
        <br />
        This action can not be undone
      </p>
    );
  }

  handleActionClick = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.ModalContent()}
        action="Delete"
        onDismiss={() => history.push("/")}
        handleActionClick={this.handleActionClick}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { showStream, deleteStream })(
  DeleteModal
);
