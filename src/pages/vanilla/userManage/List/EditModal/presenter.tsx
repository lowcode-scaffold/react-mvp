import { message } from 'antd';
import { useEffect } from 'react';
import { useModel } from '@/pages/vanilla/core/useModel';

import { Props } from '.';
import { Model } from './model';
import Service from './service';

const usePresenter = (props: Props) => {
  const model = Model.getSingleton();
  const service = new Service(model);
  const state = useModel(model);

  useEffect(() => {
    if (props.visible) {
      service.init(props.data!);
    }
  }, [props.visible]);

  const handleFormChange = (name: string, value: any) => {
    service.changeForm(name, value);
  };

  const handleSubmit = () => {
    if (props.title === '创建') {
      service.createUser().then(() => {
        message.success('提交成功');
        if (props.onOk) {
          props.onOk();
        }
      });
    } else {
      service.editUser().then(() => {
        message.success('提交成功');
        if (props.onOk) {
          props.onOk();
        }
      });
    }
  };

  return {
    model,
    state,
    service,
    handleFormChange,
    handleSubmit,
  };
};

export default usePresenter;
