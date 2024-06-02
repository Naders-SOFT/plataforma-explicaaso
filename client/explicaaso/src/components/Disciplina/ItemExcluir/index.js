import styled from "styled-components"
import { useState, useEffect } from "react"
import axios from "axios";

function ItemExcluir(props) {
    return (
        <button onClick={() => props.onDelete(props.idPdf)}> Excluir </button>
    )
}

export default ItemExcluir