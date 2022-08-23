import { useSyncExternalStore } from 'use-sync-external-store/shim';
import { MVPModel } from './model';

export function useModel<T>(model: MVPModel<T>) {
  const state = useSyncExternalStore(
    (...args) => {
      const unsubscribe = model.subscribe(...args);
      return unsubscribe;
    },
    () => model.state,
  );

  return state;
}
