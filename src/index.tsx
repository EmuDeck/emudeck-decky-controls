import {
  ButtonItem,
  definePlugin,  
  PanelSection,
  PanelSectionRow,
  Router,
  ServerAPI,
  staticClasses,
} from "decky-frontend-lib";
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
            Router.Navigate("/retroarch");
          }}
        >
          16 bit, handheld Systems
        </ButtonItem>
        <ButtonItem
          layout="below"
          onClick={() => {
            Router.CloseSideMenus();
            Router.Navigate("/3ds");
          }}
        >
          Nintendo 3DS - Citra
        </ButtonItem>
        <ButtonItem
          layout="below"
          onClick={() => {
            Router.CloseSideMenus();
            Router.Navigate("/gamecube");
          }}
        >
          GameCube - Dolphin
        </ButtonItem>
        <ButtonItem
          layout="below"
          onClick={() => {
            Router.CloseSideMenus();
            Router.Navigate("/wii");
          }}
        >
          Wii - Dolphin
        </ButtonItem>
        <ButtonItem
          layout="below"
          onClick={() => {
            Router.CloseSideMenus();
            Router.Navigate("/yuzu");
          }}
        >
          Switch - Yuzu
        </ButtonItem>
        <ButtonItem
          layout="below"
          onClick={() => {
            Router.CloseSideMenus();
            Router.Navigate("/primehack");
          }}
        >
          PrimeHack
        </ButtonItem>
        <ButtonItem
          layout="below"
          onClick={() => {
            Router.CloseSideMenus();
            Router.Navigate("/wiiu");
          }}
        >
          Wii U - Cemu
        </ButtonItem>
        <ButtonItem
          layout="below"
          onClick={() => {
            Router.CloseSideMenus();
            Router.Navigate("/duckstation");
          }}
        >
          PlayStation - DuckStation
        </ButtonItem>
        <ButtonItem
          layout="below"
          onClick={() => {
            Router.CloseSideMenus();
            Router.Navigate("/ps2");
          }}
        >
          PlayStation 2 - RPCSX2
        </ButtonItem>
        <ButtonItem
          layout="below"
          onClick={() => {
            Router.CloseSideMenus();
            Router.Navigate("/xbox");
          }}
        >
          Xbox - Xemu
        </ButtonItem>
      </PanelSectionRow>
    </PanelSection>
  );
};

const RAHotkeys: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
     <img style={{ width: "100%" }} src="https://retrogamecorps.files.wordpress.com/2022/10/steam-deck-guide.001-1.jpeg" alt="Hotkeys"/>
    </div>
  );
};

const CitraHotkeys: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
     <img style={{ width: "100%" }} src="https://retrogamecorps.files.wordpress.com/2022/10/steam-deck-guide.009-1.jpeg?w=1396&h=&zoom=2" alt="Hotkeys"/>
    </div>
  );
};

const GameCubeHotkeys: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
     <img style={{ width: "100%" }} src="https://retrogamecorps.files.wordpress.com/2022/10/steam-deck-guide.002-1.jpeg?w=1396&h=&zoom=2" alt="Hotkeys"/>
    </div>
  );
};

const WiiHotkeys: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
     <img style={{ width: "100%" }} src="https://retrogamecorps.files.wordpress.com/2022/10/steam-deck-guide.003-1.jpg?w=1396&h=&zoom=2" alt="Hotkeys"/>
    </div>
  );
};

//https://retrogamecorps.files.wordpress.com/2022/10/steam-deck-guide.004-1.jpeg?w=1396&h=&zoom=2
//https://retrogamecorps.files.wordpress.com/2022/10/steam-deck-guide.005-1.jpeg?w=1396&h=&zoom=2


const PrimeHackHotkeys: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
     <img style={{ width: "100%" }} src="https://retrogamecorps.files.wordpress.com/2022/10/steam-deck-guide.006-1.png?w=1396&h=&zoom=2" alt="Hotkeys"/>
    </div>
  );
};

const WiiUHotkeys: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
     <img style={{ width: "100%" }} src="https://retrogamecorps.files.wordpress.com/2022/10/steam-deck-guide.010-1.jpeg?w=1396&h=&zoom=2" alt="Hotkeys"/>
    </div>
  );
};

const YuzuHotkeys: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
     <img style={{ width: "100%" }} src="https://retrogamecorps.files.wordpress.com/2022/10/steam-deck-guide.011-1.jpeg?w=1396&h=&zoom=2" alt="Hotkeys"/>
    </div>
  );
};

const DuckstationHotkeys: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
     <img style={{ width: "100%" }} src="https://retrogamecorps.files.wordpress.com/2022/10/steam-deck-guide.007-1.jpeg?w=1396&h=&zoom=2" alt="Hotkeys"/>
    </div>
  );
};

const PS2Hotkeys: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
     <img style={{ width: "100%" }} src="https://retrogamecorps.files.wordpress.com/2022/10/steam-deck-guide.008-1.jpeg?w=1396&h=&zoom=2" alt="Hotkeys"/>
    </div>
  );
};

const XboxHotkeys: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
     <img style={{ width: "100%" }} src="https://retrogamecorps.files.wordpress.com/2022/10/steam-deck-guide.013-1.jpeg?w=1396&h=&zoom=2" alt="Hotkeys"/>
    </div>
  );
};

export default definePlugin((serverApi: ServerAPI) => {
  serverApi.routerHook.addRoute("/retroarch", RAHotkeys, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/3ds", CitraHotkeys, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/gamecube", GameCubeHotkeys, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/wii", WiiHotkeys, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/primehack", PrimeHackHotkeys, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/wiiu", WiiUHotkeys, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/yuzu", YuzuHotkeys, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/duckstation", DuckstationHotkeys, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/ps2", PS2Hotkeys, {
    exact: true,
  });
  serverApi.routerHook.addRoute("/xbox", XboxHotkeys, {
    exact: true,
  });

  return {
    title: <div className={staticClasses.Title}>Example Plugin</div>,
    content: <Content serverAPI={serverApi} />,
    icon: <FaShip />,
    onDismount() {
      serverApi.routerHook.removeRoute("/3ds");
      serverApi.routerHook.removeRoute("/retroarch");
      serverApi.routerHook.removeRoute("/gamecube");
      serverApi.routerHook.removeRoute("/primehack");
      serverApi.routerHook.removeRoute("/wiiu");
      serverApi.routerHook.removeRoute("/duckstation");
      serverApi.routerHook.removeRoute("/ps2");
      serverApi.routerHook.removeRoute("/xbox");
    },
  };
});
