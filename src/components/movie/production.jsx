import React from 'react';

import './production.css';

const ProductionCompanies = (props) => {
  const { companies, configuration } = props;

  const getCompanyLogo = (company) => {
    if (company.logo_path) {
      return `${configuration.images.base_url}${configuration.images.logo_sizes[1]}${company.logo_path}`;
    }
    return 'https://via.placeholder.com/150x50?text=No+logo';
  }

  return (
    <div className="production-companies">
      <h2>
        Production Companies
      </h2>
      <div className="companies">
        {companies.map((company) => (
          <div className="company" key={company.id}>
            <img
              src={getCompanyLogo(company)}
              alt={company.name}
            />
            <div className="name">
              {company.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductionCompanies;