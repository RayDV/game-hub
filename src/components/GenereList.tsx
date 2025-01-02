import useGeneres, { Genre } from "../hooks/useGenres"

const GenereList = () => {
  const {data} = useGeneres();

  return (
    <ul>
      {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenereList