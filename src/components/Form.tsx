import { FunctionComponent, useState, useEffect } from "react";
import { css } from "@emotion/css";
import { useAppContext } from "../context";
import { ADD_CONTACT } from "../graphql/api";
import { useMutation } from "@apollo/client";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { exit } from "process";

interface Form {
  open: boolean;
  handleClose: () => void;
}

const Form: FunctionComponent = () => {
  const {
    openForm,
    handleCloseForm,
    form,
    handleInputChange,
    handleCreate,
    editMode,
    sortedContacts,
    selectedCardIndex,
    editForm,
    handleUpdateContact,
  } = useAppContext();

  const handleUpdate = () => {
    const updatedData = {
      first_name: editForm.firstName,
      last_name: editForm.lastName,
    };

    console.log("Updating contact with data:", updatedData);

    if (selectedCardIndex !== null) {
      console.log("Contact ID:", sortedContacts[selectedCardIndex].id);
      handleUpdateContact(sortedContacts[selectedCardIndex].id, updatedData);
    }
    handleCloseForm();
  };

  return (
    <Dialog
      open={openForm}
      onClose={handleCloseForm}
      transitionDuration={{ appear: 0, exit: 0 }}
    >
      <DialogTitle>{editMode ? "Edit Contact" : "Create Contact"}</DialogTitle>
      <DialogContent
        sx={{
          width: "350px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          "@media (min-width: 720px)": {
            width: "500px",
          },
        }}
      >
        <TextField
          value={editMode ? editForm.firstName : form.firstName}
          name="firstName"
          id="name"
          label="First Name"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleInputChange}
          required
        />
        <TextField
          value={editMode ? editForm.lastName : form.lastName}
          name="lastName"
          id="name"
          label="Last Name"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleInputChange}
          required
        />
        <TextField
          value={editMode ? editForm.phone : form.phone}
          disabled={editMode}
          name="phone"
          id="name"
          label="Phones"
          type="tel"
          fullWidth
          variant="standard"
          onChange={handleInputChange}
          required
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleCloseForm}
          sx={{
            color: "black",
            ":hover": { color: "green" },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={editMode ? handleUpdate : handleCreate}
          variant="contained"
          disabled={
            (!editMode && (!form.firstName || !form.lastName || !form.phone)) ||
            (editMode &&
              (!editForm.firstName || !editForm.lastName || !editForm.phone))
          }
          sx={{
            backgroundColor: "#33F81E",
            ":hover": { backgroundColor: "green" },
          }}
        >
          {editMode ? "Save" : "Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Form;
