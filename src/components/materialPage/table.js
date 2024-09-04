import React from "react";

const Table = (data) => {
    const {table} = data;

    if (!table) {
        return(
            <p>Empty...</p>
        )
    }
    
    const rows = table.map((row) => {
            return(
                <tr key={row.id}>
                    <td >{row.thickness}</td>
                    <td >от {row.price}</td>
                </tr>
            )
        }
    )
    
    
    return (
        <table className="container__info-table info-table">
            <tbody>
                <tr>
                    <th>Толщина материала, мм.</th>
                    <th>Стоимость резки за 1 м.п., руб.</th>
                </tr>
                {rows}
            </tbody>
        </table>
    )
}

export default Table;