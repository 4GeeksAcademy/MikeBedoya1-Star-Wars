const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			naves: [],
			planets: [],
			people: [],
			favotites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch('https://swapi.dev/api/starships')
					.then((response) => response.json())
					.then((data) => setStore({ naves: data.results }))

					fetch('https://swapi.dev/api/planets')
					.then((response) => response.json())
					.then((data) => setStore({ planets: data.results }))

					fetch('https://swapi.dev/api/people')
					.then((response) => response.json())
					.then((data) => setStore({ people: data.results }))
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
