import React, { useContext } from 'react'
import { ProductContext } from '../../../ProductContext/ProdductContext'

const BlogDetail = () => {
    const blogData = useContext(ProductContext)

    const { blog } = blogData;

    const 
  return (
    <div>
      Blog
    </div>
  )
}

export default BlogDetail
