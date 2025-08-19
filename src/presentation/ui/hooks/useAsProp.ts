import {As, PropsOf} from '../types';

function useAsProp<Component extends As>(
  component: Component,
  as: PropsOf<Component>['as'],
): Component {
  return (as || component) as Component;
}

export default useAsProp;
