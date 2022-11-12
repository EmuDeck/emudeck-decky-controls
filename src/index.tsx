import { ButtonItem, definePlugin, PanelSection, PanelSectionRow, Router, ServerAPI, DialogButton, staticClasses } from "decky-frontend-lib";
import { VFC } from "react";
import { FaShip } from "react-icons/fa";

// interface AddMethodArgs {
//   left: number;
//   right: number;
// }

const Content: VFC<{ serverAPI: ServerAPI }> = ({}) => {
  // const [result, setResult] = useState<number | undefined>();

  // const onClick = async () => {
  //   const result = await serverAPI.callPluginMethod<AddMethodArgs, number>(
  //     "add",
  //     {
  //       left: 2,
  //       right: 2,
  //     }
  //   );
  //   if (result.success) {
  //     setResult(result.result);
  //   }
  // };

  return (
    <PanelSection title="Panel Section">
      <PanelSectionRow>
        <ButtonItem
          layout="below"
          onClick={() => {
            Router.CloseSideMenus();
            Router.Navigate("/retroarch-hotkeys");
          }}>
          Retro Systems, DreamCast, N64, Saturn
        </ButtonItem>
        <ButtonItem
          layout="below"
          onClick={() => {
            Router.CloseSideMenus();
            Router.Navigate("/3ds");
          }}>
          Nintendo 3DS - Citra
        </ButtonItem>
        <ButtonItem
          layout="below"
          onClick={() => {
            Router.CloseSideMenus();
            Router.Navigate("/gamecube");
          }}>
          GameCube - Dolphin
        </ButtonItem>
        <ButtonItem
          layout="below"
          onClick={() => {
            Router.CloseSideMenus();
            Router.Navigate("/wii");
          }}>
          Wii - Dolphin
        </ButtonItem>
        <ButtonItem
          layout="below"
          onClick={() => {
            Router.CloseSideMenus();
            Router.Navigate("/wiiu");
          }}>
          Wii U - Cemu
        </ButtonItem>
        <ButtonItem
          layout="below"
          onClick={() => {
            Router.CloseSideMenus();
            Router.Navigate("/yuzu");
          }}>
          Switch - Yuzu
        </ButtonItem>
        <ButtonItem
          layout="below"
          onClick={() => {
            Router.CloseSideMenus();
            Router.Navigate("/primehack");
          }}>
          PrimeHack
        </ButtonItem>
        <ButtonItem
          layout="below"
          onClick={() => {
            Router.CloseSideMenus();
            Router.Navigate("/duckstation");
          }}>
          PlayStation - DuckStation
        </ButtonItem>
        <ButtonItem
          layout="below"
          onClick={() => {
            Router.CloseSideMenus();
            Router.Navigate("/ps2");
          }}>
          PlayStation 2 - RPCSX2
        </ButtonItem>
      </PanelSectionRow>
    </PanelSection>
  );
};

const RAHotkeys: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      <img style={{ width: "100%" }} src="https://www.emudeck.com/hotkeys/ra-hotkeys.jpg" alt="Hotkeys" />
    </div>
  );
};
const CitraControls: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      <div style={{ display: "flex" }}>
        <DialogButton onClick={() => Router.Navigate("/3ds")}>Controls</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/3ds-hotkeys")}>Hotkeys</DialogButton>
      </div>
      <img style={{ width: "100%" }} src="https://www.emudeck.com/hotkeys/3ds-controls.jpg" alt="Hotkeys" />
    </div>
  );
};
const CitraHotkeys: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      <div style={{ display: "flex" }}>
        <DialogButton onClick={() => Router.Navigate("/3ds")}>Controls</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/3ds-hotkeys")}>Hotkeys</DialogButton>
      </div>
      <img style={{ width: "100%" }} src="https://www.emudeck.com/hotkeys/3ds-hotkeys.jpg" alt="Hotkeys" />
    </div>
  );
};

const GameCubeControls: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      <div style={{ display: "flex" }}>
        <DialogButton onClick={() => Router.Navigate("/gamecube")}>Controls</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/gamecube-hotkeys")}>Hotkeys</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/gamecube-hotkeys-alt")}>Hotkeys - Expert</DialogButton>
      </div>
      <img style={{ width: "100%" }} src="https://www.emudeck.com/hotkeys/gamecube-controls.jpg" alt="Hotkeys" />
    </div>
  );
};
const GameCubeHotkeys: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      <div style={{ display: "flex" }}>
        <DialogButton onClick={() => Router.Navigate("/gamecube")}>Controls</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/gamecube-hotkeys")}>Hotkeys</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/gamecube-hotkeys-alt")}>Hotkeys - Expert</DialogButton>
      </div>
      <img style={{ width: "100%" }} src="https://www.emudeck.com/hotkeys/gamecube-hotkeys.jpg" alt="Hotkeys" />
    </div>
  );
};

const GameCubeHotkeysAlt: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      <div style={{ display: "flex" }}>
        <DialogButton onClick={() => Router.Navigate("/gamecube")}>Controls</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/gamecube-hotkeys")}>Hotkeys</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/gamecube-hotkeys-alt")}>Hotkeys - Expert</DialogButton>
      </div>
      <img style={{ width: "100%" }} src="https://www.emudeck.com/hotkeys/gamecube-hotkeys-alt.jpg" alt="Hotkeys" />
    </div>
  );
};

const WiiControls: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      <div style={{ display: "flex" }}>
        <DialogButton onClick={() => Router.Navigate("/wii")}>Wiimote</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/wii-nunchuck")}>Nunchuck</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/wii-classic")}>Controller</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/wii-hotkeys")}>Hotkeys</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/wii-hotkeys-alt")}>Expert</DialogButton>
      </div>
      <img style={{ width: "100%" }} src="https://www.emudeck.com/hotkeys/wii-controls.jpg" alt="Hotkeys" />
    </div>
  );
};

const WiiNunchuckControls: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      <div style={{ display: "flex" }}>
        <DialogButton onClick={() => Router.Navigate("/wii")}>Wiimote</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/wii-nunchuck")}>Nunchuck</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/wii-classic")}>Controller</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/wii-hotkeys")}>Hotkeys</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/wii-hotkeys-alt")}>Expert</DialogButton>
      </div>
      <img style={{ width: "100%" }} src="https://www.emudeck.com/hotkeys/wii-nunchuck-controls.jpg" alt="Hotkeys" />
    </div>
  );
};

const WiiClassicControls: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      <div style={{ display: "flex" }}>
        <DialogButton onClick={() => Router.Navigate("/wii")}>Wiimote</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/wii-nunchuck")}>Nunchuck</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/wii-classic")}>Controller</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/wii-hotkeys")}>Hotkeys</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/wii-hotkeys-alt")}>Expert</DialogButton>
      </div>
      <img style={{ width: "100%" }} src="https://www.emudeck.com/hotkeys/wii-classic-controls.jpg" alt="Hotkeys" />
    </div>
  );
};

const WiiHotkeys: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      <div style={{ display: "flex" }}>
        <DialogButton onClick={() => Router.Navigate("/wii")}>Wiimote</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/wii-nunchuck")}>Nunchuck</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/wii-classic")}>Controller</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/wii-hotkeys")}>Hotkeys</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/wii-hotkeys-alt")}>Expert</DialogButton>
      </div>
      <img style={{ width: "100%" }} src="https://www.emudeck.com/hotkeys/wii-hotkeys.jpg" alt="Hotkeys" />
    </div>
  );
};

const WiiHotkeysAlt: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      <div style={{ display: "flex" }}>
        <DialogButton onClick={() => Router.Navigate("/wii")}>Wiimote</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/wii-nunchuck")}>Nunchuck</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/wii-classic")}>Controller</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/wii-hotkeys")}>Hotkeys</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/wii-hotkeys-alt")}>Expert</DialogButton>
      </div>
      <img style={{ width: "100%" }} src="https://www.emudeck.com/hotkeys/wii-hotkeys-alt.jpg" alt="Hotkeys" />
    </div>
  );
};

//https://retrogamecorps.files.wordpress.com/2022/10/steam-deck-guide.004-1.jpeg?w=1396&h=&zoom=2
//https://retrogamecorps.files.wordpress.com/2022/10/steam-deck-guide.005-1.jpeg?w=1396&h=&zoom=2

const PrimeHackControls: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      <div style={{ display: "flex" }}>
        <DialogButton onClick={() => Router.Navigate("/primehack")}>Controls</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/primehack-hotkeys")}>Hotkeys</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/primehack-hotkeys-alt")}>Hotkeys - Expert</DialogButton>
      </div>
      <img style={{ width: "100%" }} src="https://www.emudeck.com/hotkeys/primehack-controls.jpg" alt="Hotkeys" />
    </div>
  );
};
const PrimeHackHotkeys: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      <div style={{ display: "flex" }}>
        <DialogButton onClick={() => Router.Navigate("/primehack")}>Controls</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/primehack-hotkeys")}>Hotkeys</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/primehack-hotkeys-alt")}>Hotkeys - Expert</DialogButton>
      </div>
      <img style={{ width: "100%" }} src="https://www.emudeck.com/hotkeys/primehack-hotkeys.jpg" alt="Hotkeys" />
    </div>
  );
};
const PrimeHackHotkeysAlt: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      <div style={{ display: "flex" }}>
        <DialogButton onClick={() => Router.Navigate("/primehack")}>Controls</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/primehack-hotkeys")}>Hotkeys</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/primehack-hotkeys-alt")}>Hotkeys - Expert</DialogButton>
      </div>
      <img style={{ width: "100%" }} src="https://www.emudeck.com/hotkeys/primehack-hotkeys-alt.jpg" alt="Hotkeys" />
    </div>
  );
};
const WiiUControls: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      <div style={{ display: "flex" }}>
        <DialogButton onClick={() => Router.Navigate("/wiiu")}>Controls</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/wiiu-hotkeys")}>Hotkeys</DialogButton>
      </div>
      <img style={{ width: "100%" }} src="https://www.emudeck.com/hotkeys/wiiu-controls.jpg" alt="Hotkeys" />
    </div>
  );
};
const WiiUHotkeys: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      <div style={{ display: "flex" }}>
        <DialogButton onClick={() => Router.Navigate("/wiiu")}>Controls</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/wiiu-hotkeys")}>Hotkeys</DialogButton>
      </div>
      <img style={{ width: "100%" }} src="https://www.emudeck.com/hotkeys/wiiu-hotkeys.jpg" alt="Hotkeys" />
    </div>
  );
};

const YuzuControls: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      <div style={{ display: "flex" }}>
        <DialogButton onClick={() => Router.Navigate("/yuzu")}>Controls</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/yuzu-hotkeys")}>Hotkeys</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/yuzu-hotkeys-alt")}>Hotkeys - Expert</DialogButton>
      </div>
      <img style={{ width: "100%" }} src="https://www.emudeck.com/hotkeys/yuzu-controls.jpg" alt="Hotkeys" />
    </div>
  );
};

const YuzuHotkeys: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      <div style={{ display: "flex" }}>
        <DialogButton onClick={() => Router.Navigate("/yuzu")}>Controls</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/yuzu-hotkeys")}>Hotkeys</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/yuzu-hotkeys-alt")}>Hotkeys - Expert</DialogButton>
      </div>
      <img style={{ width: "100%" }} src="https://www.emudeck.com/hotkeys/yuzu-hotkeys.jpg" alt="Hotkeys" />
    </div>
  );
};

const YuzuHotkeysAlt: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      <div style={{ display: "flex" }}>
        <DialogButton onClick={() => Router.Navigate("/yuzu")}>Controls</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/yuzu-hotkeys")}>Hotkeys</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/yuzu-hotkeys-alt")}>Hotkeys - Expert</DialogButton>
      </div>
      <img style={{ width: "100%" }} src="https://www.emudeck.com/hotkeys/yuzu-hotkeys-alt.jpg" alt="Hotkeys" />
    </div>
  );
};
const DuckstationControls: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      <div style={{ display: "flex" }}>
        <DialogButton onClick={() => Router.Navigate("/duckstation")}>Controls</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/duckstation-hotkeys")}>Hotkeys</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/duckstation-hotkeys-alt")}>Hotkeys - Expert</DialogButton>
      </div>
      <img style={{ width: "100%" }} src="https://www.emudeck.com/hotkeys/duckstation-controls.jpg" alt="Hotkeys" />
    </div>
  );
};
const DuckstationHotkeys: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      <div style={{ display: "flex" }}>
        <DialogButton onClick={() => Router.Navigate("/duckstation")}>Controls</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/duckstation-hotkeys")}>Hotkeys</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/duckstation-hotkeys-alt")}>Hotkeys - Expert</DialogButton>
      </div>
      <img style={{ width: "100%" }} src="https://www.emudeck.com/hotkeys/duckstation-hotkeys.jpg" alt="Hotkeys" />
    </div>
  );
};
const DuckstationHotkeysAlt: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      <div style={{ display: "flex" }}>
        <DialogButton onClick={() => Router.Navigate("/duckstation")}>Controls</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/duckstation-hotkeys")}>Hotkeys</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/duckstation-hotkeys-alt")}>Hotkeys - Expert</DialogButton>
      </div>
      <img style={{ width: "100%" }} src="https://www.emudeck.com/hotkeys/duckstation-hotkeys-alt.jpg" alt="Hotkeys" />
    </div>
  );
};
const PS2Controls: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      <div style={{ display: "flex" }}>
        <DialogButton onClick={() => Router.Navigate("/ps2")}>Controls</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/ps2-hotkeys")}>Hotkeys</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/ps2-hotkeys-alt")}>Hotkeys - Expert</DialogButton>
      </div>
      <img style={{ width: "100%" }} src="https://www.emudeck.com/hotkeys/ps2-controls.jpg" alt="Hotkeys" />
    </div>
  );
};
const PS2Hotkeys: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      <div style={{ display: "flex" }}>
        <DialogButton onClick={() => Router.Navigate("/ps2")}>Controls</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/ps2-hotkeys")}>Hotkeys</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/ps2-hotkeys-alt")}>Hotkeys - Expert</DialogButton>
      </div>
      <img style={{ width: "100%" }} src="https://www.emudeck.com/hotkeys/ps2-hotkeys.jpg" alt="Hotkeys" />
    </div>
  );
};
const PS2HotkeysAlt: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      <div style={{ display: "flex" }}>
        <DialogButton onClick={() => Router.Navigate("/ps2")}>Controls</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/ps2-hotkeys")}>Hotkeys</DialogButton>
        <DialogButton onClick={() => Router.Navigate("/ps2-hotkeys-alt")}>Hotkeys - Expert</DialogButton>
      </div>
      <img style={{ width: "100%" }} src="https://www.emudeck.com/hotkeys/ps2-hotkeys-alt.jpg" alt="Hotkeys" />
    </div>
  );
};

export default definePlugin((serverApi: ServerAPI) => {
  serverApi.routerHook.addRoute("/retroarch-hotkeys", RAHotkeys, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/3ds-hotkeys", CitraHotkeys, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/gamecube-hotkeys", GameCubeHotkeys, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/wii-hotkeys", WiiHotkeys, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/primehack-hotkeys", PrimeHackHotkeys, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/wiiu-hotkeys", WiiUHotkeys, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/yuzu-hotkeys", YuzuHotkeys, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/duckstation-hotkeys", DuckstationHotkeys, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/ps2-hotkeys", PS2Hotkeys, {
    exact: true,
  });

  serverApi.routerHook.addRoute("/gamecube-hotkeys-alt", GameCubeHotkeysAlt, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/wii-hotkeys-alt", WiiHotkeysAlt, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/primehack-hotkeys-alt", PrimeHackHotkeysAlt, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/yuzu-hotkeys-alt", YuzuHotkeysAlt, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/duckstation-hotkeys-alt", DuckstationHotkeysAlt, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/ps2-hotkeys-alt", PS2HotkeysAlt, {
    exact: true,
  });

  serverApi.routerHook.addRoute("/3ds", CitraControls, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/gamecube", GameCubeControls, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/wii", WiiControls, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/wii-nunchuck", WiiNunchuckControls, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/wii-classic", WiiClassicControls, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/primehack", PrimeHackControls, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/wiiu", WiiUControls, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/yuzu", YuzuControls, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/duckstation", DuckstationControls, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/ps2", PS2Controls, {
    exact: true,
  });

  return {
    title: <div className={staticClasses.Title}>Example Plugin</div>,
    content: <Content serverAPI={serverApi} />,
    icon: <FaShip />,
    onDismount() {
      serverApi.routerHook.removeRoute("/3ds");
      serverApi.routerHook.removeRoute("/gamecube");
      serverApi.routerHook.removeRoute("/primehack");
      serverApi.routerHook.removeRoute("/wiiu");
      serverApi.routerHook.removeRoute("/duckstation");
      serverApi.routerHook.removeRoute("/ps2");

      serverApi.routerHook.removeRoute("/3ds-hotkeys");
      serverApi.routerHook.removeRoute("/retroarch-hotkeys");
      serverApi.routerHook.removeRoute("/gamecube-hotkeys");
      serverApi.routerHook.removeRoute("/primehack-hotkeys");
      serverApi.routerHook.removeRoute("/wiiu-hotkeys");
      serverApi.routerHook.removeRoute("/duckstation-hotkeys");
      serverApi.routerHook.removeRoute("/ps2-hotkeys");

      serverApi.routerHook.removeRoute("/3ds-hotkeys-alt");
      serverApi.routerHook.removeRoute("/retroarch-hotkeys-alt");
      serverApi.routerHook.removeRoute("/gamecube-hotkeys-alt");
      serverApi.routerHook.removeRoute("/primehack-hotkeys-alt");
      serverApi.routerHook.removeRoute("/wiiu-hotkeys-alt");
      serverApi.routerHook.removeRoute("/duckstation-hotkeys-alt");
      serverApi.routerHook.removeRoute("/ps2-hotkeys-alt");
    },
  };
});
