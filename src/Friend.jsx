export const Friend = ({
  id,
  name,
  image,
  balance,
  handleSplit,
  toggleSplit,
}) => {
  return (
    <li>
      <img src={image} alt="person" />
      <h3>{name}</h3>
      <button
        className="button"
        onClick={() => handleSplit({ id, name, image, balance })}
      >
        {toggleSplit.id === id ? "Close" : "Split"}
      </button>
      <p className={balance === 0 ? "" : balance > 0 ? "green" : "red"}>
        {balance === 0 && `You and ${name} are even`}
        {balance < 0 && `You owe ${name} ${Math.abs(balance)}€`}
        {balance > 0 && `${name} owes you ${balance}€`}
      </p>
    </li>
  );
};
