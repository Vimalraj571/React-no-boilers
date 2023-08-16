import HOC from "./HOC";
const notes = [
    {
      id: 1,
      name: "one",
      address: "bangalore",
      fare: 40,
    },
    {
      id: 2,
      name: "two",
      address: "bombay",
      fare: 30,
    },
    {
      id: 3,
      name: "three",
      address: "chennai",
      fare: 20,
    },
    {
      id: 4,
      name: "four",
      address: "bangalore",
      fare: 10,
    },
  ];
const Wrapper = ()=> {
    const temp = notes.map((note)=><li key={note.id}>{note.id}</li>)
    return <>{temp}</>
}

export default HOC(Wrapper);