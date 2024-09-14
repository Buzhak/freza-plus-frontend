import React from "react";

const Table = (data) => {
    const {table} = data;

    if (!table) {
        return(
            <p>Empty...</p>
        )
    }
    
    const rows = table.map((row, index) => {
        if (index === 0) {
            return(
                <tr>
                    <th>{row.thickness}</th>
                    <th>{row.price}</th>
                </tr>
            )
        }
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
                {rows}
            </tbody>
        </table>
    )
}

export default Table;