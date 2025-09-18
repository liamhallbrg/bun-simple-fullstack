import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { Item } from "@/types";

type ItemsTableProps = {
  items: Item[];
};

export default function ItemsTable({items} : ItemsTableProps) {
  return(
    <Table>
      <TableCaption>A list of all items.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total items</TableCell>
          <TableCell className="text-right">{items.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}