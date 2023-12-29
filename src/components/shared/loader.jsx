import React from 'react';

import { InfinitySpin } from 'react-loader-spinner'

import './loader.css';

const Loader = () => (
  <div className="loader">
    <InfinitySpin
      visible={true}
      width="200"
      color="#EEE"
      ariaLabel="infinity-spin-loading"
    />
  </div>
);

export default Loader;