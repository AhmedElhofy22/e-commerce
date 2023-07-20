import React from 'react'
import { Grid } from '@mui/material'
import Product from './Product'
import useStyles from './productsStyles'

const Products = () => {
    const products = [
        {id:1, name:"shoes", description:"sporting shoes", price:"$40", image:"https://www.logodesign.net/logo/dollar-sign-incorporated-with-shopping-cart-5403ld.png?nwm=1&nws=1&industry=ecommerce&sf="},
        {id:2, name:"shirt", description:"amazing", price:"$50", image:"https://johnlewis.scene7.com/is/image/JohnLewis/006266714?$fashion-ui$"}
    ]
    const classes = useStyles()
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
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