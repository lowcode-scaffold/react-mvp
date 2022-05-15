import { Button } from 'antd';
import { useUpdateStore } from './store';

export default () => {
  const store = useUpdateStore();
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
