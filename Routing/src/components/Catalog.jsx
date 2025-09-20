
import {

  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'

import { ChevronDownIcon } from '@heroicons/react/20/solid'





import { useEffect, useState } from "react"
import CatalogItem from "./CatalogItem"
import { Link, useSearchParams } from 'react-router'

// const products = [
//   {
//     id: 1,
//     name: 'Earthen Bottle',
//     href: '#',
//     price: '$48',
//     imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
//     imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
//   },
//   {
//     id: 2,
//     name: 'Nomad Tumbler',
//     href: '#',
//     price: '$35',
//     imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
//     imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
//   },
//   {
//     id: 3,
//     name: 'Focus Paper Refill',
//     href: '#',
//     price: '$89',
//     imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
//     imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
//   },
//   {
//     id: 4,
//     name: 'Machined Mechanical Pencil',
//     href: '#',
//     price: '$35',
//     imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
//     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
//   },
//   {
//     id: 5,
//     name: 'Focus Card Tray',
//     href: '#',
//     price: '$64',
//     imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-05.jpg',
//     imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
//   },
//   {
//     id: 6,
//     name: 'Focus Multi-Pack',
//     href: '#',
//     price: '$39',
//     imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-06.jpg',
//     imageAlt: 'Stack of 3 small drab green cardboard paper card refill boxes with white text.',
//   },
//   {
//     id: 7,
//     name: 'Brass Scissors',
//     href: '#',
//     price: '$50',
//     imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-07.jpg',
//     imageAlt: 'Brass scissors with geometric design, black steel finger holes, and included upright brass stand.',
//   },
//   {
//     id: 8,
//     name: 'Focus Carry Pouch',
//     href: '#',
//     price: '$32',
//     imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-08.jpg',
//     imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
//   },
// ]

const sortOptions = [
  { name: 'All', href: '/catalog', current: true },
  { name: 'Best Rating', href: '/catalog?topRating=rating=4', current: false },
  { name: 'popular', href: '/catalog?ratingCount=100', current: false },
  { name: 'Price: Low to High', href: '/catalog?sortBy=price&dir=asc', current: false },
  { name: 'Price: High to Low', href: '/catalog?sortBy=price&dir=desc', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams()


  const [products, setProducts]=useState([])

  const [displayProducts, setDisplayProducts]=useState([])

useEffect(()=>{
fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(result=>{
  setProducts(result)
})
},[])

useEffect(()=>{
  const filter= Object.fromEntries(searchParams)
  

  if(filter.sortBy){
    setDisplayProducts([...products].sort((p1,p2)=>filter.dir==='asc' ? p1.price - p2.price : p2.price-p1.price))
  }else{
    setDisplayProducts([...products])
  }

},[products, searchParams])


  return (

    <div className="bg-white">

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        
       <Menu as="div" className="relative inline-block text-left">
                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                </MenuButton>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <Link
                          to={option.href}
                          className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            'block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden',
                          )}
                        >
                          {option.name}
                        </Link>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {displayProducts.map((product) => (
         
            <CatalogItem product={product} key={product.id}/>

          ))}
        </div>
      </div>
    </div>
  )
}
