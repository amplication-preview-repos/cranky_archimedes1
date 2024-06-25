import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { ROUTE_TITLE_FIELD } from "../route/RouteTitle";
import { STATION_TITLE_FIELD } from "../station/StationTitle";

export const TicketShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="Station" source="station.id" reference="Station">
          <TextField source={STATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="TicketNumber" source="ticketNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Vehicle" source="vehicle" />
      </SimpleShowLayout>
    </Show>
  );
};
