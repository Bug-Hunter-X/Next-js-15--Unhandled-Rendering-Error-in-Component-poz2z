```javascript
// components/ErrorBoundary.js
import { useState, useCallback } from 'react';

function ErrorBoundary({ children }) {
  const [error, setError] = useState(null);

  const onError = useCallback((err) => {
    setError(err);
  }, []);

  if (error) {
    return (
      <div>
        <h1>Something went wrong!</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  return children;
}

export default ErrorBoundary;
```
```javascript
// pages/about.js
import ErrorBoundary from '../components/ErrorBoundary';

export default function About() {
  // This will cause an error if there's a problem during rendering
  throw new Error('Something went wrong!');
}

function WrappedAbout() {
  return (
    <ErrorBoundary>
      <About/>
    </ErrorBoundary>
  );
}
export default WrappedAbout;
```