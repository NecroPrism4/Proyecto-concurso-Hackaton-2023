// function dashboard()
// const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("/api/data");
//       const newData = await response.json();
//       setData(newData);
//     };

//     const intervalId = setInterval(fetchData, 5000); // Realizar la solicitud cada 5 segundos
//     return () => clearInterval(intervalId);
//   }, []);

// {
    
// }

import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

function Dashboard(){

    return(
        <div>Hello World!!</div>
    )
}

export default Dashboard;