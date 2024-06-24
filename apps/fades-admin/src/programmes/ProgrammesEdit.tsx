import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ProgrammesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="Heure de début" source="heureDeDBut" />
        <DateTimeInput label="Heure de fin" source="heureDeFin" />
        <TextInput label="Titre" source="titre" />
      </SimpleForm>
    </Edit>
  );
};
