import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { BusTitle } from "../bus/BusTitle";
import { StationTitle } from "../station/StationTitle";
import { TicketTitle } from "../ticket/TicketTitle";

export const RouteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="buses"
          reference="Bus"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BusTitle} />
        </ReferenceArrayInput>
        <TextInput label="Destination" source="destination" />
        <TextInput label="Duration" source="duration" />
        <NumberInput label="Price" source="price" />
        <TextInput label="RouteName" source="routeName" />
        <TextInput label="Source" source="source" />
        <ReferenceInput source="station.id" reference="Station" label="Station">
          <SelectInput optionText={StationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="tickets"
          reference="Ticket"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TicketTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
