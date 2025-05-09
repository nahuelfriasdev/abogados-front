import { Client } from "@/types/client";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Función para crear las columnas dinámicamente
export const createColumns = (onDelete: (userId: string) => void, onNavigate: (userId: string) => void): ColumnDef<Client>[] => [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "username",
    header: "Apellido",
  },
  {
    accessorKey: "dni",
    header: "DNI",
  },
  {
    accessorKey: "causeType",
    header: "Tipo de Causa",
  },
  {
    accessorKey: "fileNumber",
    header: "Nº de Expediente",
  },
  {
    accessorKey: "locality",
    header: "Localidad",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const handleDelete = () => {
        const userId = row.original.userId || "0"; // Obtener el ID del cliente
        onDelete(userId); // Llamar a la función onDelete pasada como prop
      };

      const handleNavigate = () => {
        const userId = row.original.userId || "0";
        onNavigate(userId)
      }

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menú</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuItem className="cursor-pointer" onClick={handleNavigate}>Ver Perfil</DropdownMenuItem>
            <DropdownMenuItem onClick={handleDelete} className="cursor-pointer">Eliminar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];