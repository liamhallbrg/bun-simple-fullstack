import { useEffect, useState } from "react";
import ItemsTable from "@/components/items-table";
import type { Item } from "@/types";

export default function Items() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/items")
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-h-400 overflow-y-auto">
      <ItemsTable items={items} />
    </div>
  );
}
