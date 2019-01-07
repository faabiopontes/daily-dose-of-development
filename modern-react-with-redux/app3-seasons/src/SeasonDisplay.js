import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const getMessage = season => season === 'winter' ? 'Burr, it\' is chilly' : 'Let\'s hit the beach';
const getIcon = season => season === 'winter' ? 'snowflake' : 'sun';

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const message = getMessage(season);
  const icon = getIcon(season);

  return (
    <div>
      <i className={`icon ${icon}`} />
      <h1>{message}</h1>
      <i className={`icon ${icon}`} />
    </div>
  )
};

export default SeasonDisplay;