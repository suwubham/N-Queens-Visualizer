# N-Queens Visualizer

## Overview

This project is a React-based visualizer for the N-Queens problem. It allows users to interact with and visualize solutions to the classic N-Queens puzzle, where N chess queens must be placed on an N×N chessboard so that no two queens threaten each other.

## Features

- Interactive chessboard representation
- Adjustable board size (4x4 to 12x12)
- Customizable animation speed
- Solve button to instantly display a solution
- Visualize button to animate the solving process
- Display of the number of possible solutions

## Technologies Used

- React
- JavaScript
- CSS

## How to Use

1. **Clear**: Reset the board to its initial state.
2. **Animation Delay**: Adjust the slider to control the speed of the visualization.
3. **Size of Board**: Use the slider to change the dimensions of the chessboard.
4. **Solve**: Instantly display a random valid solution.
5. **Visualize**: Watch an animated visualization of the solving process.

## Code Structure

The main component `Chess.js` contains the following key functions:

- `resetBoard()`: Initializes the chessboard.
- `solveNQueen()`: Finds and displays a solution.
- `visualize()`: Animates the process of finding a solution.

The solving algorithm is implemented in a separate file `Algorithm.js`.

## Installation and Running

1. Clone the repository
2. Install dependencies
3. Run the application
4. Run the application:
5. Run the application:
