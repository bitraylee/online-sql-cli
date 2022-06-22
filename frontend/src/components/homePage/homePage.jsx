import React, { useState } from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { BgBox, FlexContainer, OutputBox, InputBox, SubmitButton, styledRight } from "./styled"
import createTable from '../exampleComponent/createTable';
import { stockData } from '../../database/sampleData';
import axios from 'axios';
import { resolveQuery } from '../../services/resolveQuery';

export default function HomePage() {
   //* States
   const [outputQuery, setOutputQuery] = useState([]);
   let [query, setQuery] = useState("Enter your query here");


   const handleQueryChange = event => {
      query = event.target.value;
   }

   const handleSubmit = () => {
      let result = resolveQuery(query);
      setOutputQuery([...outputQuery, createTable(result)]);

   }

   return (
      <BgBox>
         <FlexContainer>
            <OutputBox elevation={0}>
               <div>
                  {outputQuery}
               </div>
            </OutputBox>
            <InputBox elevation={10}>
               <textarea name="query" onChange={handleQueryChange}></textarea>
               <SubmitButton onClick={handleSubmit}>
                  <ChevronRightIcon sx={{ fontSize: "60px" }}></ChevronRightIcon>
               </SubmitButton>
            </InputBox>
         </FlexContainer>
      </BgBox >
   )
}
