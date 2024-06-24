import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { RediffusionsTitle } from "../rediffusions/RediffusionsTitle";

export const PisodesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
