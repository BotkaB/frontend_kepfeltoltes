import React, { useState } from "react";

import useFileContext from "../context/fileContext";

export default function FormCompontnt() {
const { postAdat, errors } = useFileContext();
const [file, setFile] = useState(null);
const [title, setTitle] = useState("");


function kuld(event) {
    event.preventDefault()
    let adat = {
    title: title,
    name: file,
    };
    console.log(adat) 

    postAdat(adat,"/file-upload")
}

return (
    <div className="container">
    <form onSubmit={kuld}>
        <div className="mb-3">
        <label htmlFor="title" className="form-label">
        A kép címe:
        </label>
        <input
            type="text"
            className="form-control"
            id="title"
            onChange={(event) => {
            setTitle(event.target.value);
            }}
            placeholder="kép címe"
        />
        </div>
        <div>
          {errors.title && (
            <span className="text-danger">{errors.title[0]}</span>
          )}
        </div>
        <div className="mb-3">
        <label htmlFor="name" className="form-label">
            Válassz fájlt!
        </label>
        <input
            type="file"
            accept="image/png, image/jpeg" 
            className="form-control"
            onChange={(event) => {
            setFile(event.target.files[0]);
            }}
            id="fileNev"
            placeholder="Válasszon fájlt..."
        />
        </div>
        <div>
          {errors.title && (
            <span className="text-danger">{errors.title[0]}</span>
          )}
        </div>
        <input
        type="submit"
        className="btn btn-primary"
        id="submit"
        value="Küld"
        />
    </form>
    </div>
);
}