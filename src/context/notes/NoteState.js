import { useState } from "react";
import NoteContext from "./noteContext";
// import React, { useState } from "react";

const NoteState = (props) => {
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
            "_id": "668102671a247094eba4f6db",
            "user": "668043e5f17350a7e0f4931b",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2024-06-30T06:59:51.738Z",
            "__v": 0
        },
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
            "_id": "668102671a247094eba4f6db",
            "user": "668043e5f17350a7e0f4931b",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2024-06-30T06:59:51.738Z",
            "__v": 0
        },
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
            "_id": "668102671a247094eba4f6db",
            "user": "668043e5f17350a7e0f4931b",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2024-06-30T06:59:51.738Z",
            "__v": 0
        },
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
            "_id": "668102671a247094eba4f6db",
            "user": "668043e5f17350a7e0f4931b",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2024-06-30T06:59:51.738Z",
            "__v": 0
        }

    ]

    const [notes, setNotes] = useState(intialNotes)

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;