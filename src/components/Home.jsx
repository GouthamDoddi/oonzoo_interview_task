import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Grid } from '@mui/material';

import { useSelector } from 'react-redux';


export default function Home() {
    const rows = useSelector(state => state.allProducts)
    const itemData = rows


    for (let item of itemData) {
        item.cols = 1
        item.rows = 1
    }

  return (
    <div>
    <ListSubheader component="div">All items in store</ListSubheader>

    <ImageList sx={{ width: '100%', height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
      </ImageListItem>
      <Grid container spacing={0} style={{ width: '200%' }} >
      {itemData.map((item) => (
        <Grid md={3} sm={2} >
        <ImageListItem key={item.name}>
          <img
            src={`${item.image != 'M_dress_3.png' ? 'W_Dress_3.png' : 'W_Dress_3.png'}?w=248&fit=crop&auto=format`}
            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
            width={250}
            height={250}
            style={{ maxHeight: 250, maxWidth: 250 }}
          />
          <ImageListItemBar
            title={item.name}
            subtitle={item.calories}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.name}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
        </Grid>
      ))}
      </Grid>
    </ImageList>
    </div>
  )
};


