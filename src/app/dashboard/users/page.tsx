"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

import DataTable from "@/components/table/DataTable";
import BoolChip from "@/components/BoolChip";
import { ChevronsUpDown } from "lucide-react";
import { DateTimeFormat } from "@/lib/utils";

export default function Users() {
    //#region Table
    const visibleColumns = { created_at: false, updated_at: false };

    const columns: ColumnDef<any, any>[] = [
        {
            accessorKey: "name",
            header: ({ column }) => (
                <div className="flex flex-row items-center">
                    Name
                    <Button
                        variant="ghost"
                        className="p-1"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }
                    >
                        <ChevronsUpDown className="size-4" />
                    </Button>
                </div>
            ),
            cell: ({ row }) => {
                const data: string = row.getValue("name");

                return data || "-";
            },
        },
        {
            accessorKey: "mfa_status",
            header: "MFA Status",
            enableGlobalFilter: false,
            cell: ({ row }) => {
                const data: string = row.getValue("mfa_status");

                return <BoolChip value={data == "enabled"} />;
            },
        },
        {
            accessorKey: "enabled",
            header: "Enabled",
            enableGlobalFilter: false,
            cell: ({ row }) => {
                const data: boolean = row.getValue("enabled");

                return <BoolChip value={data} />;
            },
        },
        {
            accessorKey: "createdAt",
            header: "Created At",
            enableGlobalFilter: false,
            cell: ({ row }) => {
                const data: string = row.getValue("created_at");

                return DateTimeFormat(data);
            },
        },
        {
            accessorKey: "updatedAt",
            header: "Updated At",
            enableGlobalFilter: false,
            cell: ({ row }) => {
                const data: string = row.getValue("updated_at");

                return DateTimeFormat(data);
            },
        },
    ];
    //#endregion

    return (
        <section className="flex flex-col">
            <DataTable
                zebra
                data={[]}
                columns={columns}
                visibleColumns={visibleColumns}
                onAddNew={() => {}}
                // onDoubleClick={(item) => {
                //     router.push("clients/" + item?.id);
                // }}
            />
        </section>
    );
}
