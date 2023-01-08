import React from 'react';

class Score extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="Score">
                Очков:&nbsp;
                <span className="Score__value" style={this.props.styles}>
                    Очков: {this.props.score}
                </span>
            </div>
        )
    }
}

export default Score;
