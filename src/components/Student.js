import React from "react";
import { useState } from "react";
/**
 * Prop -> tempat utk menentukan spesifikasi dari sebuah komponen
 * State -> Tempat menyimpan data di lingkup komponen 
 */

const Student = (prop) => {
    /** membuat state utk menyimpan kode warna */
    const [color, setColor] = useState(`#FF`)
    /** 
     * color: Label variable
     * setColor: func utk mengubah nilai dari color
     */
    return (
        <div className="card mb-1 p-3" style={{ backgroundColor: color }} >
            <h3 className="text-info">
                Nama: {prop.name}
            </h3>
            <h5>
                Usia: {prop.age}
            </h5>
            <p className="fst-italic">
                <span className="fw-bold">Hobi: </span> {prop.description}
            </p>
            <p className="p-1">
                Favorite Color:
                <input
                    className="mx-3"
                    type="color"
                    value={color}
                    onChange={e => setColor(e.target.value)}
                />
            </p>
        </div>
    )
}

export default Student;