import { useCallback, useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styles from "./app.module.css";

import { SynergyGame } from "./pages/SynergyGame.component";

const App = () => {
  return <div>
    <SynergyGame />
  </div>; 
};

export { App };
