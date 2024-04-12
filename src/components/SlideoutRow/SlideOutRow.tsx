import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';

interface SlideOutRowProps {
  index: number;
  item: { name: string; username: string; email: string; role: string; lastConnection: string; };
  onDelete: (index: number) => void;
  isDeleting: boolean;
}

const SlideOutRow: React.FC<SlideOutRowProps> = ({ index, item, onDelete, isDeleting }) => {
  const handleDelete = () => {
    onDelete(index);
  };

  return (
    <tr
      className={`transition-transform duration-500 ${
        isDeleting ? 'translate-x-full' : ''
      }`}
    >
      <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
      <td className="px-6 py-4 whitespace-nowrap">{item.username}</td>
      <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="bg-blue-500 text-white p-2 rounded-lg font-bold flex justify-center">
          {item.role}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{item.lastConnection}</td>
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