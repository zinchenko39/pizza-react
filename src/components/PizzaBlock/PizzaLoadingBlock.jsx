import React from 'react';
import ContentLoader from 'react-content-loader';

function PizzaLoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="137" cy="114" r="105" />
      <rect x="12" y="235" rx="3" ry="3" width="252" height="22" />
      <rect x="11" y="275" rx="3" ry="3" width="253" height="129" />
      <rect x="12" y="424" rx="3" ry="3" width="74" height="31" />
      <rect x="134" y="422" rx="10" ry="10" width="128" height="34" />
      <rect x="199" y="449" rx="0" ry="0" width="7" height="0" />
      <rect x="189" y="438" rx="0" ry="0" width="14" height="3" />
    </ContentLoader>
  );
}

export default PizzaLoadingBlock;
