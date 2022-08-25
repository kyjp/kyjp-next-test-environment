
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Kwarg } from 'types/types'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'localhost'

export const useQueryKwargs = () => {
  const getKwargs = async () => {
    const { data } = await axios.get<Kwarg[]>(
      `${API_URL}/api/kwargs/`
    )
    return data
  }
  return useQuery<Kwarg[], Error>({
    queryKey: ['kwargs'],
    queryFn: getKwargs,
    staleTime: Infinity,
  })
}
