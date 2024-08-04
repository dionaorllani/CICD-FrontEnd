import Friend from "../../components/profile/Friend";
import Search from "../../components/ui/Search";
import { useTheme } from "../../ThemeContext";

function Followers() {
  const { theme } = useTheme();

  return (
    <div className="mt-4 p-3">
      <div className="mb-2">
        <Search />
      </div>
      <div
        className={`row gap-3  py-2 text-${
          theme === "light" ? "dark" : "light"
        }`}
      >
         <Friend col="col-5 col-md-3 col-lg-2" relationshipType="follower" />
        <Friend col="col-5 col-md-3 col-lg-2" relationshipType="follower" />
        <Friend col="col-5 col-md-3 col-lg-2" relationshipType="follower" />
        <Friend col="col-5 col-md-3 col-lg-2" relationshipType="follower" />
      </div>
    </div>
  );
}

export default Followers;
