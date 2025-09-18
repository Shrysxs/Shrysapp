// Reference type definitions for Next.js
/// <reference types="next" />
/// <reference types="next/navigation" />

// Type definitions for React
import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }

  // Add global types here if needed
  interface Window {
    // Add any global window properties here
  }
}

// Ensure this file is treated as a module
export {};
