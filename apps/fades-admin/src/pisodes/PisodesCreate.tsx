import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { RediffusionsTitle } from "../rediffusions/RediffusionsTitle";

export const PisodesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Date de diffusion" source="dateDeDiffusion" />
        <ReferenceArrayInput
          source="rediffusionsItems"
          reference="Rediffusions"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RediffusionsTitle} />
        </ReferenceArrayInput>
        <TextInput label="Résumé" multiline source="rSum" />
        <TextInput label="Titre" source="titre" />
      </SimpleForm>
    </Create>
  );
};
