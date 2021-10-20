import { ActionCreators } from "../redux/notesReducer";
import * as axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost5001/notes",
});

export const GetNotes = async (dispatch) => {
  try {
    // API call
    const { data } = await axiosInstance.get();
    dispatch(ActionCreators.setNotes(data));
  } catch {
    console.log("Error!");
  }
};

export const DeleteNote = async (dispatch, note) => {
  try {
    // API call
    dispatch(ActionCreators.deleteNote(note));
  } catch {
    console.log("Error!");
  }
};

export const NewNote = async (dispatch, note) => {
  try {
    // API call
    const response = { value: note, id: 1 };
    dispatch(ActionCreators.newNote(response));
  } catch {
    console.log("Error!");
  }
};

export const EditNote = async (dispatch, note) => {
  try {
    // API call
    const response = { value: note, id: 1 };
    dispatch(ActionCreators.editNote(response));
  } catch {
    console.log("Error!");
  }
};
