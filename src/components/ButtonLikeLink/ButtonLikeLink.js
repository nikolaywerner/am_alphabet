import React from 'react';

class ButtonLikeLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <button className="Button-like-link" onClick={this.props.action}>{ this.props.label }</button>
        )
    }
}

export default ButtonLikeLink;
