import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { STATION_TITLE_FIELD } from "../station/StationTitle";

export const StationExitPaperShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="DriverName" source="driverName" />
        <TextField label="ExitDate" source="exitDate" />
        <TextField label="ID" source="id" />
        <TextField label="LicenseNumber" source="licenseNumber" />
        <ReferenceField label="Station" source="station.id" reference="Station">
          <TextField source={STATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Vehicle" source="vehicle" />
      </SimpleShowLayout>
    </Show>
  );
};
