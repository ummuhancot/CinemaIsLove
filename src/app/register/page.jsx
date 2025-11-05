import { PageHeader } from '@/components/common/page-header/PageHeader'
import { Spacer } from '@/components/common/spacer/Spacer'
import RegisterForm from '@/components/register/RegisterForm'
import React from 'react'

const page = () => {
  return (
    <>
        <Spacer/>
        <PageHeader title= "Register"/>
        <Spacer/>
        <RegisterForm/>
        <Spacer/>
    </>
  )
}

export default page