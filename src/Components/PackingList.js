import { useState } from "react";
import Item from "./Item";

function PackingList({
  items,
  handleDeleteItem,
  handleCheckedItem,
  handleClearList,
}) {
  const [sortBy, setSortBy] = useState("packed");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list" style={{ height: "60vh" }}>
      <ul>
        {sortedItems.map((item) => (
          <Item
            items={item}
            key={item.id}
            handleDeleteItem={handleDeleteItem}
            handleCheckedItem={handleCheckedItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input">Sort by input</option>
          <option value="description">Sort by alpha</option>
          <option value="packed">Sort by checked</option>
        </select>
        <button onClick={handleClearList}>Clear list</button>
      </div>
    </div>
  );
}

export default PackingList;
