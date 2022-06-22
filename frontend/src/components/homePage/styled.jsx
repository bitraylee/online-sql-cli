import { Paper } from "@mui/material"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import styled from "styled-components"


const BgBox = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #fefefe;

	display: flex;
	justify-content: center;
	align-items: center;
`
const FlexContainer = styled.div`
	width: calc(100vw - 40px);
	height: calc(100vh - 40px);
	/* background-color: #ccc; */

	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
`
const OutputBox = styled.div`
	width: calc(100vw - 40px);
	height: 70vh;
	text-align: center;
	background-color: #eee;

	display: flex;
	justify-content: center;
	align-items: center;

	overflow: auto;
	div {
		width: 95%;
		height: 90%;
		text-align: left;
	}
	/* box-shadow: 0px 0px 50px 2px rgba(0,0,0,0.36);; */
`
const InputBox = styled(Paper)`
	width: fit-content;
	height: fit-content;
	text-align: center;
	background-color: #cecece;

	display: flex;
	justify-content: space-between;
	textarea {
		width: calc(100vw - 200px);
		height: 15vh;
		padding: 20px;
		border: none;
		resize: none;
		outline: none;
	}
	textarea::focus {
		border: none;
	}
	input[type="textarea"]::placeholder {
		text-align: start;
	}
`
const SubmitButton = styled.button`
	width: 100px;
	margin: 10px;

	height: calc(100%-20px);
	border-radius: 5px;
	border: none;
	background-color: #eee;

	transition: 0.3s ease-in-out;

	:hover {
		background-color: #cdcdcd;
		transition: 0.3s ease-in-out;
	}
`
const styledRight = styled(ChevronRightIcon)`
	/* font-size:50px; */
	color: #333;
`
export { BgBox, FlexContainer, OutputBox, InputBox, SubmitButton, styledRight }