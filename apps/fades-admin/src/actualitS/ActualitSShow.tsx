import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ActualitSShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Contenu" source="contenu" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date de publication" source="dateDePublication" />
        <TextField label="ID" source="id" />
        <TextField label="Titre" source="titre" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
