export const environment = {
  production: true
};

// overwrite console output
console.debug = (...any) => {};
console.log = (...any) => {};
console.info = (...any) => {};
console.warn = (...any) => {};
console.error = (...any) => {};
