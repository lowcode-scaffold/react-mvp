import { createModel } from 'hox';
import { useState } from 'react';

export const useStore = createModel(() => {
  const [count, setCount] = useState(0);

  return {
    count,
    setCount,
  };
});
