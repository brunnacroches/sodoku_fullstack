
 /* LOGICA RELACIONADA A GERAÇÃO E MANIPULAÇÃO DE TABULEIROS
 DO SODOKU */

 // Importando as classes ou tipos necessários do arquivo "sudoku.ts"
 import { SudokuBoard, SudokuBox, SudokuStartingBox } from "./sudoku";

 // Definindo uma constante chamada "startingBoard" que representa um tabuleiro de Sudoku com alguns números já preenchidos
// O tabuleiro é uma matriz 3D, representando 9 quadrantes de 3x3, cada um contendo 9 casas
// Os números preenchidos são representados como objetos com um valor e um tipo "starting"
// Os espaços vazios são representados por 0
export const startingBoard: SudokuBoard<SudokuStartingBox> = [
  [
    [
      [0, 0, 0],
      [{ value: 6, type: "starting" }, { value: 8, type: "starting" }, 0],
      [{ value: 1, type: "starting" }, { value: 9, type: "starting" }, 0],
    ],
    [
      [{ value: 2, type: "starting" }, { value: 6, type: "starting" }, 0],
      [0, { value: 7, type: "starting" }, 0],
      [0, 0, { value: 4, type: "starting" }],
    ],
    [
      [{ value: 7, type: "starting" }, { value: 1, type: "starting" }, 0],
      [0, { value: 9, type: "starting" }, 0],
      [{ value: 5, type: "starting" }, 0, 0],
    ],
  ],
  [
    [
      [{ value: 8, type: "starting" }, { value: 2, type: "starting" }, 0],
      [0, 0, { value: 4, type: "starting" }],
      [0, { value: 5, type: "starting" }, 0],
    ],
    [
      [{ value: 1, type: "starting" }, 0, 0],
      [{ value: 6, type: "starting" }, 0, { value: 2, type: "starting" }],
      [0, 0, { value: 3, type: "starting" }],
    ],
    [
      [0, { value: 4, type: "starting" }, 0],
      [{ value: 9, type: "starting" }, 0, 0],
      [0, { value: 2, type: "starting" }, { value: 8, type: "starting" }],
    ],
  ],
  [
    [
      [0, 0, { value: 9, type: "starting" }],
      [0, { value: 4, type: "starting" }, 0],
      [{ value: 7, type: "starting" }, 0, { value: 3, type: "starting" }],
    ],
    [
      [{ value: 3, type: "starting" }, 0, 0],
      [0, { value: 5, type: "starting" }, 0],
      [0, { value: 1, type: "starting" }, { value: 8, type: "starting" }],
    ],
    [
      [0, { value: 7, type: "starting" }, { value: 4, type: "starting" }],
      [0, { value: 3, type: "starting" }, { value: 6, type: "starting" }],
      [0, 0, 0],
    ],
  ],
];

// Definindo uma constante chamada "emptyBoard" que representa um tabuleiro de Sudoku vazio
// O tabuleiro é uma matriz 3D, representando 9 quadrantes de 3x3, cada um contendo 9 casas
// Todos os campos são vazios e são representados como objetos com valor 0 e tipo "to-guess", indicando que o jogador deve preencher esses campos
export const emptyBoard: SudokuBoard<SudokuBox> = [
  [
    [
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
    ],
    [
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
    ],
    [
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
    ],
  ],
  [
    [
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
    ],
    [
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
    ],
    [
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
    ],
  ],
  [
    [
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
    ],
    [
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
    ],
    [
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
    ],
  ],
];
