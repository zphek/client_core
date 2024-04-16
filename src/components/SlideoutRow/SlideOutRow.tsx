import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface SlideOutRowProps<T extends Record<string, any>>{
  index: number;
  item: T;
  onDelete: (index: number) => void;
  isDeleting: boolean;
  renderCell: (key: keyof T, value: T[keyof T]) => React.ReactNode;
  getEditRoute: (item: T) => string;
}

const SlideOutRow = <T extends Record<string, any>>({
  index,
  item,
  onDelete,
  isDeleting,
  renderCell,
  getEditRoute,
}: SlideOutRowProps<T>) => {
  const handleDelete = () => {
    onDelete(index);
  };

  const editRoute = getEditRoute(item);

  return (
    <tr className={`hover:bg-slate-100 hover:transition-[400ms] transition-transform duration-500 ${ isDeleting ? 'translate-x-full' : ''}`}>
      {Object.entries(item).map(([key, value]) => (
        <td key={key} className="px-6 py-4 whitespace-nowrap">
          {renderCell(key as keyof T, value)}
        </td>
      ))}
      <td className="px-6 py-4 whitespace-nowrap flex gap-x-3">
        <FontAwesomeIcon
          icon={faTrash}
          size="lg"
          className="hover:text-red-500 transition-all cursor-pointer"
          onClick={handleDelete}
        />
        <Link href={editRoute}>
        <FontAwesomeIcon
          icon={faPencil}
          size="lg"
          className="hover:text-blue-500 transition-all"
        />
        </Link>
      </td>
    </tr>
  );
};

export default SlideOutRow;