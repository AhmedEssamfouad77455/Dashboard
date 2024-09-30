import React from 'react'
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./Data";
import { Typography, useTheme } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import SecurityIcon from "@mui/icons-material/Security";
import {GridToolbar} from '@mui/x-data-grid-premium';
import Header from '../../Header';
export default function Contents() {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      flex: 1,
      headerName: "ID",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      flex: 1,
      headerName: "Email",
      aling: "center",
    },
    {
      field: "age",
      flex: 1,
      headerName: "Age",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      flex: 1,
      headerName: "Phone",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      textAlign: "center",
      align: "start",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              background:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.main
                  : "#3da58a",

              fontWeight: "bold",
              borderRadius: "10px",
              width: "100%",
              height: "80%",
              justifyContent: "center",
              alignItems: "center",
              margin: "5px auto",
              display: "flex",
              textAlign: "center",
              gap: "3px",
              color: "white",
            }}
          >
            {access === "Admin" ? (
              <AdminPanelSettingsIcon fontSize="small" />
            ) : access === "Manager" ? (
              <SecurityIcon fontSize="small" />
            ) : (
              <LockPersonIcon />
            )}
            <Typography sx={{ fontSize: "13px" }}>{access}</Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <>
    <Header text={"Contents"} />


   
    <Box sx={{ height: "80vh", maxWidth: "95%", overflow: "auto" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
    </>
  );
}
