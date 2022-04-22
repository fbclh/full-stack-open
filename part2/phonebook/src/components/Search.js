export const Search = ({ handleSearch }) => {
  return (
    <>
      <h1>Phonebook</h1>
      <input type="text" placeholder="Search" onChange={handleSearch} />
    </>
  );
};
