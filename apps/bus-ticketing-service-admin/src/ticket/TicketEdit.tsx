import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RouteTitle } from "../route/RouteTitle";
import { StationTitle } from "../station/StationTitle";

export const TicketEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="FullName" source="fullName" />
        <DateTimeInput label="JourneyDate" source="journeyDate" />
        <TextInput label="PhoneNumber" source="phoneNumber" />
        <NumberInput label="Price" source="price" />
        <ReferenceInput source="route.id" reference="Route" label="Route">
          <SelectInput optionText={RouteTitle} />
        </ReferenceInput>
        <TextInput label="SeatNumber" source="seatNumber" />
        <ReferenceInput source="station.id" reference="Station" label="Station">
          <SelectInput optionText={StationTitle} />
        </ReferenceInput>
        <TextInput label="TicketNumber" source="ticketNumber" />
        <TextInput label="Vehicle" source="vehicle" />
      </SimpleForm>
    </Edit>
  );
};
