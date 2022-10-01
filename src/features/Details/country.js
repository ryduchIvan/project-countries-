import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { loadCountry, clearDetails } from "./slice-details";
import { selectDetails } from "./slice-details";
import { Button } from "./Button";
import { Info } from "./Info";

function Country(params) {
	const { name } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { status, country, error } = useSelector(selectDetails);
	useEffect(() => {
		dispatch(loadCountry(name))
	}, [name, dispatch])
	const goBack = () => {
		navigate(-1);
		dispatch(clearDetails());
	}
	return (
		<div>
			<Button onClick={goBack}>
				<IoArrowBack /> Back
			</Button>
			{status === "loading" ? <h1>Loading...</h1> : ""}
			{error ? <h1>{error}</h1> : ""}
			{status === "received" ? <Info push={navigate} {...country} name={name} /> : ""}
		</div>
	);
}

export { Country };