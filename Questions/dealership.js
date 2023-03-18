export default function dealership() {
  const cars = [
    {
      id: 1,
      make: "Toyota",
      model: "Camry",
      price: 24000
    },
    {
      id: 2,
      make: "Honda",
      model: "Civic",
      price: 22000
    },
    {
      id: 3,
      make: "Ford",
      model: "F-150",
      price: 45000
    },
    {
      id: 4,
      make: "Nissan",
      model: "Altima",
      price: 26000
    },
    {
      id: 5,
      make: "Chevrolet",
      model: "Malibu",
      price: 28000
    },
    {
      id: 6,
      make: "Jeep",
      model: "Wrangler",
      price: 35000
    },
    {
      id: 7,
      make: "BMW",
      model: "3 Series",
      price: 50000
    },
    {
      id: 8,
      make: "Mercedes-Benz",
      model: "C-Class",
      price: 55000
    },
    {
      id: 9,
      make: "Audi",
      model: "A4",
      price: 45000
    },
    {
      id: 10,
      make: "Tesla",
      model: "Model 3",
      price: 40000
    }
  ];

  return (
    <div>
      <h2>Allianz Dealership</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.make} : {car.model} , (Rs {car.price})
          </li>
        ))}
      </ul>
    </div>
  );
}
