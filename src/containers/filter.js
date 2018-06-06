import React, { Component } from 'react';
import { connect } from 'react-redux';
import { visibilityFilterSet } from '../actions';

class Filter extends Component {
  onClick(){
    this.props.visibilityFilterSet(this.props.filter);
  }

  render() {
    const { children, active} = this.props;
    return (
      <button
        disabled={active}
        style={{marginLeft: '4px'}}
        onClick={this.onClick.bind(this)}>
          {children}
      </button>
    );
  }
}

function mapStateToProps (state, ownProps) {
  return {
    active: state.visibilityFilter === ownProps.filter
  };
}

export default connect(mapStateToProps, { visibilityFilterSet })(Filter);