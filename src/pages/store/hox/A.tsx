import { Button } from 'antd';
import { useStore } from './store';

export default () => {
  const store = useStore();
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
