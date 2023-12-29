import React, { useState } from 'react';

import logo from '../../icons/logo.png';

import './header.css';

const Header = (props) => {
  const { commit } = props;
  const [searchQuery, setSearchQuery] = useState('');

  const onKeyDown = e => {
    if (e.key === 'Enter') {
      commit(searchQuery)
    }
  }

  const clearSearch = () => {
    setSearchQuery('');
    commit('');
  }

  return (
    <>
      <div className="header">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-search">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onKeyDown={onKeyDown}
          />
          {searchQuery && (
            <button
              type="button"
              className="clear"
              onClick={clearSearch}
            />
          )}        
        </div>
      </div>
    </>
  );
}

export default Header;