import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/header'

export type apiType = {
  emp_logo: string
  emp_logo_notfound: string
  emp_nome: string
  emp_description: string
  emp_description_search: string
}

const api_: apiType = {
  emp_logo:
    'https://cf.shopee.sg/file/linkTree2a91fc57bcbb8d6e481fd0957632c691',
  emp_logo_notfound:
    'https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png',
  emp_nome: 'Investiguei Ofertas',
  emp_description: '🛍 | As melhores ofertas e achadinhos da Shopee! ❤',
  emp_description_search: 'Busca pelos links',
}

type productsFilter = {
  product_id: number
  product_name: string
  product_url_image: string
  link_acess_shop: string
}[]

const products: productsFilter = [
  {
    product_id: 1,
    product_name: 'Aplicador pra couro cabeludo',
    product_url_image:
      'https://down-cvs-br.img.susercontent.com/sg-11134201-7rbnc-lp7tphtja2oe1c.webp',
    link_acess_shop:
      'https://s.shopee.com.br/20a4jp3LTs?pre_advisit_id=b94cchoodjdy&channel_code=MyCollection',
  },

  {
    product_id: 2,
    product_name: 'Aplicador pra couro cabeludo',
    product_url_image:
      'https://down-cvs-br.img.susercontent.com/sg-11134201-7rbnc-lp7tphtja2oe1c.webp',
    link_acess_shop:
      'https://s.shopee.com.br/20a4jp3LTs?pre_advisit_id=b94cchoodjdy&channel_code=MyCollection',
  },

  {
    product_id: 3,
    product_name: 'Aplicador pra couro cabeludo',
    product_url_image:
      'https://down-cvs-br.img.susercontent.com/sg-11134201-7rbnc-lp7tphtja2oe1c.webp',
    link_acess_shop:
      'https://s.shopee.com.br/20a4jp3LTs?pre_advisit_id=b94cchoodjdy&channel_code=MyCollection',
  },

  {
    product_id: 3,
    product_name: 'Aplicador pra couro cabeludo',
    product_url_image:
      'https://down-cvs-br.img.susercontent.com/sg-11134201-7rbnc-lp7tphtja2oe1c.webp',
    link_acess_shop:
      'https://s.shopee.com.br/20a4jp3LTs?pre_advisit_id=b94cchoodjdy&channel_code=MyCollection',
  },

  {
    product_id: 3,
    product_name: 'Aplicador pra couro cabeludo',
    product_url_image:
      'https://down-cvs-br.img.susercontent.com/sg-11134201-7rbnc-lp7tphtja2oe1c.webp',
    link_acess_shop:
      'https://s.shopee.com.br/20a4jp3LTs?pre_advisit_id=b94cchoodjdy&channel_code=MyCollection',
  },

  {
    product_id: 3,
    product_name: 'Aplicador pra couro cabeludo',
    product_url_image:
      'https://down-cvs-br.img.susercontent.com/sg-11134201-7rbnc-lp7tphtja2oe1c.webp',
    link_acess_shop:
      'https://s.shopee.com.br/20a4jp3LTs?pre_advisit_id=b94cchoodjdy&channel_code=MyCollection',
  },

  {
    product_id: 3,
    product_name: 'Aplicador pra couro cabeludo',
    product_url_image:
      'https://down-cvs-br.img.susercontent.com/sg-11134201-7rbnc-lp7tphtja2oe1c.webp',
    link_acess_shop:
      'https://s.shopee.com.br/20a4jp3LTs?pre_advisit_id=b94cchoodjdy&channel_code=MyCollection',
  },

  {
    product_id: 3,
    product_name: 'Aplicador pra couro cabeludo',
    product_url_image:
      'https://down-cvs-br.img.susercontent.com/sg-11134201-7rbnc-lp7tphtja2oe1c.webp',
    link_acess_shop:
      'https://s.shopee.com.br/20a4jp3LTs?pre_advisit_id=b94cchoodjdy&channel_code=MyCollection',
  },
]

export function Shop() {
  const [productsFilter] = useState<productsFilter>(products)

  return (
    <>
      <Header api_={api_} />
      <div className="px-2 pt-40 lg:pt-32 xl:pt-28 2xl:pt-40 ">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {productsFilter.length > 0 ? (
            productsFilter.map((product) => {
              return (
                <li
                  key={product.product_id}
                  className="ring-1 ring-slate-300 rounded-sm"
                >
                  <img src={product.product_url_image} alt="" className="" />
                  <Link
                    className="px-2 text-sm block mt-1 text-slate-600  italic"
                    to={product.link_acess_shop}
                  >
                    (N°{product.product_id}) {product.product_name}
                    <div className="flex justify-end my-2">
                      <span className="px-2 rounded-sm text-sm text-right w-fit block text-green-500 ring-1 ring-green-500 hover:bg-green-500 hover:text-white cursor-pointer not-italic	">
                        Obter link
                      </span>
                    </div>
                  </Link>
                </li>
              )
            })
          ) : (
            <span>Nada por aqui ainda!</span>
          )}
        </ul>

        <Link to={'/admin'} className="text-blue-500 font-bold hover:underline">
          Admin
        </Link>
      </div>
    </>
  )
}
