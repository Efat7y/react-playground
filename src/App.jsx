import DateCounter from "./Pages/Website/DateCounter/DateCounter";
import PaginationApp from "./Pages/Website/Pagination/PaginationApp";
import Steps from "./Pages/Website/Steps/Steps";

const App = () => {
  return (
    <div className="flex flex-col gap-8 p-5">
      <PaginationApp />
      <DateCounter />
      <Steps />
    </div>
  );
};
export default App;
