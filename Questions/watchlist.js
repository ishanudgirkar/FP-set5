export default function Watchlist() {
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      director: "Frank Darabont"
    },
    {
      id: 2,
      title: "The Godfather",
      director: "Francis Ford Coppola"
    },
    {
      id: 3,
      title: "The Dark Knight",
      director: "Christopher Nolan"
    },
    {
      id: 4,
      title: "The Godfather: Part II",
      director: "Francis Ford Coppola"
    },
    {
      id: 5,
      title: "12 Angry Men",
      director: "Sidney Lumet"
    },
    {
      id: 6,
      title: "Schindler's List",
      director: "Steven Spielberg"
    },
    {
      id: 7,
      title: "The Lord of the Rings: The Return of the King",
      director: "Peter Jackson"
    },
    {
      id: 8,
      title: "Pulp Fiction",
      director: "Quentin Tarantino"
    },
    {
      id: 9,
      title: "The Good, the Bad and the Ugly",
      director: "Sergio Leone"
    },
    {
      id: 10,
      title: "Fight Club",
      director: "David Fincher"
    }
  ];

  return (
    <div>
      <h2>Watchlist</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} : {movie.director}
          </li>
        ))}
      </ul>
    </div>
  );
}
