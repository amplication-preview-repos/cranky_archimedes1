import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BusTitle } from "../bus/BusTitle";
import { RouteTitle } from "../route/RouteTitle";
import { StationExitPaperTitle } from "../stationExitPaper/StationExitPaperTitle";
import { TicketTitle } from "../ticket/TicketTitle";
import { UserTitle } from "../user/UserTitle";

export const StationCreate = (props: CreateProps): React.ReactElement => {
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
        <TextInput label="Location" source="location" />
        <ReferenceArrayInput
          source="routes"
          reference="Route"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RouteTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="stationExitPapers"
          reference="StationExitPaper"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StationExitPaperTitle} />
        </ReferenceArrayInput>
        <TextInput label="StationName" source="stationName" />
        <ReferenceArrayInput
          source="tickets"
          reference="Ticket"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TicketTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="users"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
