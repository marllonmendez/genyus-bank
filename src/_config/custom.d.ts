declare module '*.svg' {
  const content: string;
  export default content;
}

declare module "*.png" {
  const value: any;
  export = value;
}

// A custom archive to accept svg and png images with typescript 