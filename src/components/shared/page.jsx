import React from 'react';

import './page.css';

const Page = ({ children }) => (
  <div className="page">
    <div>{children}</div>
  </div>
);

export default Page;