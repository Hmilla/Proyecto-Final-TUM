import { Menu, Transition } from "@headlessui/react";
import { BiSolidChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function limpiartexto(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"").replace(/\s+/g, '').toLowerCase();
}


export default function ItemHeader({ item, list_values}) {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="w-full flex items-center gap-2 px-1 py-1 text-lg font-semibold text-white ">
            {item}
            <div>
              <BiSolidChevronDown />
            </div>
          </Menu.Button>
        </div>

        <Transition
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 scale-y-0 origin-top"
          enterTo="opacity-100 scale-y-100 origin-top"
          leave="transition ease-in duration-150 transform"
          leaveFrom="opacity-100 scale-y-100 origin-top"
          leaveTo="opacity-0 scale-y-0 origin-top"
        >
          <Menu.Items className=" md:absolute md:whitespace-nowrap w-full md:w-auto  left-0 z-10 md:mt-2 inline-block bg-white shadow-lg">
            <div className="py-1">
              {list_values.map((value) => (
                <Link key={value} to={`/${limpiartexto(item)}/${limpiartexto(value)}`}>
                  <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-300 text-gray-900" : "text-gray-800",
                        "block px-4 py-2 text-sm font-semibold"
                      )}
                    >
                      {value}
                    </a>
                  )}
                </Menu.Item>
                </Link>
                
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
