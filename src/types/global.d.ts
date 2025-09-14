/// <reference types="react" />
/// <reference types="react-dom" />

// Ensure JSX namespace is available for TS when next-env.d.ts is not present in the editor context.
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
