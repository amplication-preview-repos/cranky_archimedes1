import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ROUTE_TITLE_FIELD } from "./RouteTitle";
import { STATION_TITLE_FIELD } from "../station/StationTitle";

export const RouteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Destination" source="destination" />
        <TextField label="Duration" source="duration" />
        <TextField label="ID" source="id" />
        <TextField label="Price" source="price" />
        <TextField label="RouteName" source="routeName" />
        <TextField label="Source" source="source" />
        <ReferenceField label="Station" source="station.id" reference="Station">
          <TextField source={STATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Bus" target="routeId" label="Buses">
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
        <ReferenceManyField reference="Ticket" target="routeId" label="Tickets">
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
      </SimpleShowLayout>
    </Show>
  );
};
