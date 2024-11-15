import React from "react";

export default function List() {
  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Status Program:
      </h2>
      <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        <li>At least 10 characters (and up to 100 characters)</li>
        <li>At least one lowercase character</li>
        <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
      </ul>
    </div>
  );
}
