function Item({ items, handleDeleteItem, handleCheckedItem }) {
    return (
      <li>
        <input
          type="checkbox"
          value={items.packed}
          onChange={() => handleCheckedItem(items.id)}
        />
        <span style={items.packed ? { textDecoration: "line-through" } : {}}>
          {items.quantity}-{items.description}
        </span>
        <button onClick={() => handleDeleteItem(items.id)}>❌</button>
      </li>
    );
  }

  export default Item;