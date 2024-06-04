import styled from "styled-components"

function ItemExcluir(props) {
    return (
        <button onClick={() => props.onDelete(props.idPdf)}> Excluir </button>
    )
}

export default ItemExcluir