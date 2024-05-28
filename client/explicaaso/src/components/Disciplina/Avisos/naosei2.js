import React, { useState } from 'react'
import axios from 'axios'

export default function NewPost() {  
    const [file, setFile] = useState(null)
    const [caption, setCaption] = useState("")
  
    const submit = async event => {
      event.preventDefault()
  
      const formData = new FormData();
      formData.append("arq-pdf", file)
      formData.append("caption", caption)

      try {
        await axios.post("http://localhost:3003/api/posts", 
          formData, 
          { 
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
      }
      catch(error) {
        console.error(error.response.data);
      }
    }
  
    return (
       <form onSubmit={submit}>
         <input onChange={e => setFile(e.target.files[0])} type="file"></input>
         <input value={caption} onChange={e => setCaption(e.target.value)} type="text" placeholder='Caption'></input>
         <button type="submit">Submit</button>
       </form>
    )
  }