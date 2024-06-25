"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/_components/ui/button";
import { Progress } from "@/app/_components/ui/progress";
import useAppStore from "../../_store/useAppStore";
import { Separator } from "@/app/_components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/app/_components/ui/table";
import DeleteButtonWithConfirmationDialog from "./delete-confirmation-dialog";
import { ShareVocabularyButtonSheet } from "./share-vocabulary-sheet";
import { Checkbox } from "@/app/_components/ui/checkbox";
import { AddWordsSheet } from "./add-words-sheet";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "@/app/_components/ui/input";
import { CaretSortIcon } from "@radix-ui/react-icons";

interface Flashcard {
  id: string;
  wordOrPhrase: string;
}

interface Bucket {
  id: string;
  title: string;
}

export default function BucketWordList({
  fetchBucketId,
}: {
  fetchBucketId: string;
}) {
  const {} = useAppStore();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [initialFetchComplete, setInitialFetchComplete] = useState(false);
  const [progress, setProgress] = useState(33);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [bucketName, setBucketName] = useState<string>("");
  const [buckets, setBuckets] = useState<Bucket[]>([]);
  const [selectionState, setSelectionState] = useState<boolean>(false);
  const [selectedFlashcards, setSelectedFlashcards] = useState<Flashcard[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const router = useRouter();

  const columns: ColumnDef<Flashcard>[] = [
    {
      accessorKey: "wordOrPhrase",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Word/Phrase
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => <div>{row.getValue("wordOrPhrase")}</div>,
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const flashcard = row.original;

        return (
          <div className="flex space-x-2">
            {!selectionState && (
              <ShareVocabularyButtonSheet
                vocabularies={[flashcard]}
                buckets={buckets}
              />
            )}
            {!selectionState && (
              <DeleteButtonWithConfirmationDialog
                vocabularies={[flashcard]}
                // reloadList={reloadList}
                setFlashcards={setFlashcards}
              />
            )}
            {selectionState && (
              <Checkbox
                checked={selectedFlashcards.includes(flashcard)}
                onCheckedChange={() => handleCheckboxChange(flashcard)}
              />
            )}
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data: flashcards,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  useEffect(() => {
    const fetchBucket = async () => {
      const response = await fetch("/api/buckets/" + fetchBucketId);
      const data = await response.json();
      if (data.success) {
        setBucketName(data.bucket.title);
        setFlashcards(data.bucket.Vocabulary);
        setInitialFetchComplete(true);
        setProgress(100);
      } else {
        console.error("Error fetching bucket:", data.error);
      }
    };

    fetchBucket();
  }, [fetchBucketId]);

  useEffect(() => {
    const fetchBuckets = async () => {
      setProgress(66);
      const response = await fetch("/api/buckets", { cache: "no-store" });
      const data = await response.json();
      if (data.success) {
        setBuckets(data.buckets);
        setInitialFetchComplete(true);
        setProgress(100);
      } else {
        console.log("Error fetching buckets:", data.error);
      }
    };

    fetchBuckets();
  }, []);

  const reloadList = async () => {
    const response = await fetch("/api/buckets/" + fetchBucketId, {
      cache: "no-store",
    });
    const data = await response.json();
    if (data.success) {
      setFlashcards(data.bucket.Vocabulary);
    } else {
      console.error("Error reloading bucket:", data.error);
    }
  };

  const handleAddVocabulary = (newFlashcard: Flashcard) => {
    setFlashcards((prevFlashcards) => [...prevFlashcards, newFlashcard]);
  };

  const handleCheckboxChange = (flashcard: Flashcard) => {
    const updatedSelection = selectedFlashcards.includes(flashcard)
      ? selectedFlashcards.filter((flash) => flash.id !== flashcard.id)
      : [...selectedFlashcards, flashcard];
    setSelectedFlashcards(updatedSelection);
  };

  const handleLearnButton = () => {
    router.push(`/flashcards/learn/${fetchBucketId}`);
  };

  const handleSelectionState = () => {
    setSelectionState(!selectionState);
    setSelectedFlashcards([]);
  };

  if (!initialFetchComplete) {
    return (
      <main className="min-h-screen h-full flex flex-col items-center justify-center gap-y-5">
        <div>Loading bucket...</div>
        <Progress value={progress} className="w-[50%] lg:w-[20%]" />
      </main>
    );
  }

  return (
    <div className="flex flex-col gap-y-5">
      <div className="w-full flex flex-col justify-end items-start px-8 lg:px-36 2xl:px-60 text-white sticky top-0 bg-secondary z-10">
        <div className="flex flex-row justify-between w-full py-4">
          <h1 className="text-2xl font-bold">{bucketName}</h1>
          <div className="p-4 flex flex-row justify-between items-center w-48">
            {selectionState && (
              <DeleteButtonWithConfirmationDialog
                vocabularies={selectedFlashcards}
                setFlashcards={setFlashcards}
              />
            )}
            {selectionState && (
              <ShareVocabularyButtonSheet
                vocabularies={selectedFlashcards}
                buckets={buckets}
              />
            )}
            {!selectionState && (
              <AddWordsSheet
                currentBucketId={fetchBucketId}
                onAddVocab={handleAddVocabulary}
              />
            )}
            {!selectionState && (
              <Button className="p-4" onClick={handleLearnButton}>
                Learn
              </Button>
            )}
            <Button className="p-4" onClick={handleSelectionState}>
              {selectionState ? "Cancel" : "Select"}
            </Button>
          </div>
        </div>
        <Separator className="my-4 bg-slate-100" />
      </div>
      <div className="w-full flex items-center py-4 px-8 lg:px-36 2xl:px-60 text-white z-0">
        <Input
          placeholder="Filter words..."
          value={
            (table.getColumn("wordOrPhrase")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("wordOrPhrase")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="w-full overflow-y-auto px-8 lg:px-36 2xl:px-60 text-white z-0">
        {flashcards.length > 0 ? (
          <div className="w-full rounded-md border">
            <Table className="w-full">
              <TableHead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableCell key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableHead>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id} className="border-b border-gray-300">
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center border-r border-gray-300"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="text-xl">There are no words in this bucket.</div>
        )}
      </div>
      <div className="w-full flex items-center justify-end space-x-2 py-4 px-8 lg:px-36 2xl:px-60 text-white z-0">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
