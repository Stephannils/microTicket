class DatabaseConnectionError extends Error {
  reason = 'Error connecting to database';
  constructor() {
    super();

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}

export default DatabaseConnectionError;
