import React from "react";
import { connect } from "react-redux";
import { showStreamList } from "../../actions";
import "../../css/streamList.css";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.showStreamList();
  }

  renderedList = (streams) => {
    return streams.map((stream) => {
      return (
        <li className="list-group-item " key={stream.id}>
          <div className="row">
            <div className="col-2 col-md-1 ">
              <i
                className="fas fa-camera fa-2x icon-container"
                style={{ width: "100%" }}
              ></i>
            </div>
            <div className="col-10 col-md-11">
              <h5 className="mb-1">{stream.title}</h5>
              <p className="mb-1">{stream.description}</p>
            </div>
          </div>
        </li>
      );
    });
  };
  render() {
    return (
      <div className="container mt-3">
        <h3 className="text-center">Available Streams</h3>
        <ul className="list-group">{this.renderedList(this.props.streams)}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
  };
};

export default connect(mapStateToProps, { showStreamList })(StreamList);
