import { Button } from 'antd';
import { useUpdateStore } from './store';

export default () => {
  const store = useUpdateStore();
  console.log('A rerender');
  return (
    <div style={{ textAlign: 'right' }}>
      <Button
        onClick={() => {
          store.setCount((s) => s + 1);
        }}
      >
        +
      </Button>
    </div>
  );
};
