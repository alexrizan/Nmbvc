import { useEffect } from 'react';

export const useDebounceEffect = (func: any, deps: any, delay: number) => {
  useEffect(() => {
    const timer = setTimeout(() => func(), delay);
    return () => clearTimeout(timer);
  }, [deps, delay]);
};
