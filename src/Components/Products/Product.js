import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,IconButton} from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'
import useStyles from './styles'

const Product = ({product}) => {
    const classes = useStyles()
   
  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.image.url} title={product.name}/>
        <CardContent>
            <div className={classes.cardContent}>
                <Typography gutterBottom variant="h5" >
                    {product.image.url}
                </Typography>
                <Typography gutterBottom variant="h5" >
                    {product.name}
                </Typography>
                <Typography variant="h5" >
                    {product.price.formatted_with_symbol}
                </Typography>
                <Typography dangerouslySetInnerHTML={{__html:product.description}} variant="body2" color="textSecondary"/>
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