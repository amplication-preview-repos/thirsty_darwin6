import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PISODES_TITLE_FIELD } from "../pisodes/PisodesTitle";

export const RediffusionsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RediffusionsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date de rediffusion" source="dateDeRediffusion" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Épisode" source="pisodes.id" reference="Pisodes">
          <TextField source={PISODES_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Titre" source="titre" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
