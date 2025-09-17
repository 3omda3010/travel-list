
function Stats({ items }) {
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);
  
    return (
      <footer className="stats">
        <em>
          {percentage === 100
            ? "you get everything! Ready to go "
            : numItems === 0
            ? `Lets Adding Items`
            : ` You have ${numItems} items on your list , and you already packed
          ${numPacked} (${percentage > 0 ? percentage : 0}%)`}
        </em>
      </footer>
    );
  }

  export default Stats;