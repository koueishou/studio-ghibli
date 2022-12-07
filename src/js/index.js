import axios from "axios";
import "@/scss/index.scss";
import "@/index.html";

const fetchPlanets = async () => {
  const results = await axios.get("https://swapi.dev/api/planets/?page=1");
  console.log(results.data);
};

fetchPlanets();
