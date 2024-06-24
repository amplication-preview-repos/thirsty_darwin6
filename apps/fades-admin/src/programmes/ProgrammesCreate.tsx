import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ProgrammesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="Heure de début" source="heureDeDBut" />
        <DateTimeInput label="Heure de fin" source="heureDeFin" />
        <TextInput label="Titre" source="titre" />
      </SimpleForm>
    </Create>
  );
};
