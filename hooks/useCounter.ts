import {useState} from 'react';
import {useDialog} from '@/providers/DialogProvider';

export default function useCounter() {
  const {snackbar} = useDialog();
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
    snackbar('success', 'Reset to 0');
  };

  return {add, count, reset};
}
