import { PageHeader } from '@/components/common/page-header/PageHeader'
import { Spacer } from '@/components/common/spacer/Spacer'
import ImageUploadForm from '@/components/dashboard/img/ImageUploadForm'
import React from 'react'

const page = () => {
  return (
    <div>
        <Spacer height={20} />
        <PageHeader title="Upload Images" />
        <Spacer height={20} />
        <ImageUploadForm />
        <Spacer height={20} />
    </div>
  )
}

export default page

