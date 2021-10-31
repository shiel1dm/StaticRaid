import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Team from '../../../assests/Team.png';

const styles = {
    Team: {
        height: 0,
        paddingTop: '56.25%',
    },
};

export default function TeamCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={process.env.PUBLIC_URL + '/client/public/assests/Team.png'}
          alt="Team"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Teams
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quisquam iure harum ut ipsum recusandae ullam quae saepe aperiam iusto.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}