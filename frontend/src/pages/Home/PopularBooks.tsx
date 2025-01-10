export default function PopularBooks() {
  const books = [
    { name: "Book 1", price: "$10", author: "Author A" },
    { name: "Book 2", price: "$15", author: "Author B" },
    { name: "Book 3", price: "$20", author: "Author C" },
    { name: "Book 1", price: "$10", author: "Author A" },
    { name: "Book 1", price: "$10", author: "Author A" },
  ];

  return (
    <div className="w-3/4 m-auto">
      <div className="text-3xl text-center font-semibold my-2">
        Popular Books
      </div>
      <div className="flex justify-around  gap-4 pb-4">
        {books.map((book, index) => (
          <div
            key={index}
            className="book-card flex-none w-1/5 p-3 rounded-lg shadow-sm
            transition-all duration-300 ease-in-out hover:scale-105"
          >
            <img
              src="https://placehold.co/150x225"
              alt="Book Cover"
              className="w-full h-auto mb-3 rounded-md"
            />
            <div className="text-lg font-semibold text-center">{book.name}</div>
            <div className="text-sm text-gray-700 text-center">
              Price: {book.price}
            </div>
            <div className="text-sm text-gray-500 text-center">
              Author: {book.author}
            </div>
          </div>
        ))}
      </div>
      <div
        className="w-fit m-auto text-2xl bg-orange-400 text-white text-center 
        p-3 rounded cursor-pointer transition-all ease-in-out duration-300
        hover:bg-orange-500"
      >
        See more
      </div>
    </div>
  );
}
