import React from 'react';

const banner = `
    ____  ____  ___    __ __ ___   _____ __  __
   / __ \\/ __ \\/   |  / //_//   | / ___// / / /
  / /_/ / /_/ / /| | / ,<  / /| | \\__ \\/ /_/ / 
 / ____/ _, _/ ___ |/ /| |/ ___ |___/ / __  /  
/_/   /_/ |_/_/  |_/_/ |_/_/  |_/____/_/ /_/   
`;

const AsciiBanner = () => {
  return (
    <pre 
      className="text-green" 
      style={{ 
        margin: '1rem 0', 
        lineHeight: '1.2', 
        fontWeight: 'bold', 
        textShadow: '0 0 8px var(--primary-color)',
        overflowX: 'auto'
      }}
    >
      {banner}
    </pre>
  );
};

export default AsciiBanner;
