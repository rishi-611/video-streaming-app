import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="modal" role="dialog" onClick={props.onDismiss}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
            <button type="button" className="close" onClick={props.onDismiss}>
              &times;
            </button>
          </div>
          <div className="modal-body">{props.content}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-default"
              onClick={props.onDismiss}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger ml-3"
              onClick={props.handleActionClick}
            >
              {props.action}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#delete-modal")
  );
};

export default Modal;
