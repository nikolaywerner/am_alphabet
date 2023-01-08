import React from 'react';

class VariantButton extends React.Component {
    constructor(props) {
        super(props);
    }

    checkValue(e) {
        const el = e.currentTarget;
        let tryNum = 0;
        let variant = el.getAttribute('data-letter');
        if (variant === el.getAttribute('data-right-variant')) {
            el.style.borderBottomColor = 'green';
            if (tryNum === 0) {
                localStorage.setItem('score', +localStorage.getItem('score') + 1);
                tryNum = 1;
            }
        } else {
            el.style.borderBottomColor = 'red';
            if (tryNum === 0) {
                localStorage.setItem('score', +localStorage.getItem('score') - 1);
                tryNum = 1;
            }
        }
    }

    render() {
        return(
            <button className="Variant-button"
                    data-letter={ this.props.pronunciation }
                    data-right-variant={ this.props.rightVariant }
                    onClick={ this.checkValue }>
                <span className="Variant-button__pronunciation">{ this.props.pronunciation }</span>
                <br/>
                <span className="Variant-button__letter-name">{ this.props.letterName }</span>
            </button>
        )
    }
}

export default VariantButton;
