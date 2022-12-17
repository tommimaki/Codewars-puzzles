// Write a function that returns whether it is running in strict mode.

function isInStrictMode() {
    return !this
  }

  // works because The fact that this inside a function called in the global context will not point to the global object can be used to detect strict mode: