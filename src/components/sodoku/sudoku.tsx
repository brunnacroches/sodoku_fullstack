//** External Imports */
import React from "react";
import { checkAnswers, updateBoardBox } from "./actions";

//** Local Imports */
import "./sudoku.css";
import { useSudoku } from "./use-sudoku";

//** Typings */

type SudokuBoxType = "starting" | "to-guess";

export type SudokuBox = { value: number; type: SudokuBoxType };
export type SudokuStartingBox = 0 | SudokuBox;

export type SudokuBlock<Box> = [
  [Box, Box, Box],
  [Box, Box, Box],
  [Box, Box, Box]
];
export type SudokuBoard<Box> = [
  [SudokuBlock<Box>, SudokuBlock<Box>, SudokuBlock<Box>],
  [SudokuBlock<Box>, SudokuBlock<Box>, SudokuBlock<Box>],
  [SudokuBlock<Box>, SudokuBlock<Box>, SudokuBlock<Box>]
];

export interface SudokuProps {
  startingBoard?: SudokuBoard<SudokuStartingBox>;
}

//** Default Props */
const defaultProps: Partial<SudokuProps> = {};

/**
 * Component for rendering a sudoku game
 *
 * @component
 */
const Sudoku: React.FC<SudokuProps> = (props) => {
  const { board, status, dispatch } = useSudoku(props);

  return (
    <div className="root">
      <div className="info">
        <div>
          <h3>Status</h3> <p>{status}</p>{" "}
        </div>
        <button
          className="check-answers"
          onClick={() => dispatch(checkAnswers())}
        >
          check answers
        </button>
      </div>
      <div className="board">
        {board.map((blocks, blocksPosition) => {
          return (
            <div className="blocks" key={`blocks-${blocksPosition}`}>
              {blocks.map((block, blockPosition) => {
                return (
                  <div className="block" key={`block-${blockPosition}`}>
                    {block.map((boxes, boxesPosition) => {
                      return (
                        <div className="boxes" key={`boxes-${boxesPosition}`}>
                          {boxes.map((box, boxPosition) => (
                            <div className="box" key={`box-${boxPosition}`}>
                              <input
                                value={box.value || ""}
                                className={box.type}
                                onChange={(e) => {
                                  const value = isNaN(e.target.valueAsNumber)
                                    ? 0
                                    : e.target.valueAsNumber;

                                  dispatch(
                                    updateBoardBox({
                                      value,
                                      position: [
                                        blocksPosition,
                                        blockPosition,
                                        boxesPosition,
                                        boxPosition,
                                      ],
                                    })
                                  );
                                }}
                                maxLength={1}
                                type="number"
                              />
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

Sudoku.defaultProps = defaultProps;

export default Sudoku;
