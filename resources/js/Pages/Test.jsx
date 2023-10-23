import LayoutHeader from '@/Components/LayoutHeader';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Actions from '@/Components/Actions';
import { useState } from 'react';
import { router } from '@inertiajs/react';

export default function Articles({ auth, request }) {

  console.log(request);

  const data = 
  <>
    <div>lm: {request}</div>
    <div>ean: {request.ean}</div>
    <div>description: {request.description}</div>
  </>

  return (
    <AuthenticatedLayout 
      user={auth.user}
      header={<LayoutHeader title='Test' />}
    >
      <Head title='Test'/>

      <div>
        Pruebas: {data}
      </div>

    </AuthenticatedLayout>
  )
}