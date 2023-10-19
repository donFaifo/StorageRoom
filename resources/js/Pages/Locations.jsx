import Actions from '@/Components/Actions';
import LayoutHeader from '@/Components/LayoutHeader';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Locations({ auth, locations }) {

  const locationsList = locations.map(item => {
    return (
      <tr key={item.id} className='tableRow'>
        <td className='text-center'>{item.name}</td>
        <td>{item.description}</td>
        <td className='text-center'><Actions id={item.id} /></td>
      </tr>
    )
  })

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<LayoutHeader title='Listado de ubicaciones' />}
    >
      <Head title='Listado de ubicaciones' />
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