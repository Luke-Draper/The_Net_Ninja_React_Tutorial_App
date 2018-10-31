const initState = {
	projects: [
		{
			id: "1",
			title: "Project 1",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore dolor porro quasi, hic dolorum ipsam, voluptatibus veritatis dicta nisi nostrum sint corporis. Corporis ad aperiam, itaque atque mollitia unde!"
		},
		{
			id: "2",
			title: "Project 2",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore dolor porro quasi, hic dolorum ipsam, voluptatibus veritatis dicta nisi nostrum sint corporis. Corporis ad aperiam, itaque atque mollitia unde!"
		},
		{
			id: "3",
			title: "Project 3",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore dolor porro quasi, hic dolorum ipsam, voluptatibus veritatis dicta nisi nostrum sint corporis. Corporis ad aperiam, itaque atque mollitia unde!"
		}
	]
};

const projectReducer = (state = initState, action) => {
	return state;
};

export default projectReducer;
