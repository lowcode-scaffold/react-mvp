import { Col, Row } from 'antd';
import A from './A';
import B from './B';
import View from './View';

export default () => {
  console.log('rerender');
  return (
    <div>
      <Row>
        <Col span={8} />
        <Col span={8}>
          <View />
        </Col>
        <Col span={8} />
      </Row>
      <Row>
        <Col span={8} />
        <Col span={4}>
          <A />
        </Col>
        <Col span={4}>
          <B />
        </Col>
        <Col span={8} />
      </Row>
    </div>
  );
};
