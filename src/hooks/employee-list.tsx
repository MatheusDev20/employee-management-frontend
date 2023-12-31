/* eslint-disable @typescript-eslint/no-floating-promises */
import { useQuery } from '@tanstack/react-query'
import { type Employee } from '../@types/employees'
import { getEmployeeList } from '../api/employee'

type Hook = {
  data: Employee[]
  isLoading: boolean
  isError: boolean
}

type Props = {
  page: number
}
export const useEmployeeList = ({ page }: Props): Hook => {
  console.log('page', page)
  const { isLoading, isError, data } = useQuery({
    queryKey: ['employeeList'],
    keepPreviousData: true,
    queryFn: async () => {
      const employees = await getEmployeeList({ limit: 8, page })

      return employees
    },
  })

  return {
    isError,
    isLoading,
    data: data ?? [],
  }
}
