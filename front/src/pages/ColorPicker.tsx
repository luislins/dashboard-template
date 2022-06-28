import React from 'react'

import { ColorPickerComponent, ColorPickerMode } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';

interface ColorPickerProps {
  id: string,
  mode: string,
};

interface ArgsProps {
  currentValue: {hex : string}
};

export function ColorPicker() {
  const CustomColorPicker = ({ id, mode } : ColorPickerProps) => <ColorPickerComponent id={id} mode={mode as ColorPickerMode} modeSwitcher={false} inline showButtons={false} change={change} />;
  
  const change = (args : ArgsProps) => {
    (document.getElementById('preview') as HTMLInputElement).style.backgroundColor = args.currentValue.hex;
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="App" title="Color Picker" />
    <div className="text-center">
      <div id="preview" />
      <div className="flex justify-center items-center gap-20 flex-wrap">
        <div>
          <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
          <CustomColorPicker id="inline-palette" mode="Palette" />
        </div>
        <div>
          <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
          <CustomColorPicker id="inline-picker" mode="Picker" />
        </div>
      </div>
    </div>
  </div>
  )
}