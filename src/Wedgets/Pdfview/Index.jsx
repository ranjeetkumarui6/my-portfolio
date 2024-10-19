import { Document, Page } from '@react-pdf/renderer'
import React from 'react'

const Pdfview = ({file}) => {
  return (
    <>
     <Document file={file}>
        <Page pageNumber={1}/>
    </Document> 
    </>
  )
}

export default Pdfview
