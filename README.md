# Next.js 15 Unhandled Rendering Error

This repository demonstrates a common issue in Next.js 15 applications where an error thrown during the rendering of a component is not properly handled, leading to an unexpected blank page or a 500 server error. The issue arises because the error isn't caught by Next.js's built-in error boundaries.

## Bug

The `pages/about.js` file throws an error during rendering. This causes Next.js to crash without providing a user-friendly error message.

## Solution

The provided solution utilizes a custom error boundary component to catch rendering errors gracefully and display a user-friendly message. This makes the application more resilient to unexpected runtime errors.  The solution demonstrates error boundary implementation to handle component-level errors without affecting other parts of the application.