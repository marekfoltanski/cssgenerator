import React from 'react';
import HomeNav from '../HomeNav/HomeNav';
import './HeaderHomeContent.scss';

const HeaderHomeContent = () => (
  <div className="container-fluid homeContent">
    <div className="row">
      <div className="col-md-12">
        <h1><span className="color1">CSS</span> GENERATOR</h1>
        <p>Prosty generator, za pomocą którego dobierzesz odpowiednie wartości dla wybranych właściwości CSS.
         Wygodne dostosowanie parametrów za pomocą suwaków, podlgąd na żywo i błyskawiczne kopiowanie gotowego kodu CSS.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <HomeNav />
      </div>
    </div>
  </div>
)

export default HeaderHomeContent;
