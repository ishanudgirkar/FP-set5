export default function Class() {
  const students = [
    {
      id: 1,
      name: "Alice",
      grade: 9,
      attendance: "present"
    },
    {
      id: 2,
      name: "Bob",
      grade: 10,
      attendance: "present"
    },
    {
      id: 3,
      name: "Charlie",
      grade: 9,
      attendance: "absent"
    },
    {
      id: 4,
      name: "David",
      grade: 11,
      attendance: "present"
    },
    {
      id: 5,
      name: "Eve",
      grade: 10,
      attendance: "present"
    },
    {
      id: 6,
      name: "Frank",
      grade: 9,
      attendance: "absent"
    },
    {
      id: 7,
      name: "Grace",
      grade: 11,
      attendance: "present"
    },
    {
      id: 8,
      name: "Henry",
      grade: 10,
      attendance: "present"
    },
    {
      id: 9,
      name: "Isabel",
      grade: 9,
      attendance: "absent"
    },
    {
      id: 10,
      name: "John",
      grade: 11,
      attendance: "present"
    }
  ];

  return (
    <div>
      <h2>Class</h2>
      <ol>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} : {student.grade} , {student.attendance}
          </li>
        ))}
      </ol>
    </div>
  );
}
