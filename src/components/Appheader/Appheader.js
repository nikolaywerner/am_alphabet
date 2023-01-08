import React from 'react';
import Score from '../Score/Score';


let scoreStyles = {color: 'black'}
let score = 0;
if (localStorage.getItem('score')) score = localStorage.getItem('score');

if (+localStorage.getItem('score') > 0) scoreStyles = {color: 'green'};
if (+localStorage.getItem('score') < 0) scoreStyles = {color: 'red'};

class Appheader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <header className="App-header">
                <div className="App-header__app-name">Армянский алфавит</div>
                <div className="App-header__score">
                    <Score score={score}  styles={ scoreStyles } />
                </div>
            </header>
        )
    }
}

export default Appheader;
