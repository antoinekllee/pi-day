import { useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styles from "./SynergyGame.module.css"

import * as FaIcons from "react-icons/fa"

const Visualiser = (props: any) =>
{
  const { fade } = props;
  
  const unityLoaderUrl = process.env.PUBLIC_URL + '/unitybuild';

  const {
      unityProvider,
      isLoaded,
      loadingProgression,
      requestFullscreen,
      takeScreenshot, 
      unload
    } = useUnityContext({
      loaderUrl: `${unityLoaderUrl}/Visualiser-WebGL.loader.js`,
      dataUrl: `${unityLoaderUrl}/Visualiser-WebGL.data`,
      frameworkUrl: `${unityLoaderUrl}/Visualiser-WebGL.framework.js`,
      codeUrl: `${unityLoaderUrl}/Visualiser-WebGL.wasm`,
      webglContextAttributes: {
        preserveDrawingBuffer: true,
      },
    });
  
    const [screenshotDatas, setScreenshotDatas] = useState<string[]>([]);
  
    const handleClickFullscreen = () => {
      if (isLoaded === false) {
        return;
      }
      requestFullscreen(true);
    };
  
    const handleClickScreenshot = () => {
      if (isLoaded === false) {
        return;
      }
      const screenshotData = takeScreenshot();
      if (screenshotData !== undefined) {
        setScreenshotDatas([screenshotData, ...screenshotDatas]);
      }
    };

    const handleUnload = async () => {
      if (isLoaded === false) {
        return;
      }
      try {
        await unload();
        console.log("Unload success");
      } catch (error) {
        console.error(`Unable to unload: ${error}`);
      }
    };
  
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Audio Visualiser<FaIcons.FaHeadphones className={styles.icon} /></h1>
        <a href="https://drive.google.com/file/d/1NtrldylijoxLUht4js9PlQP1IlTIju9Y/view?usp=sharing" target="_blank" rel="noreferrer">Video</a>
        <div className={styles.unityWrapper}>
          {isLoaded === false && (
            <div className={styles.loadingBar}>
              <div
                className={styles.loadingBarFill}
                style={{ width: loadingProgression * 100 }}
              />
            </div>
          )}
          <Unity
            unityProvider={unityProvider}
            style={{ display: isLoaded ? "block" : "none" }}
          />
        </div>
        <div className={styles.buttons}>
          <button onClick={handleClickFullscreen}>Fullscreen</button>
          <button onClick={handleClickScreenshot}>Screenshot</button>
        </div>
        <p>Screenshots</p>
        <div className={styles.screenshots}>
          {screenshotDatas.map((data, index) => (
            <img width={250} key={index} src={data} alt="Screenshot" />
          ))}
        </div>
        <button className={styles.menuButton} onClick={() => 
          {
            handleUnload(); 
            fade('/pi-day/'); 
          }}>
        <FaIcons.FaHamburger className={styles.menuIcon} />Menu</button>
      </div>
    );
}

export { Visualiser };