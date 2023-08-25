import Control from '../model/control';
import {ButtonsConfig, DynamicControl} from '../../../components/DynamicControl';
import {observer} from 'mobx-react-lite';

const secondControlStore = new Control();

const secondControlConfig: ButtonsConfig = {
  leftButtons: [
    {
      text: 'Alert',
      onClick: () => alert(secondControlStore.value),
    },
  ],
  rightButtons: [
    {
      text: 'Тест',
      onClick: () => {
        if (/^-?\d*\.?\d+$/.test(secondControlStore.value)) {
          alert(secondControlStore.value)
        }
      },
    }
  ]
}

export const SecondControl =  observer(() => {
  return (
    <DynamicControl
      buttonsConfig={secondControlConfig}
      {...secondControlStore}
    />
  )
});
