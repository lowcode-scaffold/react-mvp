import { useEffect } from 'react';
import { useSyncExternalStore } from 'use-sync-external-store/shim';
import { Model } from './model';

export function useModel<T>(model: Model<T>) {
  const state = useSyncExternalStore(
    (...args) => {
      const unsubscribe = model.subscribe(...args);
      return unsubscribe;
    },
    () => model.state,
  );

  useEffect(() => {
    // const m = model;
    // m.__init();
    // return () => {
    //   m?.__destroy();
    // };
  }, []);

  return {
    state,
  };
}