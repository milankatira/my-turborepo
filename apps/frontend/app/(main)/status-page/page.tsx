"use client";
import { Button } from "@/components/ui/button";
import { useWebsites } from "@/hooks/useWebsites";
import { Eye, MoreHorizontal } from "lucide-react";
import React from "react";

function StatusPageList() {
  const { websites } = useWebsites();

  return (
    <div className="w-full bg-white px-4 py-8 sm:px-6 lg:px-8 dark:bg-gray-900">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-medium text-white">Status pages.</h1>
        <Button className="bg-primary hover:bg-primary/90 text-white">
          Create Status page
        </Button>
      </div>

      <div className="bg-dark-lighter border-dark-border overflow-hidden rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-dark-border text-muted-foreground border-b text-sm">
                <th className="px-4 py-3 text-left font-normal">Name</th>
                <th className="px-4 py-3 text-left font-normal">
                  Access level
                </th>
                <th className="px-4 py-3 text-left font-normal">Status</th>
                <th className="px-4 py-3 text-left font-normal">Actions</th>
              </tr>
            </thead>
            <tbody>
              {websites && websites.length > 0 ? (
                websites.map((site) => (
                  <tr
                    key={site.id}
                    className="border-dark-border hover:bg-secondary/10 border-b"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-dark-border flex h-8 w-8 items-center justify-center rounded-full">
                          <span className="text-xs text-emerald-500">⚫</span>
                        </div>
                        <div>
                          <div className="font-medium">{site.url}</div>
                          <div className="text-muted-foreground text-sm">
                            ID: {site.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <svg
                          className="text-muted-foreground h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                        </svg>
                        <span>Public</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-status-published inline-flex items-center rounded-md bg-purple-900/30 px-2 py-1 text-xs font-medium">
                        Published
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="text-muted-foreground h-8 w-8 hover:text-white"
                          onClick={() =>
                            window.open(
                              `/status-page/${site.id}`,
                              "_blank",
                              "noopener,noreferrer",
                            )
                          }
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="text-muted-foreground h-8 w-8 hover:text-white"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="text-muted-foreground p-4 text-center"
                  >
                    No status pages found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StatusPageList;
