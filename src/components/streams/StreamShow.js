import React from "react";
import { connect } from "react-redux";
import { showStream } from "../../actions";
import flv from "flv.js";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.showStream(id);
    this.createVidPlayer();
  }

  componentDidUpdate() {
    this.createVidPlayer();
  }

  componentWillUnmount() {
    this.vidPlayer.destroy();
  }

  createVidPlayer() {
    if (!this.props.stream || this.vidPlayer) {
      return;
    }
    const { id } = this.props.match.params;
    this.vidPlayer = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.vidPlayer.attachMediaElement(this.videoRef.current);
    this.vidPlayer.load();
  }

  render() {
    if (!this.props.stream) {
      return <div className="container">...Loading</div>;
    }
    const { title, description } = this.props.stream;
    return (
      <div className="container">
        <video
          id="videoElement"
          ref={this.videoRef}
          style={{ width: "100%" }}
          controls
          className="mt-3"
        />
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
