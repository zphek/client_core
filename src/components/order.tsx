const Order = ({ data }:any) => {
    const {id, producto, usuario, total, estado} = data;

    return (
    <tbody className="divide-y divide-gray-200">
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">#{id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{producto}</td>
            <td className="px-6 py-4 whitespace-nowrap">{usuario}</td>
            <td className="px-6 py-4 whitespace-nowrap">{total}</td>
            <td className={"px-6 py-4 whitespace-nowrap font-bold " + (estado == 'Entregado' ? ' text-green-500' : estado == 'En camino' ? ' text-yellow-500' : ' text-red-500')}>{estado}</td>
        </tr>
    </tbody>);
}
 
export default Order; 