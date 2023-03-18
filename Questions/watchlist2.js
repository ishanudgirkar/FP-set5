export default function watchlist2() {
  const movies = [
    {
      id: 1,
      title: "The Godfather",
      director: "Francis Ford Coppola",
      runtime: 175
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      runtime: 142
    },
    {
      id: 3,
      title: "The Dark Knight",
      director: "Christopher Nolan",
      runtime: 152
    },
    {
      id: 4,
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      runtime: 154
    },
    {
      id: 5,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      director: "Peter Jackson",
      runtime: 178
    },
    {
      id: 6,
      title: "The Matrix",
      director: "The Wachowskis",
      runtime: 136
    },
    {
      id: 7,
      title: "The Silence of the Lambs",
      director: "Jonathan Demme",
      runtime: 118
    },
    {
      id: 8,
      title: "Fight Club",
      director: "David Fincher",
      runtime: 139
    },
    {
      id: 9,
      title: "Star Wars: Episode IV - A New Hope",
      director: "George Lucas",
      runtime: 121
    },
    {
      id: 10,
      title: "Goodfellas",
      director: "Martin Scorsese",
      runtime: 146
    }
  ];

  return (
    <div>
      <h2>Watchlist2</h2>
      <ol>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} : {movie.director} , {movie.runtime} min
          </li>
        ))}
      </ol>
    </div>
  );
}
