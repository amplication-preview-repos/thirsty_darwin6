import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AnimateursCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Biographie" multiline source="biographie" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Nom" source="nom" />
      </SimpleForm>
    </Create>
  );
};
