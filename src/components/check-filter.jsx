import * as React from "react"
export function CheckFilter({
  items,
  name,
  selectedItems = [],
  setSelectedItems,
  open = true,
}) {
  const toggleItem = ({ currentTarget: input }) => {
    if (input.checked) {
      setSelectedItems([...selectedItems, input.value])
    } else {
      const idx = selectedItems.indexOf(input.value)
      if (idx === -1) {
        return
      }
      const newItems = [
        ...selectedItems.slice(0, idx),
        ...selectedItems.slice(idx + 1),
      ]
      setSelectedItems(newItems)
    }
  }

  const clearItems = () => {
    setSelectedItems([])
  }

  return (
    <div open={open} className="d-flex align-items-center">
      <div className="filters flex-1">
        {items.map((item) => (
          <div className="filter-item">
            <a href={`/productos/${item.toLowerCase().replace(" ","-")}`}>{item}</a>
            {/* <label
              className={selectedItems?.includes(item) ? "label" : undefined}
              key={item}
            >
              <input
                type="checkbox"
                className="checkbox"
                onChange={toggleItem}
                value={item}
                checked={selectedItems.includes(item)}
              />{" "}
              {item || "None"}
            </label> */}
          </div>
        ))}
      </div>
      {selectedItems.length ? (
        <button onClick={clearItems} className="app-header-link filter-delete">
          Borrar filtros
        </button>
      ) : undefined}
    </div>
  )
}
