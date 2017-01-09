import 'glamor/reset';
import React, { PropTypes } from 'react';
import Head from './Head';

const MainLayout = ({ children }) => (
  <div>
    <Head />
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default MainLayout;
