import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { showStreamList } from "../../actions";
import "../../css/streamList.css";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.showStreamList();
  }

  renderButtons = (authorId, id) => {
    const currentUserId = this.props.currentUserId;
    if (currentUserId !== authorId) {
      return null;
    }
    return (
      <React.Fragment>
        <Link
          to={`/streams/edit/${id}`}
          className="btn btn-outline-primary mr-2 mr-md-3"
        >
          Edit
        </Link>
        <Link
          to={`/streams/delete/${id}`}
          className="btn btn-outline-danger float-right"
        >
          Delete
        </Link>
      </React.Fragment>
    );
  };

  renderCreateBtn = () => {
    if (!this.props.isSignedIn) {
      return null;
    }
    return (
      <Link
        to="/streams/create"
        className="btn btn-primary btn-lg btn-block mb-3"
      >
        Create Stream
      </Link>
    );
  };

  renderedList = (streams) => {
    return streams.map((stream) => {
      return (
        <li className="list-group-item " key={stream.id}>
          <div className="row justify-content-center">
            <div className="main-container col-md-8 col-lg-9 row">
              <div className="col-2 col-md-1  ">
                <Link
                  to={`/streams/show/${stream.id}`}
                  className="show-stream-link"
                >
                  <i
                    className="fas fa-camera fa-2x icon-container"
                    style={{ width: "100%" }}
                  ></i>
                </Link>
              </div>
              <div className="col-10 col-md-11">
                <Link
                  to={`/streams/show/${stream.id}`}
                  className="show-stream-link"
                >
                  <h5 className="mb-1">{stream.title}</h5>
                </Link>
                <Link
                  to={`/streams/show/${stream.id}`}
                  className="show-stream-link"
                >
                  <p className="mb-1">{stream.description}</p>
                </Link>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 btn-container">
              {this.renderButtons(stream.userId, stream.id)}
            </div>
          </div>
        </li>
      );
    });
  };
  render() {
    return (
      <div className="container mt-3 ">
        <h3 className="text-center">Available Streams</h3>
        <ul className="list-group stream-list-container mb-4">
          {this.renderedList(this.props.streams)}
        </ul>
        {this.renderCreateBtn()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.id,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { showStreamList })(StreamList);
