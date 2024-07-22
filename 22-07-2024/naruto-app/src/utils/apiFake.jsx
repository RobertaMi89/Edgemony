export const getCharacterList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(() => {
        return [
          {
            id: 1344,
            name: "Naruto Uzumaki",
            team: "Team Kakashi",
            clan: "Uzumaki",
            rank: "Genin",
          },
          {
            id: 1307,
            name: "Sasuke Uchiha",
            team: "Team Kakashi",
            clan: "Uchiha",
            rank: "Genin",
          },
        ];
      });
    }, 1000);
  });
};

/* export const getBookList = async () => {
	try {

		const res = await fetch("https://jsonplaceholde.typicode.com/users");
		return res.json()

	} catch (error) {
		throw new Error("Error:", error)

	}
};  */
