import { useGetRepos } from "./hooks/useRepos"
import { Card } from "./components/Card"
import { useFavoriteReposStore } from "./store/favoriteRepos"


const App = () => {
  const {data: repos, isLoading, isError, error} = useGetRepos('jcdev92')

  const {favoirteReposIds} = useFavoriteReposStore()
  
  if(isLoading) {
    return <div>Loading...</div>
  } else if(isError) {
    return <div>Error: {error.message}</div>
  
  }

  return (
    <div>
      {repos?.map(repository => (
        <Card key={repository.id} repository={repository} isFavorite={favoirteReposIds.includes(repository.id)} />
        )
      )}
    </div>
  )
}

export default App