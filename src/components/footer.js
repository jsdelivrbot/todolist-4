import React from 'react';
import Filter from '../containers/filter';
import { VisibilityFilters } from '../actions';

const Footer = () => (
  <div>
    <span>Show</span>
    <Filter filter={VisibilityFilters.SHOW_ALL}>
      All
    </Filter>
    <Filter filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </Filter>
    <Filter filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </Filter>
  </div>
);

export default Footer;