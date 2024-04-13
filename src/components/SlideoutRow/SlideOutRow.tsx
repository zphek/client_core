import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';

interface SlideOutRowProps<T extends Record<string, any>>{
  index: number;
  item: T;
  onDelete: (index: number) => void;
  isDeleting: boolean;
  renderCell: (key: keyof T, value: T[keyof T]) => React.ReactNode;
}

const SlideOutRow = <T extends Record<string, any>>({
  index,
  item,
  onDelete,
  isDeleting,
  renderCell,
}: SlideOutRowProps<T>) => {
  const handleDelete = () => {
    onDelete(index);
  };

  return (
    <tr
      className={`transition-transform duration-500 ${
        isDeleting ? 'translate-x-full' : ''
      }`}
    >
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
        <FontAwesomeIcon
          icon={faPencil}
          size="lg"
          className="hover:text-blue-500 transition-all"
        />
      </td>
    </tr>
  );
};

export default SlideOutRow;