import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface ViewOptionsProps<TData> {
    table: Table<TData>;
}

export default function ViewOptions<TData>({ table }: ViewOptionsProps<TData>) {
    const visibleColumns = table
        .getAllColumns()
        .filter(
            (column) =>
                typeof column.accessorFn !== "undefined" && column.getCanHide(),
        );

    return (
        <>
            {visibleColumns.length > 0 && (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-8 gap-2 flex"
                        >
                            <MixerHorizontalIcon className="size-4" />
                            <span className="sr-only lg:not-sr-only">
                                Columns
                            </span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[150px]">
                        {/* <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
        <DropdownMenuSeparator /> */}
                        {visibleColumns.map((column) => {
                            return (
                                <DropdownMenuCheckboxItem
                                    key={column.id}
                                    className="capitalize"
                                    checked={column.getIsVisible()}
                                    onCheckedChange={(value) =>
                                        column.toggleVisibility(!!value)
                                    }
                                >
                                    {column.id}
                                </DropdownMenuCheckboxItem>
                            );
                        })}
                    </DropdownMenuContent>
                </DropdownMenu>
            )}
        </>
    );
}
