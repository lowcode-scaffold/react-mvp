import { Table, Pagination, Row, Col, Button, Form, Input, Tag } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { PlusOutlined } from '@ant-design/icons';
import usePresenter from './presenter';
import styles from './index.module.less';
// import EditModal from './EditModal';

function Index() {
  const presenter = usePresenter();
  const { model, state } = presenter;
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
                  value={state.filterForm.name}
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
                  model.setState((s) => {
                    s.modalInfo.visible = true;
                    s.modalInfo.title = '创建';
                    s.modalInfo.data = undefined;
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
          dataSource={state.userList}
          loading={state.loading}
          pagination={false}
          rowKey="id"
        />
        <Pagination
          current={state.pagination.page}
          total={state.pagination.total}
          showQuickJumper
          hideOnSinglePage
          style={{ marginTop: '20px' }}
          pageSize={state.pagination.size}
          onChange={(page, pageSize) => {
            presenter.handlePageChange(page, pageSize);
          }}
        />
      </div>

      {/* <EditModal
        visible={model.modalInfo.visible}
        data={model.modalInfo.data}
        title={model.modalInfo.title}
        onCancel={() => {
          model.setModalInfo((s) => {
            s.visible = false;
          });
        }}
        onOk={() => {
          model.setModalInfo((s) => {
            s.visible = false;
          });
          presenter.refresh();
        }}
      /> */}
    </div>
  );
}
export default Index;
