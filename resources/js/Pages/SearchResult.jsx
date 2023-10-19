import LayoutHeader from '@/Components/LayoutHeader';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function SearchResult({ auth, data }) {

  console.log(data);

  const myArticlesList = data.map(item => {

    return <ResultBoard key={item.id} article={item} />
  });

  return (
    <AuthenticatedLayout 
      user={auth.user}
      header={<LayoutHeader title='Resultados de búsqueda' />}
    >
      <Head title='Resultados de búsqueda'/>

      {myArticlesList}

    </AuthenticatedLayout>
  )
}


function ResultBoard({ article }) {

  var qtTotal = 0;

  const containersList = article.containers.map(item => {
    qtTotal += item.qt;
    return <Container key={item.id} container={item}/>
  })

  const Header = () => {
    if(qtTotal != 0) {
      return (
        <div className='flex px-3 text-xs border-b dark:border-slate-600'>
          <div className=' w-2/3'>Contenedor</div>
          <div className=' w-2/3'>Dirección</div>
          <div className='w-1/3 text-end'>
            <span className='text-center'>Cantidad</span>
          </div>
        </div>
      )
    }
  }

  const Footer = () => {
    if(qtTotal != 0) {
      return (
        <div className='flex px-3 pt-3 border-t dark:border-slate-600 place-content-end font-bold'>
          <div className=' w-2/3'>TOTAL</div>
          <div className='w-1/3 text-end'>
            <span className='text-center'>{qtTotal}</span>
          </div>
        </div>
      )
    } else {
      return (
        <div className='flex px-3 pt-3'>
          <div className=' w-2/3'>No hay stock almacenado</div>
        </div>
      )
    }
  }

  return (
    <div className='p-3 mb-6 bg-white shadow-md dark:bg-slate-700 rounded-lg'>
      <div className='flex flex-col md:flex-row'>
        <div className='p-1 font-bold'>{article.description}</div>
        <div className='text-xs text-gray-400 flex items-center pl-1 md:pt-1 md:pl-4'>{article.lm} - {article.ean}</div>
      </div>
      <div className='px-3 pb-3 mt-4 mb-2'>
        <Header />
        {containersList}
        <Footer />
      </div>
    </div>  
  )
}

function Container({ container }) {  
  return (
    <div className='flex p-3 hover:dark:bg-slate-600 cursor-pointer'>
      <div className=' w-2/3'>{container.container_number}</div>
      <div className=' w-2/3'>{container.location_name}</div>
      <div className='w-1/3 text-end'>
        <span className='text-center'>{container.qt}</span>
      </div>
    </div>
  )
}



