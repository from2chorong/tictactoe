import Square from "./Square"
import "./Board.css"

const Board = ({squares, onClick}) => {

	const renderSquare = (i) => {
		return <Square value={squares[i]}
			onClick={() => onClick(i)} />
	}

	return (
		<div>
			<div className='board-grid'>
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
		</div>
	)
}

export default Board