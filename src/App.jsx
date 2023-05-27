import "./App.css";
import { NewsCard } from "./components/NewsCard";
import { useFetch } from "./hooks/useFetch";
// this is a loader from uiball
import { Orbit } from "@uiball/loaders";

function App() {
  const apiKey = "pub_22009adf5aac9fe0d8750c6593851e13bbfea";
  const url = `https://newsdata.io/api/1/news?apikey=${apiKey}`;

  const { data, loading, error } = useFetch(url);

  return (
    <div className="App divide-y-2 divide-dashed divide-gray-400 bg-sand">
      <h1 className="p-3 text-center drop-shadow-lg font-times font-bold text-6xl mb-3">
        News App
      </h1>
      {loading && (
        <div className="flex w-full items-center justify-center h-screen">
          <Orbit size={35} color="#231F20" />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full p-3 gap-4">
        {data &&
          data.map((news) => {
            return <NewsCard news={news} key={news.link} />;
          })}
      </div>
    </div>
  );
}

export default App;
