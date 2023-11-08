import LayoutHeader from '@/Components/LayoutHeader';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Actions from '@/Components/Actions';
import { useState } from 'react';
import { router } from '@inertiajs/react';

export default function Articles({ auth, articles }) {

  const [filter, setFilter] = useState('');

  const articlesList = articles
    .filter(article => 
      article.lm.includes(filter) ||
      article.ean.includes(filter) ||
      article.description.includes(filter))
    .map(item => {
      return (
        <tr key={item.id} className='tableRow'>
          <td className='text-center'>{item.lm}</td>
          <td className='text-center'>{item.ean}</td>
          <td>{item.description}</td>
          <td className='text-center'>
            <Actions 
              editRoute={route('article.new', {id: item.id})} 
              deleteRoute={route('article.delete', {id: item.id})}
            />
          </td>
        </tr>
      )
  })

  const handleFilter = (e) => {
    setFilter(e.target.value);
  }

  const handleNewArticleButton = () => {
    router.get(route('article.new'));
  }

  return (
    <AuthenticatedLayout 
      user={auth.user}
      header={<LayoutHeader title='Listado de artículos' />}
    >
      <Head title='Listado de artículos'/>

      <div className='py-2 px-4 grid grid-cols-1 md:grid-cols-4'>
        <input type='text' placeholder='Buscar...'
          className='m-3 dark:bg-slate-800 dark:text-gray-300 rounded-md md:grow md:col-span-3' 
          onChange={handleFilter}
          value={filter}/>
        <button className='normalButton col-auto' onClick={handleNewArticleButton}>Nuevo</button>
      </div>

      <div className='tableResponsive'>
        <table>
          <thead>
            <tr>
              <th>LM</th>
              <th>EAN</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {articlesList}
          </tbody>
        </table>
      </div>

    </AuthenticatedLayout>
  )
}