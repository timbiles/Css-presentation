import React, { Component } from 'react';

const text = {
  color: 'blue'
};

const inline = () => {
  return (
    <>
      <h1 style={{ color: 'green', fontSize: '4em' }}>Inline Styles</h1>
      <p style={text}>Plz don't do it</p>
    </>
  );
};

export default inline;
