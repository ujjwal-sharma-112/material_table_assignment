// import axios from "axios";
import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { tableIcons } from "./icons";

const RemoteData = () => {
  const [tableData, setTableData] = useState([]);

  const columns = [
    {
      title: "ID",
      field: "id",
      filterPlaceholder: "Filter By Id",
      editable: false,
    },
    {
      title: "NAME",
      field: "name",
      emptyValue: () => <em>null</em>,
      filtering: false,
    },
    {
      title: "USERNAME",
      field: "username",
      emptyValue: () => <em>null</em>,
      filterPlaceholder: "Filter by Username",
    },
    {
      title: "EMAIL",
      field: "email",
      emptyValue: () => <em>null</em>,
      sorting: false,
      filterPlaceholder: "Filter by EMail",
    },
    {
      title: "PHONE",
      field: "phone",
      emptyValue: () => <em>null</em>,
      sorting: false,
      filterPlaceholder: "Filter by Phone",
    },
    {
      title: "WEBSITE",
      field: "website",
      emptyValue: () => <em>null</em>,
      sorting: false,
      filtering: false,
    },
  ];
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/`)
      .then((response) =>
        response.json(),
      )
      .then((response) =>
        setTableData(response),
      );
  }, []);

  return (
    <MaterialTable
      style={{
        width: "100%",
      }}
      icons={tableIcons}
      title="Users Information"
      columns={columns}
      data={tableData}
      editable={{
        onRowAdd: (newRow) =>
          new Promise((resolve, reject) => {
            setTableData([...tableData, newRow]);
            resolve();
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const updateData = [...tableData];
              const index = oldData.tableData.id;
              console.log(index);
              updateData[index] = newData;
              setTableData([...updateData]);
              resolve();
            }, 1000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...tableData];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setTableData([...dataDelete]);
              resolve();
            }, 1000);
          }),
      }}
      options={{
        searchAutoFocus: true,
        filtering: true,
        showFirstLastPageButtons: false,
        // paginationType: "stepped",
        pageSizeOptions: [2, 5, 10, 20, 30, 50, 70, 100],
        pageSize: 10,
        exportButton: true,
        exportAllData: true,
        addRowPosition: "first",
      }}
    />
  );
};

export default RemoteData;
