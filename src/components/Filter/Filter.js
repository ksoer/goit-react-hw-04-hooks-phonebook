

import { Component } from "react";
import { PropTypes } from "prop-types";

class Filter extends Component {
  state = {
    filter: "",
  };

  handleInputChange = (event) => {
    this.setState({
      filter: event.target.value,
    });
  };

  filterInputHandler = (e) => {
    const { onFilter } = this.props;
    this.handleInputChange(e);
    onFilter(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="search contact"
          name="filter"
          value={this.state.filter}
          onChange={this.filterInputHandler}
        />
      </div>
    );
  }
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;