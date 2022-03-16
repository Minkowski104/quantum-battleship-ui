import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Board1 extends React.Component{
	render(){
		return(
		<div className="board1">
			<Square/>
			<Square/>
			<Square/>
			<Square/>
		</div>
		);
	}
}
class Square extends React.Component{
	render(){
		return(
		<button className="Square">H</button>
		);
	}
}

class Game extends React.Component{
	render(){
		return(
		<div className="Game">
			<h1 className="game_title">Quantum Battleship</h1>
			<Board1/>
		</div>
		);
	}
}
ReactDOM.render(
  <Game/>,
  document.getElementById('root')
);
