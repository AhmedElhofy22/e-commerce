import React from 'react'
import { Grid } from '@mui/material'
import Product from './Product'
import useStyles from './productsStyles'

const Products = ({products,onAddToCart}) => {
   
    const classes = useStyles()
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
           {products.map((product)=>(
             <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <Product product={product} onAddToCart={onAddToCart}/>
                

             </Grid>
           ))}
        </Grid>
    </main>
  )
}

export default Products