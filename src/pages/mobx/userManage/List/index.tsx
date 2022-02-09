import { Table, Pagination, Row, Col, Button, Form, Input, Tag } from 'antd';
import { runInAction } from 'mobx';
import { ColumnsType } from 'antd/lib/table';
import { PlusOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react-lite';
import usePresenter from './presenter';
import styles from './index.module.less';
import EditModal from './EditModal';

function Index() {
  const presenter = usePresenter();
  const { model } = presenter;
  const culumns: ColumnsType = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width: 150,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      width: 150,
    },
    {
      title: '电话',
      dataIndex: 'mobile',
      key: 'mobile',
      width: 150,
    },
    {
      title: 'tags',
      dataIndex: 'tags',
      key: 'tags',
      render(value) {
        return value.map((s: string) => (
          <Tag color="blue" key={s}>
            {s}
          </Tag>
        ));
      },
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
      width: 300,
    },
    {
      title: 'Action',
      key: 'action',
      width: 200,
      render(value, record) {
        return (
          <span>
            <Button
              type="link"
              onClick={() => {
                presenter.handelEdit(record as any);
              }}
            >
              编辑
            </Button>
            <Button
              type="link"
              danger
              onClick={() => {
                presenter.handleDel(record as any);
              }}
            >
              删除
            </Button>
          </span>
        );
      },
    },
  ];
  return (
    <div>
      <div className={styles.index}>
        <div className={styles.filter}>
          <Row gutter={[20, 0]}>
            <Col span={8}>
              <Form.Item label="名称">
                <Input
                  value={model.filterForm.name}
                  placeholder="输入名称搜索"
                  onChange={(e) => {
                    presenter.handleFormChange('name', e.target.value);
                  }}
                  onPressEnter={presenter.handleSearch}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button type="primary" onClick={presenter.handleSearch}>
                查询
              </Button>
              <Button
                style={{ marginLeft: '10px' }}
                onClick={presenter.handleReset}
              >
                重置
              </Button>
              <Button
                style={{ marginLeft: '10px' }}
                type="primary"
                onClick={() => {
                  runInAction(() => {
                    model.modalInfo.visible = true;
                    model.modalInfo.title = '创建';
                    model.modalInfo.data = undefined;
                  });
                }}
                icon={<PlusOutlined />}
              >
                创建
              </Button>
            </Col>
          </Row>
        </div>
        <Table
          columns={culumns as any}
          dataSource={model.userList}
          loading={model.loading}
          pagination={false}
          rowKey="id"
        />
        <Pagination
          current={model.pagination.page}
          total={model.pagination.total}
          showQuickJumper
          hideOnSinglePage
          style={{ marginTop: '20px' }}
          pageSize={model.pagination.size}
          onChange={(page, pageSize) => {
            presenter.handlePageChange(page, pageSize);
          }}
        />
      </div>

      <EditModal
        visible={model.modalInfo.visible}
        data={model.modalInfo.data}
        title={model.modalInfo.title}
        onCancel={() => {
          runInAction(() => {
            model.modalInfo.visible = false;
          });
        }}
        onOk={() => {
          runInAction(() => {
            model.modalInfo.visible = false;
          });
          presenter.refresh();
        }}
      />
    </div>
  );
}
export default observer(Index);
