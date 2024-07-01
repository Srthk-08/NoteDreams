import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";

    const intialNotes = [
        {
            "_id": "668102671a247094eba4f6db",
            "user": "668043e5f17350a7e0f4931b",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2024-06-30T06:59:51.738Z",
            "__v": 0
        },
        {
            "_id": "268102671a247094eba4f6db",
            "user": "668043e5f17350a7e0f4931b",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2024-06-30T06:59:51.738Z",
            "__v": 0
        },
        {
            "_id": "668102571a247094eba4f6db",
            "user": "668043e5f17350a7e0f4931b",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2024-06-30T06:59:51.738Z",
            "__v": 0
        },
        {
            "_id": "668101671a247094eba4f6db",
            "user": "668043e5f17350a7e0f4931b",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2024-06-30T06:59:51.738Z",
            "__v": 0
        },
        {
            "_id": "668402671a2a7094eba4f6db",
            "user": "668043e5f17350a7e0f4931b",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2024-06-30T06:59:51.738Z",
            "__v": 0
        },
        {
            "_id": "668132671a247094eba4f6db",
            "user": "668043e5f17350a7e0f4931b",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2024-06-30T06:59:51.738Z",
            "__v": 0
        },
        {
            "_id": "668102671a2a7090eba4f6db",
            "user": "668043e5f17350a7e0f4931b",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2024-06-30T06:59:51.738Z",
            "__v": 0
        },
        {
            "_id": "668102671a147094eba4f6db",
            "user": "668043e5f17350a7e0f4931b",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2024-06-30T06:59:51.738Z",
            "__v": 0
        }

    ]

    const [notes, setNotes] = useState(intialNotes);


    // Add a Note
    const addNote = async (title, description, tag) => {
        // API CALL
        const response = await fetch(`${host}api/notes/addnote`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY4MDQzZTVmMTczNTBhN2UwZjQ5MzFiIn0sImlhdCI6MTcxOTcyNjc3Mn0.88sJoFw5Ten_TeJLJX0IyOlq52tOJQJdioTKLWh8eNM'
            },
            body: JSON.stringify({ title, description, tag })
        });

        const json = await response.json();


        // Logic to add a note
        const note = {
            "_id": "668102671a147094eba4f6db",
            "user": "668043e5f17350a7e0f4931b",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-06-30T06:59:51.738Z",
            "__v": 0
        };
        setNotes(notes.concat(note));
    }


    // Delete a Note
    const deleteNote = (id) => {
        // TODO API CALL
        console.log("Deleted the note with id" + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }


    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        // API CALL
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY4MDQzZTVmMTczNTBhN2UwZjQ5MzFiIn0sImlhdCI6MTcxOTcyNjc3Mn0.88sJoFw5Ten_TeJLJX0IyOlq52tOJQJdioTKLWh8eNM'
            },
            body: JSON.stringify({ title, description, tag })
        });

        const json = await response.json();



        // Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }

    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;