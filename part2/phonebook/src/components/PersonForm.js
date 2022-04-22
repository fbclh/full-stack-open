export const PersonForm = ({
  newName,
  newNumber,
  handleSubmit,
  handleNameChange,
  handleNumberChange,
}) => {
  return (
    <>
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            required
            onChange={handleNameChange}
            value={newName}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Number"
            required
            onChange={handleNumberChange}
            value={newNumber}
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  );
};
