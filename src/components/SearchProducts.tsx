import { Search } from 'lucide-react'
import { apiType } from '../pages/shop'

interface SearchProductsProps {
  api_: apiType
}

export function SearchProducts({ api_ }: SearchProductsProps) {
  return (
    <form action="" className="pt-2 pb-3 px-2">
      <div className="flex gap-2 items-center justify-center">
        <label htmlFor="seach">
          <Search className="text-slate-600/80 xl:size-11  xl:mt-4" />
        </label>
        <input
          type="text"
          name="seach"
          placeholder={
            api_.emp_description_search
              ? api_.emp_description_search
              : 'Busque aqui'
          }
          id="seach"
          className="w-full ring-1 ring-slate-600/80 outline-none px-1 py-1 rounded-sm placeholder:pl-1 xl:text-2xl xl:mt-4"
        />
      </div>
    </form>
  )
}
