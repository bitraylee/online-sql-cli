import React, { useState } from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { BgBox, FlexContainer, OutputBox, InputBox, SubmitButton, ClearButton } from "./styled"
import createTable from './createTable';
import { resolveQuery } from '../../services/resolveQuery';
import DeleteIcon from '@mui/icons-material/Delete';

export default function HomePage() {

   //* States
   const [outputQuery, setOutputQuery] = useState([]);
   const [query, setQuery] = useState("");


   const handleQueryChange = event => {
      setQuery(event.target.value);
   }

   const handleSubmit = (event) => {
      let result = resolveQuery(query);
      setQuery("");
      setOutputQuery([...outputQuery, createTable(result)]);
      event.preventDefault();

   }
   const handleClearConsole = () => {
      setOutputQuery([]);
   }
   return (
      <BgBox>
         <FlexContainer>
            <OutputBox elevation={0}>
               <div>
                  {outputQuery}
               </div>
               <ClearButton onClick={handleClearConsole}>
                  <DeleteIcon sx={{ fontSize: "30px" }}></DeleteIcon>
               </ClearButton>

            </OutputBox>
            <InputBox elevation={10}>
               <textarea name="query" onChange={handleQueryChange} value={query} placeholder="Enter your SQL query here" style={{ borderRadius: "10px" }}></textarea>
               <SubmitButton onClick={handleSubmit} >
                  <ChevronRightIcon sx={{ fontSize: "60px" }}></ChevronRightIcon>
               </SubmitButton>
            </InputBox>
         </FlexContainer>
      </BgBox >
   )
}
