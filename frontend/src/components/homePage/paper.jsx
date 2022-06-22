import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
   ...theme.typography.body2,
   textAlign: 'center',
   color: theme.palette.text.secondary,
   height: "50vh",
   width: "100%",
   margin: "20px 0",


   lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Elevation() {
   let elevation = 6;
   return (
      <Item key={elevation} elevation={elevation}>
         {`elevation=${elevation}`}
      </Item>
   );
}