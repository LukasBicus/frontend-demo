import { useLoading } from '@/components/common/LoadingProvider'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React, { useEffect } from 'react'

export const getServerSideProps: GetServerSideProps<
  {
    pokemon: {
      id: string
    }
  },
  { id: string }
> = async (context) => {
  console.log(context.params?.id)
  if (!context.params?.id) {
    throw new Error('Not found')
  }
  return {
    props: {
      pokemon: { id: context.params?.id },
    },
  }
}

const DetailPage = ({
  pokemon,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { hideLoading } = useLoading()
  useEffect(() => {
    hideLoading()
  }, [hideLoading])
  return <div>{JSON.stringify(pokemon)}</div>
}

export default DetailPage
