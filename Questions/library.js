export default function library() {
  const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      rating: 4.27
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      rating: 4.16
    },
    {
      id: 3,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      rating: 4.25
    },
    {
      id: 4,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      rating: 3.92
    },
    {
      id: 5,
      title: "Animal Farm",
      author: "George Orwell",
      rating: 3.93
    },
    {
      id: 6,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      rating: 3.81
    },
    {
      id: 7,
      title: "Brave New World",
      author: "Aldous Huxley",
      rating: 3.99
    },
    {
      id: 8,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      rating: 4.26
    },
    {
      id: 9,
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      rating: 3.99
    },
    {
      id: 10,
      title: "Jane Eyre",
      author: "Charlotte Bronte",
      rating: 4.11
    }
  ];

  return (
    <div>
      <h2>Library</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} : {book.author} , {book.rating}*
          </li>
        ))}
      </ul>
    </div>
  );
}
