import React, { useState } from 'react'
import pagesArray from '../pages'
import FileRenderer from './FileRenderer'

//entry page shows all types of pages 
const EntryPage = () => {
    const [page, setPage] = useState([])
    const [title, setTitle] = useState('')
    const [renderFile, setRenderFile] = useState(false)

    const onRenderForm = (request) => {
        console.log('ENTRY ', Array.from(request[1][1]))
        setPage(Array.from(request[1][1]))
        setTitle(request[0][1])
        setRenderFile(true)

    }
    return (
        <div>
            {!renderFile && <h3>List of Requests</h3>}
            {!renderFile && 
            pagesArray.map((req, index) => {
                const p = Object.entries(req)
                return (
                    <div>
                        <button key={index} className="btn btn-link" onClick={() => onRenderForm(p)}>{p[0][1]}</button>
                    </div>
                )
            })}
            {
                renderFile && <FileRenderer page={page} title={title} />
            }
        </div>
    )
}

export default EntryPage
