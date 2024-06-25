import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BusList } from "./bus/BusList";
import { BusCreate } from "./bus/BusCreate";
import { BusEdit } from "./bus/BusEdit";
import { BusShow } from "./bus/BusShow";
import { RouteList } from "./route/RouteList";
import { RouteCreate } from "./route/RouteCreate";
import { RouteEdit } from "./route/RouteEdit";
import { RouteShow } from "./route/RouteShow";
import { TicketList } from "./ticket/TicketList";
import { TicketCreate } from "./ticket/TicketCreate";
import { TicketEdit } from "./ticket/TicketEdit";
import { TicketShow } from "./ticket/TicketShow";
import { PassengerList } from "./passenger/PassengerList";
import { PassengerCreate } from "./passenger/PassengerCreate";
import { PassengerEdit } from "./passenger/PassengerEdit";
import { PassengerShow } from "./passenger/PassengerShow";
import { DriverList } from "./driver/DriverList";
import { DriverCreate } from "./driver/DriverCreate";
import { DriverEdit } from "./driver/DriverEdit";
import { DriverShow } from "./driver/DriverShow";
import { StationList } from "./station/StationList";
import { StationCreate } from "./station/StationCreate";
import { StationEdit } from "./station/StationEdit";
import { StationShow } from "./station/StationShow";
import { StationExitPaperList } from "./stationExitPaper/StationExitPaperList";
import { StationExitPaperCreate } from "./stationExitPaper/StationExitPaperCreate";
import { StationExitPaperEdit } from "./stationExitPaper/StationExitPaperEdit";
import { StationExitPaperShow } from "./stationExitPaper/StationExitPaperShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"BusTicketingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Bus"
          list={BusList}
          edit={BusEdit}
          create={BusCreate}
          show={BusShow}
        />
        <Resource
          name="Route"
          list={RouteList}
          edit={RouteEdit}
          create={RouteCreate}
          show={RouteShow}
        />
        <Resource
          name="Ticket"
          list={TicketList}
          edit={TicketEdit}
          create={TicketCreate}
          show={TicketShow}
        />
        <Resource
          name="Passenger"
          list={PassengerList}
          edit={PassengerEdit}
          create={PassengerCreate}
          show={PassengerShow}
        />
        <Resource
          name="Driver"
          list={DriverList}
          edit={DriverEdit}
          create={DriverCreate}
          show={DriverShow}
        />
        <Resource
          name="Station"
          list={StationList}
          edit={StationEdit}
          create={StationCreate}
          show={StationShow}
        />
        <Resource
          name="StationExitPaper"
          list={StationExitPaperList}
          edit={StationExitPaperEdit}
          create={StationExitPaperCreate}
          show={StationExitPaperShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
