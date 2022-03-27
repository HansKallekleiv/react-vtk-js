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
const DATA = require('./polydata.json');
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
                    <GeometryRepresentation
                        mapper={{
                            // colorByArrayName: 'Pressure',
                            // scalarMode: 3,
                            interpolateScalarsBeforeMapping: true,
                        }}
                    // colorDataRange={[0, 0.7]}
                    // colorMapPreset='Black-Body Radiation'
                    >
                        <PolyData
                            points={DATA.points}
                            polys={DATA.polys}
                        >
                            <CellData>
                                <DataArray
                                    registration='setScalars'
                                    // name='Temperature'
                                    values={DATA.scalar}
                                />

                            </CellData>
                        </PolyData>
                    </GeometryRepresentation>
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
                    <GeometryRepresentation
                        mapper={{
                            // colorByArrayName: 'Pressure',
                            // scalarMode: 3,
                            interpolateScalarsBeforeMapping: true,
                        }}
                    // colorDataRange={[0, 0.7]}
                    // colorMapPreset='Black-Body Radiation'
                    >
                        <PolyData
                            points={DATA.points}
                            polys={DATA.polys}
                        >
                            <CellData>
                                <DataArray
                                    registration='setScalars'
                                    // name='Temperature'
                                    values={DATA.scalar}
                                />

                            </CellData>
                        </PolyData>
                    </GeometryRepresentation>
                </View>
            </div>
        </div>
    );
}

export default Example;
