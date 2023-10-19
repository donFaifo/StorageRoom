import LayoutHeader from '@/Components/LayoutHeader';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Actions from '@/Components/Actions';

export default function Containers({ auth, containers }) {

  const containersList = containers.map(item => {
    return (
      <tr key={item.id} className='tableRow'>
        <td className='text-center'>{item.number}</td>
        <td>{item.description}</td>
        <td className='text-center'>{item.fill * 100}%</td>
        <td className='text-center'>{item.location_name}</td>
        <td className='text-center'><Actions id={item.id} /></td>
      </tr>
    )
  })
  
  return (
    <AuthenticatedLayout 
      user={auth.user}
      header={<LayoutHeader title='Listado de contenedores' />}
    >
      <Head title='Listado de contenedores'/>
      <div className='tableResponsive'>
        <table>
          <thead>
            <tr>
              <th>Número de contenedor</th>
              <th>Descripción</th>
              <th>Llenado</th>
              <th>Ubicación</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {containersList}
          </tbody>
        </table>
      </div>
    </AuthenticatedLayout>
  )
}