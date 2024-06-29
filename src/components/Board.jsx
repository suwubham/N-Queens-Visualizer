import "./Board.css";

const Board = ({ board }) => {
  let squareBG = ["lavenderblush", "black"];

  const totalWidth = window.innerWidth > 425 ? 400 : window.innerWidth - 50;
  const squareSizeStyle = {
    width: totalWidth / board.length,
    height: totalWidth / board.length,
  };
  const queenSizeStyle = {
    fontSize: totalWidth / 1.6 / board.length,
  };

  function getColor(square) {
    // queen placed animation
    if (square.isActive && square.hasQueen) return "green";
    // traverse possible queen positions
    else if (square.isActive) return "gray";
    else return squareBG[square.background];
  }

  return (
    <div className="container main-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((col, colIndex) => {
            return (
              <div
                key={colIndex}
                style={{ ...squareSizeStyle, backgroundColor: getColor(col) }}
                className="square"
                id={`square-${rowIndex}-${colIndex}`}
              >
                {col.hasQueen && (
                  <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                    <i
                      style={queenSizeStyle}
                      className="fas fa-chess-queen text-warning"
                    ></i>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Board;
