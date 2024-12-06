import { useContext } from 'react'
import UnitContext from '../context/unit-context';

function useUnitContext() {
  return useContext(UnitContext);
}

export default useUnitContext;