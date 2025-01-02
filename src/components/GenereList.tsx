import useGeneres from "../hooks/useGenres"

const GenereList = () => {
  const {genres} = useGeneres();

  return (
    <ul>
      {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenereList