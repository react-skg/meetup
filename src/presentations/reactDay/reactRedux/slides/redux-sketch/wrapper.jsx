import React from 'react';

const Wrapper = ({ children }) => (
  <div className="svg-wrapper">
    <svg viewBox="0 0 752 828" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <desc>Created with Sketch.</desc>
      <defs />
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Desktop-HD-Copy" transform="translate(-334.000000, 0.000000)">
          {children}
        </g>
      </g>
    </svg>
  </div>
);

export default Wrapper;
