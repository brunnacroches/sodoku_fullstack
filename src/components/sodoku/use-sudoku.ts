
/* HOOK PERSONALIZADO PARA LIDAR COM A LÓGICA DO SODOKU */

import React from "react";
import { initialState, reducer } from "./reducer";
import { SudokuBoard, SudokuBox, SudokuProps } from "./sudoku";

/* Hook personalizado para lidar com a lógica do Sudoku */

export const useSudoku = (props: SudokuProps) => {
  const { startingBoard } = props; // Desestrutura a propriedade startingBoard de props

  // Usa o hook useReducer do React para gerenciar o estado do jogo de Sudoku.
  // O terceiro argumento para useReducer é uma função de inicialização que permite calcular o estado inicial.
  const [state, dispatch] = React.useReducer(reducer, initialState, (state) => {
    // Se um tabuleiro inicial foi passado como prop, o estado inicial é calculado com base nele
    if (startingBoard) {
      const board = startingBoard.map((board) =>
        board.map((block) =>
          block.map((row) =>
            row.map((box) => {
              // Se o valor da caixa for 0 (ou seja, a caixa está vazia), ela é considerada uma caixa "to-guess"
              if (!box) {
                const guessBox: SudokuBox = { value: 0, type: "to-guess" };
                return guessBox;
              }

              // Se a caixa já tiver um valor, ela é retornada como está
              return box;
            })
          )
        )
      ) as SudokuBoard<SudokuBox>;

      // Retorna um novo estado com o tabuleiro calculado
      return { ...state, board };
    }

    // Se não houver tabuleiro inicial, o estado inicial é retornado como está
    return state;
  });

  // Retorna um objeto com o tabuleiro atual, o status do jogo e a função dispatch para atualizar o estado
  return {
    board: state.board,
    status: state.error || state.completed || " - ", // O status é error, completed ou " - ", dependendo do estado atual
    dispatch,
  };
};
