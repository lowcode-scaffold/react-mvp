import { useValueStore } from './store';

export default () => {
  console.log('View rerender');
  const valueStore = useValueStore();
  return <div style={{ textAlign: 'center' }}>{valueStore.count}</div>;
};
