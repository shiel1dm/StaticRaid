import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ScheduleCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Scheduler
          </Typography>
          <Typography variant="body2" color="text.secondary">

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )}


