import React from 'react';

export class  Square extends React.Component{
    render() {
        return(
            <button className="Square" onClick={() => {alert('click')}}>
                {this.props.value}
            </button>
        )
    }
}