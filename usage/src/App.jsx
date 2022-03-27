import React from "react";
import vtkCamera from '@kitware/vtk.js/Rendering/Core/Camera.js';
import vtkRenderWindow from '@kitware/vtk.js/Rendering/Core/RenderWindow.js';


import {
  View,
  ShareDataSet,
  Reader,
  VolumeController,
  VolumeRepresentation,
  GeometryRepresentation,
  PolyData,
  CellData,
  DataArray
} from 'react-vtk-js';
import DATA from './polydata.json'
function App() {


  var camera = vtkCamera.newInstance();
  camera.onModified(renderAll);


  function renderAll() {
    for (var i in renderWindows) {
      renderWindows[i].render();

    }
  }

  var renderWindows = []
  renderWindows[1] = vtkRenderWindow.newInstance();
  renderWindows[2] = vtkRenderWindow.newInstance();

  var camera2 = vtkCamera.newInstance();
  camera2.onModified(renderAll2);


  function renderAll2() {
    for (var i in renderWindows2) {
      renderWindows2[i].render();

    }
  }

  var renderWindows2 = []
  renderWindows2[1] = vtkRenderWindow.newInstance();
  renderWindows2[2] = vtkRenderWindow.newInstance();
  return (
    <>
      <div style={{ width: '100vw', height: '50vh' }}>


        <div style={{ width: '50vw', height: '50vh', display: 'inline-block' }}>
          <View
            id='0'
            background={[0, 0, 0]}
            cameraPosition={[1, 0, 0]}
            cameraViewUp={[0, 0, -1]}
            cameraParallelProjection={false}
            renderWindow={renderWindows[1]}
            camera={camera}
            pickingModes={["hover"]}
            showCubeAxes

          >

            <GeometryRepresentation
              mapper={{
                // colorByArrayName: 'Pressure',
                // scalarMode: 3,
                interpolateScalarsBeforeMapping: true,
              }}
              // colorDataRange={[0, 0.7]}
              // colorMapPreset='Black-Body Radiation'
              property={{ "edgeVisibility": true }}
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
        <div style={{ width: '50vw', height: '50vh', display: 'inline-block' }}>
          <View
            id='0'
            background={[0, 0, 0]}
            cameraPosition={[1, 0, 0]}
            cameraViewUp={[0, 0, -1]}
            cameraParallelProjection={false}
            renderWindow={renderWindows[2]}
            camera={camera}
            pickingModes={["hover"]}
            showCubeAxes
          >
            <GeometryRepresentation
              mapper={{
                // colorByArrayName: 'Pressure',
                // scalarMode: 3,
                interpolateScalarsBeforeMapping: true,
              }}
              property={{ "edgeVisibility": true }}
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
      <div style={{ width: '100vw', height: '100vh' }}>


        <div style={{ width: '50vw', height: '100vh', display: 'inline-block' }}>
          <View
            id='1'
            background={[0, 0, 0]}
            cameraPosition={[1, 0, 0]}
            cameraViewUp={[0, 0, -1]}
            cameraParallelProjection={false}
            renderWindow={renderWindows2[1]}
            camera={camera2}
            pickingModes={["hover"]}


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
            id='1'
            background={[0, 0, 0]}
            cameraPosition={[1, 0, 0]}
            cameraViewUp={[0, 0, -1]}
            cameraParallelProjection={false}
            renderWindow={renderWindows2[2]}
            camera={camera2}
            pickingModes={["hover"]}
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
    </>
  );
}

export default App;
