import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RouteTitle } from "../route/RouteTitle";
import { StationTitle } from "../station/StationTitle";

export const BusEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
