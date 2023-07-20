import React from 'react'
import { Grid } from '@mui/material'
import Product from './Product'

const Products = () => {
    const products = [
        {id:1, name:"shoes", description:"sporting shoes", price:"$40"},
        {id:2, name:"shirt", description:"amazing", price:"$50"}
    ]
  return (
    <main>
        <Grid container justify="center" spacing={4}>
           {products.map((product)=>(
             <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <Product product={product}/>

             </Grid>
           ))}
        </Grid>
    </main>
  )
}

export default Products