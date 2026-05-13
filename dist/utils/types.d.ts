type Ok<T> = [null, T];
type Failed = [Error, null];
export type Result<T> = Ok<T> | Failed;
export {};
