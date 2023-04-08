// js library라는 가정하에 작성 , tsconfig에서 compilerOptions안의  allowJS : true

// JSDoc -> js파일에서 ts문법없이 전달가능
// @ts-check
/**
 * initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
  return true;
}

/**
 *exit program
 * @param {number} code
 * @returns number
 */

export function exit(code) {
  return code + 1;
}
