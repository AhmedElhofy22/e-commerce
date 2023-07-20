import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,IconButton} from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'
import useStyles from './styles'

const Product = ({product}) => {
    const classes = useStyles()
  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.image} title={product.name}/>
        <CardContent>
            <div className={classes.cardContent}>
               <Typography gutterBottom variant="h5" >
                    {product.image}
                </Typography>
                <Typography gutterBottom variant="h5" >
                    {product.name}
                </Typography>
                <Typography variant="h5" >
                    {product.price}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {product.description}
                </Typography>
            </div>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label="add to shopping cart">
                <AddShoppingCart />
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product