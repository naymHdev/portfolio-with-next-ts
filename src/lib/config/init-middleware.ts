/* eslint-disable @typescript-eslint/no-explicit-any */

export const initMiddleware = (middleware: any) => {
  return (req: any, res: any) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result: any) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
};
