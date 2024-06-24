import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ActualitSCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Contenu" multiline source="contenu" />
        <DateTimeInput label="Date de publication" source="dateDePublication" />
        <TextInput label="Titre" source="titre" />
      </SimpleForm>
    </Create>
  );
};
