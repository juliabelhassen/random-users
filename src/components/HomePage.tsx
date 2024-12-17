import { useEffect, useState } from "react";

function HomePage() {

  const [data, setData] = useState(null)

  useEffect(() => {
		fetch("https://randomuser.me/api/")
			.then((response) => response.json())
			.then((user) => setData(user.results));
	}, []);

  return (
    <main>
     
    </main>
  );
}

export default HomePage
