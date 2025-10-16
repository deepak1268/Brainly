// Extend Express Request interface globally
declare namespace Express {
  export interface Request {
    userId?: string;
  }
}