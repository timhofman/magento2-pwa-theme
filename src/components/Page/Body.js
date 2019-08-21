import React from 'react';

class Body extends React.Component {
    render() {
        return (
            <div id="main-container">
                {this.props.children}
            </div>
        )
    }
}

export default Body;