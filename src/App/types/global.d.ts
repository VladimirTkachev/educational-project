declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classnames: IClassNames;

  export = classnames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  const svg: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;

  export default svg;
}

declare const __IS_DEV__: boolean;
