import React from 'react';

const Banner = () => {
  const style = {
    backgroundImage: "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url('../../assets/images/banner2.jpg')"
  };

  return (
    <div className="banner" style={style}>
      <div className="banner-content">
        <h1>Hey guys, <br /> I'm Johnny</h1>
      </div>
    </div>
  );
};

export default Banner;
