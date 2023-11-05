import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { toast } from "react-toastify";
import {
  GET_CONTACT_LIST,
  DELETE_CONTACT,
  ADD_CONTACT,
  UPDATE_CONTACT,
} from "./graphql/api";
import { useQuery, useMutation } from "@apollo/client";

interface Contact {
  first_name: string;
  last_name: string;
  id: number;
  phones: { number: string }[];
}

interface AppContextType {
  loading: boolean;
  error: string | null;
  contactsToDisplay: Contact[];
  totalPageCount: number;
  currentPage: number;
  handlePageChange: any;
  selectedCardIndex: null | number;
  handleSelectedCard: any;
  ratings: any;
  handleRatingChange: any;
  sortedContacts: Contact[];
  openForm: boolean;
  handleOpenForm: any;
  handleCloseForm: any;
  form: { firstName: string; lastName: string; phone: string };
  handleInputChange: any;
  handleCreate: any;
  removeContact: any;
  editMode: boolean;
  editForm: { firstName: string; lastName: string; phone: string };
  handleOpenFormEdit: any;
  handleDeleteContact: any;
  handleUpdateContact: any;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, loading, error } = useQuery(GET_CONTACT_LIST);
  const [addContact] = useMutation(ADD_CONTACT);
  const [updateContact] = useMutation(UPDATE_CONTACT);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Initialize to the first page
  const [openForm, setOpenForm] = useState(false);
  const [editMode, setEditMode] = useState(false); // Flag to indicate edit mode
  const isEditing = editMode && selectedCardIndex !== null;
  const contactsPerPage = 10;

  useEffect(() => {
    if (data && data.contact) {
      // Update the contacts array when data is available
      setContacts(data.contact);
    }
  }, [data]);

  // Selected Card
  const handleSelectedCard = (index: any) => {
    setSelectedCardIndex(index);
  };

  // Pagination //
  const totalPageCount = Math.ceil(contacts.length / contactsPerPage);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
    setSelectedCardIndex(null);
  };

  const startIndex = (currentPage - 1) * contactsPerPage;
  const endIndex = startIndex + contactsPerPage;
  const contactsToDisplay = contacts.slice(startIndex, endIndex);

  // Favorite and Sorting //
  const [ratings, setRatings] = useState<{ [contactId: number]: number }>({});

  const handleRatingChange = (contactId: number, newValue: any) => {
    // Update the ratings object with the new rating value
    setRatings((prevRatings) => ({
      ...prevRatings,
      [contactId]: newValue,
    }));
    handleSelectedCard(null);
  };

  // Create a function to sort contacts by rating
  const sortContactsByRating = (contacts: any) => {
    return contacts.slice().sort((a: any, b: any) => {
      const ratingA = ratings[a.id] || 0;
      const ratingB = ratings[b.id] || 0;
      return ratingB - ratingA;
    });
  };

  const sortedContacts = sortContactsByRating(contactsToDisplay);

  // Form and Add Contact //

  const handleOpenForm = () => {
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
    setEditMode(false);
    setForm({
      firstName: "",
      lastName: "",
      phone: "",
    });
  };

  // Function to add a new contact to the contacts array
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  const [editForm, setEditForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  useEffect(() => {
    // Check if data is available
    if (isEditing && sortedContacts[selectedCardIndex]) {
      const { first_name, last_name, phones } =
        sortedContacts[selectedCardIndex];

      // Update the editForm
      setEditForm({
        firstName: first_name || "",
        lastName: last_name || "",
        phone: phones?.[0]?.number || "",
      });
    }
  }, [isEditing, selectedCardIndex]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (isEditing) {
      // When editing, update the editForm state
      setEditForm((prevEditForm) => ({ ...prevEditForm, [name]: value }));
    } else {
      // When creating a new contact, update the form state
      setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }
  };

  const handleCreate = async () => {
    try {
      const result = await addContact({
        variables: {
          first_name: form.firstName,
          last_name: form.lastName,
          phones: [
            {
              number: form.phone,
            },
          ],
        },
      });

      // Handle success or errors
      if (result.errors) {
        console.error("Error adding contact:", result.errors);
      } else {
        const newContact = result.data.insert_contact.returning[0];
        console.log("Contact added:", newContact);
        addNewContact(newContact);
        toast.success("Success Notification !", {
          position: "top-center",
        });
        handleCloseForm(); // Close the dialog after adding the contact
        setForm({
          firstName: "",
          lastName: "",
          phone: "",
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const addNewContact = (newContact: Contact) => {
    setContacts((prevContacts) => [newContact, ...prevContacts]);
  };

  // Function to remove a contact from the contacts array
  const removeContact = (contactId: number) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  // Edit Contact
  const [editContact] = useMutation(UPDATE_CONTACT);

  const handleUpdateContact = async (id: number, updatedData: any) => {
    try {
      const result = await editContact({
        variables: {
          id,
          _set: updatedData,
        },
      });

      if (result.errors) {
        console.error("Error updating contact:", result.errors);
      } else {
        console.log("Contact updated:", result.data.update_contact_by_pk);
        // You may want to update your local data here to reflect the changes.
        setOpenForm(false);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleOpenFormEdit = (index: any) => {
    setEditMode(true);
    setOpenForm(true);
    setSelectedCardIndex(index);
  };

  // Delete Contact
  const [deleteContact] = useMutation(DELETE_CONTACT);

  const handleDeleteContact = async (contactId: number) => {
    try {
      const result = await deleteContact({
        variables: { id: contactId },
      });

      // Check for success or handle errors
      if (result.errors) {
        console.error("Error deleting contact:", result.errors);
      } else {
        console.log("Contact deleted:", result.data.delete_contact_by_pk);
        // Call the function to remove the deleted contact from the context
        removeContact(contactId);
        window.location.reload();
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const contextValue = {
    loading,
    error: error ? error.message : null,
    totalPageCount,
    handlePageChange,
    currentPage,
    contactsToDisplay,
    selectedCardIndex,
    handleSelectedCard,
    ratings,
    handleRatingChange,
    sortedContacts,
    openForm,
    handleOpenForm,
    handleCloseForm,
    form,
    handleInputChange,
    handleCreate,
    removeContact,
    editMode,
    editForm,
    handleOpenFormEdit,
    handleDeleteContact,
    handleUpdateContact,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

// Create a custom hook to access the context
export function useAppContext() {
  const context = useContext(AppContext);

  return context;
}
