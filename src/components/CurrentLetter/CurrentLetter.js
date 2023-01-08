import React from 'react';

class CurrentLetter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="Current-letter">
                {this.props.uppercaseLetter}{this.props.lowercaseLetter}
            </div>
        )
    }
}

export default CurrentLetter;
