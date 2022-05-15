import { atom, useAtomValue, useSetAtom } from 'jotai';

const countAtom = atom(0);

export const useValueStore = () => {
  const count = useAtomValue(countAtom);
  return {
    count,
  };
};

export const useUpdateStore = () => {
  const setCount = useSetAtom(countAtom);
  return {
    setCount,
  };
};
