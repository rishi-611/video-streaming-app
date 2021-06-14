import React from "react";
import ReactDOM from "react-dom";
import "../../css/deleteModal.css";
import history from "../../history";

const DeleteModal = (props) => {
  return ReactDOM.createPortal(
    <div id="myModal" className="modal" role="dialog" onClick={()=>history.push('/')} >
      <div className="modal-dialog" onClick={(e)=>e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Delete Stream</h4>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div className="modal-body">
            <p>
              Are you sure that you want to delete this stream?
              <br /> This action can not be undone
            </p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">
              Close
            </button>
            <button type="button" className="btn btn-danger ml-3">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#delete-modal")
  );
};

export default DeleteModal;
