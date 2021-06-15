import React from "react";
import { connect } from "react-redux";
import { showStream } from "../../actions";

class StreamShow extends React.Component {
  componentDidMount() {
    this.props.showStream(this.props.match.params.id);
  }
  render() {
    if (!this.props.stream) {
      return <div className="container">...Loading</div>;
    }
    const { title, description } = this.props.stream;
    return (
      <div className="container">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { showStream })(StreamShow);
