import { useStore } from './store';

export default () => {
  console.log('View rerender');
  const store = useStore();
  return <div style={{ textAlign: 'center' }}>{store.count}</div>;
};
