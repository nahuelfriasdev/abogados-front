"use client"

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[],
  setIsMenuOpen?: (isOpen: boolean) => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  setIsMenuOpen,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  )
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  })

  const toggleMenu = () => {
    if (setIsMenuOpen) {
      setIsMenuOpen(true);
    }
  };

  return (
    <div className="w-full px-4 md:px-0">
      <div className="rounded-xl border shadow-sm bg-white overflow-hidden">
        
        {/* Filtro y botón */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 border-b">
          <Input
            placeholder="Buscar por DNI..."
            value={(table.getColumn("dni")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("dni")?.setFilterValue(event.target.value)
            }
            className="w-full md:max-w-sm"
          />
          <Button onClick={toggleMenu} className="w-full md:w-auto">
            + Nuevo Cliente
          </Button>
        </div>
  
        {/* Tabla */}
        <Table className="min-w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-gray-500"
                >
                  No hay clientes registrados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
  
        {/* Paginación */}
        <div className="flex justify-end items-center gap-2 px-6 py-4 border-t">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Anterior
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Siguiente
          </Button>
        </div>
      </div>
    </div>
  );
  
}


export default DataTable;