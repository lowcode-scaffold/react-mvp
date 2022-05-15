import { Button } from 'antd';
import { useStore } from './store';

export default () => {
  const store = useStore();
  console.log('B rerender');
  return (
    <div style={{ textAlign: 'left' }}>
      <Button
        onClick={() => {
          store.setCount((s) => s - 1);
        }}
      >
        -
      </Button>
    </div>
  );
};
