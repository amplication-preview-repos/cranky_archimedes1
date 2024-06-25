import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RouteTitle } from "../route/RouteTitle";
import { StationTitle } from "../station/StationTitle";

export const BusCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="BusNumber" source="busNumber" />
        <NumberInput step={1} label="Capacity" source="capacity" />
        <TextInput label="DriverName" source="driverName" />
        <TextInput label="LicenseNumber" source="licenseNumber" />
        <ReferenceInput source="route.id" reference="Route" label="Route">
          <SelectInput optionText={RouteTitle} />
        </ReferenceInput>
        <ReferenceInput source="station.id" reference="Station" label="Station">
          <SelectInput optionText={StationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
