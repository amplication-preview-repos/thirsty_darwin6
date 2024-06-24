import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PISODES_TITLE_FIELD } from "../pisodes/PisodesTitle";

export const RediffusionsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date de rediffusion" source="dateDeRediffusion" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Épisode" source="pisodes.id" reference="Pisodes">
          <TextField source={PISODES_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Titre" source="titre" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
