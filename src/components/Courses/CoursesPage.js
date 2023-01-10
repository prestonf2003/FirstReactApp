import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
class CoursePage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.course.map((courses) => (
          <div key={courses.title}>{courses.title}</div>
        ))}
      </form>
    );
  }
}
CoursePage.propTypes = {
  course: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};
function mapStateToProps(state) {
  return {
    course: state.course,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
