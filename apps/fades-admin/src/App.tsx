import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProgrammesList } from "./programmes/ProgrammesList";
import { ProgrammesCreate } from "./programmes/ProgrammesCreate";
import { ProgrammesEdit } from "./programmes/ProgrammesEdit";
import { ProgrammesShow } from "./programmes/ProgrammesShow";
import { ActualitSList } from "./actualitS/ActualitSList";
import { ActualitSCreate } from "./actualitS/ActualitSCreate";
import { ActualitSEdit } from "./actualitS/ActualitSEdit";
import { ActualitSShow } from "./actualitS/ActualitSShow";
import { AnimateursList } from "./animateurs/AnimateursList";
import { AnimateursCreate } from "./animateurs/AnimateursCreate";
import { AnimateursEdit } from "./animateurs/AnimateursEdit";
import { AnimateursShow } from "./animateurs/AnimateursShow";
import { PisodesList } from "./pisodes/PisodesList";
import { PisodesCreate } from "./pisodes/PisodesCreate";
import { PisodesEdit } from "./pisodes/PisodesEdit";
import { PisodesShow } from "./pisodes/PisodesShow";
import { RediffusionsList } from "./rediffusions/RediffusionsList";
import { RediffusionsCreate } from "./rediffusions/RediffusionsCreate";
import { RediffusionsEdit } from "./rediffusions/RediffusionsEdit";
import { RediffusionsShow } from "./rediffusions/RediffusionsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"fades"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Programmes"
          list={ProgrammesList}
          edit={ProgrammesEdit}
          create={ProgrammesCreate}
          show={ProgrammesShow}
        />
        <Resource
          name="ActualitS"
          list={ActualitSList}
          edit={ActualitSEdit}
          create={ActualitSCreate}
          show={ActualitSShow}
        />
        <Resource
          name="Animateurs"
          list={AnimateursList}
          edit={AnimateursEdit}
          create={AnimateursCreate}
          show={AnimateursShow}
        />
        <Resource
          name="Pisodes"
          list={PisodesList}
          edit={PisodesEdit}
          create={PisodesCreate}
          show={PisodesShow}
        />
        <Resource
          name="Rediffusions"
          list={RediffusionsList}
          edit={RediffusionsEdit}
          create={RediffusionsCreate}
          show={RediffusionsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
