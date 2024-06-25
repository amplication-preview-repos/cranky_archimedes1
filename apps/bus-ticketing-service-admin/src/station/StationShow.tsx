import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ROUTE_TITLE_FIELD } from "../route/RouteTitle";
import { STATION_TITLE_FIELD } from "./StationTitle";

export const StationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <TextField label="StationName" source="stationName" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Bus" target="stationId" label="Buses">
          <Datagrid rowClick="show">
            <TextField label="BusNumber" source="busNumber" />
            <TextField label="Capacity" source="capacity" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="DriverName" source="driverName" />
            <TextField label="ID" source="id" />
            <TextField label="LicenseNumber" source="licenseNumber" />
            <ReferenceField label="Route" source="route.id" reference="Route">
              <TextField source={ROUTE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Station"
              source="station.id"
              reference="Station"
            >
              <TextField source={STATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Route" target="stationId" label="Routes">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Destination" source="destination" />
            <TextField label="Duration" source="duration" />
            <TextField label="ID" source="id" />
            <TextField label="Price" source="price" />
            <TextField label="RouteName" source="routeName" />
            <TextField label="Source" source="source" />
            <ReferenceField
              label="Station"
              source="station.id"
              reference="Station"
            >
              <TextField source={STATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="StationExitPaper"
          target="stationId"
          label="StationExitPapers"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="DriverName" source="driverName" />
            <TextField label="ExitDate" source="exitDate" />
            <TextField label="ID" source="id" />
            <TextField label="LicenseNumber" source="licenseNumber" />
            <ReferenceField
              label="Station"
              source="station.id"
              reference="Station"
            >
              <TextField source={STATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Vehicle" source="vehicle" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Ticket"
          target="stationId"
          label="Tickets"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="FullName" source="fullName" />
            <TextField label="ID" source="id" />
            <TextField label="JourneyDate" source="journeyDate" />
            <TextField label="PhoneNumber" source="phoneNumber" />
            <TextField label="Price" source="price" />
            <ReferenceField label="Route" source="route.id" reference="Route">
              <TextField source={ROUTE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="SeatNumber" source="seatNumber" />
            <ReferenceField
              label="Station"
              source="station.id"
              reference="Station"
            >
              <TextField source={STATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="TicketNumber" source="ticketNumber" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Vehicle" source="vehicle" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="User" target="stationId" label="Users">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Email" source="email" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Roles" source="roles" />
            <ReferenceField
              label="Station"
              source="station.id"
              reference="Station"
            >
              <TextField source={STATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
