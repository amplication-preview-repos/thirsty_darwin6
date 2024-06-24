import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PISODES_TITLE_FIELD } from "./PisodesTitle";

export const PisodesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date de diffusion" source="dateDeDiffusion" />
        <TextField label="ID" source="id" />
        <TextField label="Résumé" source="rSum" />
        <TextField label="Titre" source="titre" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Rediffusions"
          target="pisodeId"
          label="RediffusionsItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Date de rediffusion" source="dateDeRediffusion" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Épisode"
              source="pisodes.id"
              reference="Pisodes"
            >
              <TextField source={PISODES_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Titre" source="titre" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
