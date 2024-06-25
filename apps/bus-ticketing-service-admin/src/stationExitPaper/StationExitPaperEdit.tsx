import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { StationTitle } from "../station/StationTitle";

export const StationExitPaperEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="DriverName" source="driverName" />
        <DateTimeInput label="ExitDate" source="exitDate" />
        <TextInput label="LicenseNumber" source="licenseNumber" />
        <ReferenceInput source="station.id" reference="Station" label="Station">
          <SelectInput optionText={StationTitle} />
        </ReferenceInput>
        <TextInput label="Vehicle" source="vehicle" />
      </SimpleForm>
    </Edit>
  );
};
