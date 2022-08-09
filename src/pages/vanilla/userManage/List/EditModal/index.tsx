import { Modal, Form, Input, Select } from 'antd';
import React from 'react';
import { IState } from './model';
import usePresenter from './presenter';

export type Props = {
  visible: boolean;
  title: '创建' | '编辑';
  onCancel: () => void;
  onOk: () => void;
  data?: IState['data'];
};

const EditModal: React.FC<Props> = (props) => {
  const presenter = usePresenter(props);
  const { model, state } = presenter;
  return (
    <Modal
      visible={props.visible}
      title={props.title}
      okText="确定"
      cancelText="取消"
      onCancel={() => {
        props.onCancel();
      }}
      onOk={() => {
        presenter.handleSubmit();
      }}
      okButtonProps={{
        loading: state.loading,
      }}
    >
      <div>
        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
          <Form.Item label="姓名" required>
            <Input
              value={state.data?.name}
              autoComplete="off"
              onChange={(e) => {
                const { value } = e.target;
                presenter.handleFormChange('name', value);
              }}
            />
          </Form.Item>
          <Form.Item label="年龄" required>
            <Input
              value={state.data?.age}
              autoComplete="off"
              onChange={(e) => {
                const { value } = e.target;
                presenter.handleFormChange('age', value);
              }}
            />
          </Form.Item>
          <Form.Item label="电话" required>
            <Input
              value={state.data?.mobile}
              autoComplete="off"
              onChange={(e) => {
                const { value } = e.target;
                presenter.handleFormChange('mobile', value);
              }}
            />
          </Form.Item>
          <Form.Item label="tags">
            <Select
              mode="tags"
              value={state.data?.tags}
              options={state.tagOptions}
              onChange={(value) => {
                presenter.handleFormChange('tags', value);
              }}
            />
          </Form.Item>
          <Form.Item label="住址">
            <Input
              value={state.data?.address}
              autoComplete="off"
              onChange={(e) => {
                const { value } = e.target;
                presenter.handleFormChange('address', value);
              }}
            />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default EditModal;
