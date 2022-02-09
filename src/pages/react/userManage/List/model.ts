import { useImmer as useState } from 'use-immer';
import { IFetchUserListResult } from './api';

export const useModel = () => {
  const [filterForm, setFilterForm] = useState({ name: '' });

  const [userList, setUserList] = useState<
    IFetchUserListResult['result']['rows']
  >([]);

  const [pagination, setPagination] = useState({ size: 10, page: 1, total: 0 });

  const [loading, setLoading] = useState(false);

  const [runFetch, setRunFetch] = useState(0);

  const [modalInfo, setModalInfo] = useState<{
    action: 'create' | 'edit';
    title: '创建' | '编辑';
    visible: boolean;
    data?: IFetchUserListResult['result']['rows'][0];
  }>({
    action: 'create',
    title: '创建',
    visible: false,
    data: undefined,
  });

  return {
    filterForm,
    setFilterForm,
    userList,
    setUserList,
    pagination,
    setPagination,
    loading,
    setLoading,
    runFetch,
    setRunFetch,
    modalInfo,
    setModalInfo,
  };
};

export type Model = ReturnType<typeof useModel>;
