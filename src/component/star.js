import React from 'react';

class Star extends React.Component {
    render() {
        return (
            <img
                alt=''
                src={this.props.on ? process.env.PUBLIC_URL + '/star_on.png' : process.env.PUBLIC_URL + '/star_off.png'}
                onClick={this.props.onClick}
            />
        );
    }
}

export default Star;