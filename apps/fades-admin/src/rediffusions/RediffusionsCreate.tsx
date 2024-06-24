import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { PisodesTitle } from "../pisodes/PisodesTitle";

export const RediffusionsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Date de rediffusion" source="dateDeRediffusion" />
        <ReferenceInput source="pisode.id" reference="Pisodes" label="Épisode">
          <SelectInput optionText={PisodesTitle} />
        </ReferenceInput>
        <TextInput label="Titre" source="titre" />
      </SimpleForm>
    </Create>
  );
};
