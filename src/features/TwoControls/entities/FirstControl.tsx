import { observer } from 'mobx-react-lite';
import { DynamicControl } from '../../../components';
import Control from '../model/control';
import { ButtonsConfig } from '../../../components/DynamicControl';

const firstControlStore = new Control();

const firstControlConfig: ButtonsConfig = {
  rightButtons: [
    {
      text: 'Очистить',
      onClick: () => firstControlStore.onChange(''),
    },
    {
      text: 'Текст',
      onClick: () => firstControlStore.onChange('Hello world'),
    }
  ]
}

export const FirstControl =  observer(() => {
  return (
    <DynamicControl
      buttonsConfig={firstControlConfig}
      {...firstControlStore}
    />
  )
});
