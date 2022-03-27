import React, { useState, useContext } from 'react';
import vtkColorMaps from '@kitware/vtk.js/Rendering/Core/ColorTransferFunction/ColorMaps.js';

import {
  View,
  ShareDataSet,
  SliceRepresentation,
  Reader,
  Contexts,
  VolumeController,
  VolumeRepresentation,
} from 'react-vtk-js';

function Slider(props) {
  const view = useContext(Contexts.ViewContext);
  const onChange = (e) => {
    const value = Number(e.currentTarget.value);
    props.setValue(value);
    setTimeout(view.renderView, 0);
  };
  return (
    <label
      style={{
        position: 'absolute',
        zIndex: 100,
        left: '5px',
        top: '0px',
        ...props.style,
      }}
    >
      {props.label}
      <input
        type='range'
        min='0'
        max={props.max}
        value={props.value}
        onChange={onChange}
        style={{
          position: 'sticky',
          zIndex: 100,
          left: '5px',
          top: '5px',
          ...props.style,
        }}
      />
    </label>
  );
}

function DropDown(props) {
  const view = useContext(Contexts.ViewContext);
  function onChange(e) {
    const value = e.currentTarget.value;
    props.setValue(value);
    setTimeout(view.renderView, 0);
  }
  return (
    <select
      value={props.value}
      onChange={onChange}
      style={{
        position: 'absolute',
        zIndex: 100,
        left: '5px',
        top: '5px',
        ...props.style,
      }}
    >
      {props.options.map((opt) => (
        <option value={opt}>{opt}</option>
      ))}
    </select>
  );
}

function CheckBox(props) {
  const view = useContext(Contexts.ViewContext);
  function onChange(e) {
    const value = e.currentTarget.checked;
    props.setValue(value);
    setTimeout(view.renderView, 0);
  }
  return (
    <label
      style={{
        position: 'absolute',
        zIndex: 100,
        left: '5px',
        top: '55px',
        ...props.style,
      }}
    >
      {props.label}
      <input
        type='checkbox'
        checked={props.value}
        onChange={onChange}
        style={{
          position: 'sticky',
          zIndex: 100,
          left: '105px',
          ...props.style,
        }}
      />
    </label>
  );
}

function Example(props) {
  const [iSlice, setISlice] = useState(128);
  const [jSlice, setJSlice] = useState(128);
  const [kSlice, setKSlice] = useState(47);
  const [colorWindow, setColorWindow] = useState(2095);
  const [colorLevel, setColorLevel] = useState(1000);
  const [colorPreset, setColorPreset] = useState('Grayscale');
  const [useLookupTableScalarRange, setUseLookupTableScalarRange] =
    useState(false);
  return (
    <div style={{ width: '100vw', height: '100vh' }}>


      <div style={{ width: '50vw', height: '100vh', display: 'inline-block' }}>
        <View
          id='0'
          background={[0, 0, 0]}
          cameraPosition={[1, 0, 0]}
          cameraViewUp={[0, 0, -1]}
          cameraParallelProjection={false}
        >
          <ShareDataSet>
            <Reader
              vtkClass='vtkXMLImageDataReader'
              url='https://data.kitware.com/api/v1/item/59e12e988d777f31ac6455c5/download'
            />
          </ShareDataSet>
          <VolumeRepresentation>
            <div style={{ display: 'none' }}>
              <VolumeController />
            </div>
            <ShareDataSet />
          </VolumeRepresentation>
        </View>
      </div>
      <div style={{ width: '50vw', height: '100vh', display: 'inline-block' }}>
        <View
          id='0'
          background={[0, 0, 0]}
          cameraPosition={[1, 0, 0]}
          cameraViewUp={[0, 0, -1]}
          cameraParallelProjection={false}
        >
          <VolumeRepresentation>
            <div style={{ display: 'none' }}>
              <VolumeController />
            </div>
            <ShareDataSet />
          </VolumeRepresentation>
        </View>
      </div>
    </div>
  );
}

export default Example;
