/**
 *
 * @param fn
 * @returns {(function(*): void)|*}
 */
export const preventDefault = (fn) => (event) => {
  event.preventDefault();
  fn(event);
};

/**
 *
 * @param fn
 * @returns {function(*): *}
 */
export const changedInput = (fn) => (event) => fn(event.target.value);