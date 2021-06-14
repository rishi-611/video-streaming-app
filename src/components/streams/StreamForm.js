import React from "react";

import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError({ touched, error }) {
    if (touched && error) {
      return (
        <div
          className="invalid-feedback row "
          style={{ display: "initial", padding: "15px" }}
        >
          {error}
        </div>
      );
    }
    return null;
  }

  renderInput = ({ input, label, meta }) => {
    const inputClass =
      meta.touched && meta.error ? "form-control is-invalid" : "form-control";
    return (
      <div className="form-group row mb-3">
        <label
          htmlFor={input.name}
          className="col-md-4 col-lg-3  col-form-label"
        >
          {label}
        </label>
        <div className="col-md-8 col-lg-9">
          <input
            id={input.name}
            {...input}
            className={inputClass}
            autoComplete="off"
          />
          <React.Fragment>{this.renderError(meta)}</React.Fragment>
        </div>
      </div>
    );
  };

  onSubmit = (values) => {
    this.props.onSubmit(values);
  };

  render() {
    return (
      <form
        className="container mt-4 "
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <div className="mb-3">
          <h3 className="text-center">{this.props.header}</h3>
        </div>
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1.5rem",
          }}
        >
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

const validate = function (formValues) {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Title field must not be empty";
  }
  if (!formValues.description) {
    errors.description = "Description field must not be empty";
  }
  return errors;
};

export default reduxForm({ form: "streamForm", validate })(StreamForm);
