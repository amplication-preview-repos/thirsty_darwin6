import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { PisodesTitle } from "../pisodes/PisodesTitle";

export const RediffusionsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Date de rediffusion" source="dateDeRediffusion" />
        <ReferenceInput source="pisode.id" reference="Pisodes" label="Épisode">
          <SelectInput optionText={PisodesTitle} />
        </ReferenceInput>
        <TextInput label="Titre" source="titre" />
      </SimpleForm>
    </Edit>
  );
};
