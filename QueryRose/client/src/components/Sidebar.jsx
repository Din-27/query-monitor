import ListDatabase from "./List/ListDatabase";

export default function Sidebar() {
  return (
    <aside
      id="default-sidebar"
      className="relative top-0 left-0 w-72 h-[530px] overflow-auto transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full py-2 overflow-y-auto bg-gray-50">
        <ul className="space-y-2 font-medium">
          <li className="flex cursor-default items-center p-2 text-gray-900 rounded-lg">
            <ListDatabase />
          </li>
        </ul>
      </div>
    </aside>
  );
}
