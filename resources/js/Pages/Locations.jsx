import Actions from '@/Components/Actions';
import LayoutHeader from '@/Components/LayoutHeader';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';

export default function Locations({ auth, locations }) {

  const [filter, setFilter] = useState('');

  const handleFilter = (e) => {
    setFilter(e.target.value);
  }

  const handleNewLocationButton = () => {
    router.get(route('location.new'));
  }

  const locationsList = locations.filter(location =>
    location.name.includes(filter) ||
    location.description.includes(filter)
  ).map(item => {
    return (
      <tr key={item.id} className='tableRow'>
        <td className='text-center'>{item.name}</td>
        <td>{item.description}</td>
        <td className='text-center'>
          <Actions
            editRoute={route('location.new', {id: item.id})}
            deleteRoute={route('location.delete', {id: item.id})}       
          />
        </td>
      </tr>
    )
  })

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<LayoutHeader title='Listado de ubicaciones' />}
    >
      <Head title='Listado de ubicaciones' />

      <div className='py-2 px-4 grid grid-cols-1 md:grid-cols-4'>
        <input type='text' placeholder='Buscar...'
          className='m-3 dark:bg-slate-800 dark:text-gray-300 rounded-md md:grow md:col-span-3' 
          onChange={handleFilter}
          value={filter}/>
        <button className='normalButton col-auto' onClick={handleNewLocationButton}>Nuevo</button>
      </div>

      <div className='tableResponsive'>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {locationsList}
          </tbody>
        </table>
      </div>
    </AuthenticatedLayout>
  )
}