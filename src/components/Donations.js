import React from 'react';

export const Donations = () => {
  const links = JSON.parse(process.env.REACT_APP_DONATION_LINKS);
  const renderedLinks = links.map(([name, url]) => (
    <button key={name}>
      <a href={url} target="_blank" rel="noreferrer">
        {name}
      </a>
    </button>
  ));

  return (
    <div className='donations'>
      <h3>🤌Donate ₿itcoin<br></br>🔗Onchain | Lightning⚡</h3>
      {renderedLinks}
    </div>
  );
};
