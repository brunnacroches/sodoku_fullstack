interface IUpdateBoardBoxPayload {
  position: [number, number, number, number];
  value: number;
}

export interface IUpdateBoardBoxAction {
  type: actionTypes.updateBox;
  payload: IUpdateBoardBoxPayload;
}
export interface ICheckAnswersAction {
  type: actionTypes.checkAnswers;
}

export enum actionTypes {
  updateBox = "updateBox",
  checkAnswers = "checkAnswers",
}

export const updateBoardBox = (
  payload: IUpdateBoardBoxPayload
): IUpdateBoardBoxAction => {
  return {
    type: actionTypes.updateBox,
    payload,
  };
};
export const checkAnswers = (): ICheckAnswersAction => {
  return {
    type: actionTypes.checkAnswers,
  };
};

export type SudokuAction = IUpdateBoardBoxAction | ICheckAnswersAction;
