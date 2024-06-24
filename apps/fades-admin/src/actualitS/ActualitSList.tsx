import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ActualitSList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ActualitésItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Contenu" source="contenu" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date de publication" source="dateDePublication" />
        <TextField label="ID" source="id" />
        <TextField label="Titre" source="titre" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
