import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { ROUTE_TITLE_FIELD } from "../route/RouteTitle";
import { STATION_TITLE_FIELD } from "../station/StationTitle";

export const BusShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="BusNumber" source="busNumber" />
        <TextField label="Capacity" source="capacity" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="DriverName" source="driverName" />
        <TextField label="ID" source="id" />
        <TextField label="LicenseNumber" source="licenseNumber" />
        <ReferenceField label="Route" source="route.id" reference="Route">
          <TextField source={ROUTE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Station" source="station.id" reference="Station">
          <TextField source={STATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
