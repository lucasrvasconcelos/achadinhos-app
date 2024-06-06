import { apiType } from '../pages/shop'
import { SearchProducts } from './SearchProducts'

interface HeaderProps {
  api_: apiType
}

export function Header({ api_ }: HeaderProps) {
  return (
    <header className="fixed w-full bg-white z-10 top-0 left-0 p-2 lg:flex lg:items-center lg:justify-center xl:gap-16">
      <div className="flex gap-2 justify-center items-center ">
        <div className="max-w-16 h-full flex justify-center items-center  overflow-hidden 2xl:max-w-28">
          <img
            className="rounded-md h-full w-full"
            src={
              api_.emp_logo
                ? api_.emp_logo
                : api_.emp_logo_notfound
                  ? api_.emp_logo_notfound
                  : 'https://cdn-icons-png.flaticon.com/512/2748/2748558.png'
            }
            alt=""
          />
        </div>

        <div>
          <h3 className="font-bold text-lg 2xl:text-4xl">
            {api_.emp_nome ? api_.emp_nome : 'Sem nome'}
          </h3>
          <p
            title={api_.emp_description ? api_.emp_description : ''}
            className="px-2 2xl:text-2xl"
          >
            {api_.emp_description ? api_.emp_description : ''}
          </p>
        </div>
      </div>

      <SearchProducts api_={api_} />
    </header>
  )
}
