import Categories from "../../components/Categories";
import Searchbar from "../../components/Searchbar";
import PopularBooks from "./PopularBooks";
export default function Home() {
  return (
    <div className="p-4">
      <Searchbar />
      <Categories />
      <hr />
      <PopularBooks />
    </div>
  );
}
