import React from 'react';
import CurrentLetter from '../CurrentLetter/CurrentLetter';
import VariantButton from '../VariantButton/VariantButton';
import ButtonLikeLink from '../ButtonLikeLink/ButtonLikeLink';
import letters from '../../data/letters';

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}
let letterNumber = getRandomInt(letters.length - 1);

const uppercaseLetter = letters[letterNumber].uppercase;
const lowercaseLetter = letters[letterNumber].lowercase;
const pronunciationLetter = letters[letterNumber].ruPropunciation;
const letterName = letters[letterNumber].name;

const lettersForVariants = letters;

const pronVariants = [];
const namesVariants = [];

let rightVariant = getRandomInt(4);

pronVariants[rightVariant] = pronunciationLetter;
namesVariants[rightVariant] = letterName;
lettersForVariants.splice(letterNumber, 1);

for (let i = 0; i < 4; i++) {
    if (i !== rightVariant) {
        const n = getRandomInt(lettersForVariants.length - 1);
        pronVariants[i] = lettersForVariants[n].ruPropunciation;
        namesVariants[i] = lettersForVariants[n].name;
        lettersForVariants.splice(n, 1);
    }
}

class Appmain extends React.Component {
    constructor(props) {
        super(props);
    }

    reload(e) {
        window.location.reload();
    }

    ResetScore(e) {
        localStorage.setItem('score', 0);
        window.location.reload();
    }

    render() {
        return(
            <main className="App-main">
                <div className="App-main__invisible-top-row"></div>
                <div className="App-main__root-elements">
                    <div className="App-main__current-letter">
                        <CurrentLetter uppercaseLetter={uppercaseLetter}
                                       lowercaseLetter={lowercaseLetter}
                                       pronunciationLetter={pronunciationLetter}/>
                    </div>
                    <div className="App-main__variants">
                        <VariantButton pronunciation={pronVariants[0]}
                                       letterName={namesVariants[0]}
                                       rightVariant={pronunciationLetter} />
                        <VariantButton pronunciation={pronVariants[1]}
                                       letterName={namesVariants[1]}
                                       rightVariant={pronunciationLetter} />
                        <VariantButton pronunciation={pronVariants[2]}
                                       letterName={namesVariants[2]}
                                       rightVariant={pronunciationLetter} />
                        <VariantButton pronunciation={pronVariants[3]}
                                       letterName={namesVariants[3]}
                                       rightVariant={pronunciationLetter} />
                    </div>
                    <div className="App-main__reload">
                        <ButtonLikeLink action={this.reload} label="Продолжить" />
                    </div>
                </div>
                <div className="App-main__reset">
                    <ButtonLikeLink action={this.ResetScore} label="Сбросить очки" />
                </div>
            </main>
        )
    }
}

export default Appmain;
