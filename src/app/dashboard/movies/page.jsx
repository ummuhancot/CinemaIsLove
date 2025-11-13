import { PageHeader } from '@/components/common/page-header/PageHeader'
import { Spacer } from '@/components/common/spacer/Spacer'
import MovieList from '@/components/dashboard/movie/MovieList'
import React from 'react'



const page = () => {
  return (
    <div>
        <Spacer height={20} />
        <h1>Dashboard Movies Page</h1>
        <Spacer height={20} />
        <PageHeader title="Movies" />
        <Spacer height={20} />
        <MovieList />
    </div>
  )
}

export default page