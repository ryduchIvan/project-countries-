import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadCountries, selectInfo, selectFiltredList } from "./slice-countries";
import { selectName, selectRegion } from "../Search/slice-search";
import { useEffect } from "react";
import { List } from "../../components/List";
import { Card } from "../../components/Card";

function CountriesList() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const searchByName = useSelector(selectName);
	const searchByRegion = useSelector(selectRegion);
	const filtredStore = useSelector((store) =>
		selectFiltredList(store.countries.list, searchByName, searchByRegion)
	);
	const { length, status, error } = useSelector(selectInfo);
	useEffect(() => {
		dispatch(loadCountries());
	}, [length, dispatch]);
	const countries = filtredStore;

	return (
		<>
			{error && <h1>{error}</h1>}
			{status === "loading" && <h1>Loading...</h1>}
			{status === "received" && (
				<List>
					{countries.map((c) => {
						const countryInfo = {
							img: c.flags.png,
							name: c.name,
							info: [
								{
									title: "Population",
									description: c.population.toLocaleString()
								},
								{
									title: "Region",
									description: c.region
								},
								{
									title: "Capital",
									description: c.capital
								}
							]
						};

						return (
							<Card
								key={c.name}
								onClick={() => navigate(`/country/${c.name}`)}
								{...countryInfo}
							/>
						);
					})}
				</List>
			)}
		</>
	)
}

export { CountriesList };