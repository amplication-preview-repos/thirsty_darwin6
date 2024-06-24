import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AnimateursEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Biographie" multiline source="biographie" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Nom" source="nom" />
      </SimpleForm>
    </Edit>
  );
};
