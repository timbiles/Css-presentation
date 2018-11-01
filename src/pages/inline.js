import React, { Component } from 'react';

const text = {
        color: 'blue'
}

class inline extends Component {
    render() {
        return (
            <>
                <h1 style={{color: 'green', fontSize: '4em'}}>CssInJs</h1>
                <p style={text}>Test</p>
            </>
        );
    }
}

export default inline;