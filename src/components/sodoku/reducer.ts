import { current, produce } from "immer";
import _ from "lodash";

import { actionTypes, SudokuAction } from "./actions";
import { emptyBoard } from "./boards";
import { SudokuBoard, SudokuBox } from "./sudoku";

export interface SudokuState {
  error?: string;
  board: SudokuBoard<SudokuBox>;
  completed?: string;
}
export const initialState: SudokuState = { board: emptyBoard };

export const reducer = produce((draft: SudokuState, action: SudokuAction) => {
  switch (action.type) {
    case actionTypes.updateBox: {
      const {
        payload: { position, value },
      } = action;
      const box =
        draft.board[position[0]][position[1]][position[2]][position[3]];

      if (box.type === "to-guess") {
        if (value > -1 && value < 10) {
          box.value = value;
        }
      }
      return;
    }

    case actionTypes.checkAnswers: {
      draft.error = "";
      draft.completed = "";
      draft.board.forEach((blocks) => {
        blocks.forEach((block) => {
          console.log({ block: current(block) });

          const blockValues = _.chain(block)
            .map((boxes) => boxes.map((box) => box.value))
            .flatten()
            .filter((value) => !!value)
            .value();

          const mappedColumnsAndRows = _.chain(block)
            .map((boxes, row) =>
              boxes.map((box, column) => ({
                ...box,
                column: `${column}-${box.value}`,
                row: `${row}-${box.value}`,
              }))
            )
            .flatten()
            .filter((box) => !!box.value)
            .value();

          const hasBlockDuplicate =
            _.uniq(blockValues).length !== blockValues.length;

          const hasColumnDuplicate =
            _.uniqBy(mappedColumnsAndRows, "column").length !==
            mappedColumnsAndRows.length;
          const hasRowDuplicate =
            _.uniqBy(mappedColumnsAndRows, "row").length !==
            mappedColumnsAndRows.length;

          console.log({
            hasBlockDuplicate,
            hasColumnDuplicate,
            hasRowDuplicate,
          });

          if (hasRowDuplicate) {
            draft.error = "a row contains duplicate numbers";

            return;
          }

          if (hasColumnDuplicate) {
            draft.error = "a column contains duplicate numbers";

            return;
          }
          if (hasBlockDuplicate) {
            draft.error =
              "one of the nine 3x3 subgrids that compose the grid contains duplicate numbers";

            return;
          }
        });

        if (draft.error) {
          return;
        }

        const totalBox = _.chain(draft.board)
          .map((blocks) =>
            blocks.map((block) =>
              block.map((boxes) => boxes.map((box) => box.value))
            )
          )
          .flatten()
          .flatten()
          .flatten()
          .filter((value) => !!value)
          .value();

        if (totalBox.length === 81) {
          draft.completed = "Completed!";
        }
      });
      return;
    }

    default:
      return draft;
  }
});
