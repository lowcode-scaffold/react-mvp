import { useImmer as useState } from 'use-immer';
import { IFetchUserListResult } from '../api';

export const useModel = () => {
  const [data, setData] = useState<IFetchUserListResult['result']['rows'][0]>(
    {} as any,
  );
  const [tagOptions, settagOptions] = useState<
    { label: string; value: string }[]
  >([]);
  const [loading, setLoading] = useState(false);

  return {
    data,
    setData,
    tagOptions,
    settagOptions,
    loading,
    setLoading,
  };
};

export type Model = ReturnType<typeof useModel>;
