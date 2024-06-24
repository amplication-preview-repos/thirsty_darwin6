import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ActualitSEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Contenu" multiline source="contenu" />
        <DateTimeInput label="Date de publication" source="dateDePublication" />
        <TextInput label="Titre" source="titre" />
      </SimpleForm>
    </Edit>
  );
};
