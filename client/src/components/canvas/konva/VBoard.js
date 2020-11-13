import React from "react";

import { Palette } from "./Palette";
import { Canvas } from "./Canvas";
import { PropertiesPanel } from "./PropertiesPanel";

import './index.css'
import CanvasNav from "../CanvasNav";

function VBoard() {
  return (
    <div className="vboard">
      <CanvasNav />
      <div>
        <Palette />
        <Canvas />
        <PropertiesPanel />
      </div>
    </div>
  );
}

export default VBoard;
