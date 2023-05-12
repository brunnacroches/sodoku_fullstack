

/* ARQUIVO DE EXPORTAÇÃO QUE FACILIDA A IMPORTAÇÃO
DE MÚLTIPLHOS ARQUIVOS DO DIRETÓRIO SODOKU EM 
OUTRO LUGARES DO CÓDIGO */


// Este comando reexporta o export default do módulo "./sudoku".
// É equivalente a importar o default do módulo "./sudoku" e, em seguida, exportá-lo novamente.
// Dessa forma, outros módulos que importam este módulo também receberão o export default de "./sudoku".
export { default } from "./sudoku";
