import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      [key: string]: string;
    };
    fontSizes: {
      [key: string]: string;
    };
    fontWeights: {
      [key: string]: number;
    };
  }
}
