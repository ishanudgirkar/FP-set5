export default function () {
  const employees = [
    {
      id: 1,
      name: "John Smith",
      department: "Sales",
      salary: 50000
    },
    {
      id: 2,
      name: "Jane Doe",
      department: "Marketing",
      salary: 60000
    },
    {
      id: 3,
      name: "Bob Johnson",
      department: "Engineering",
      salary: 75000
    },
    {
      id: 4,
      name: "Samantha Lee",
      department: "Human Resources",
      salary: 55000
    },
    {
      id: 5,
      name: "David Williams",
      department: "Finance",
      salary: 80000
    },
    {
      id: 6,
      name: "Amanda Davis",
      department: "Operations",
      salary: 65000
    },
    {
      id: 7,
      name: "Mark Thompson",
      department: "Engineering",
      salary: 90000
    },
    {
      id: 8,
      name: "Karen Johnson",
      department: "Marketing",
      salary: 70000
    },
    {
      id: 9,
      name: "Mike Brown",
      department: "Sales",
      salary: 60000
    },
    {
      id: 10,
      name: "Emily Davis",
      department: "Finance",
      salary: 75000
    }
  ];

  return (
    <div>
      <h2>Company</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} : {employee.department} , (Rs {employee.salary})
          </li>
        ))}
      </ul>
    </div>
  );
}
