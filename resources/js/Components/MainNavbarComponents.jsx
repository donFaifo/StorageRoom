import ResponsiveNavLink from "./ResponsiveNavLink";
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NavbarLink({icon, name, routeTo}) {
  return (
      <NavLink href={route(routeTo)} active={route().current(routeTo)}>
          <FontAwesomeIcon icon={icon} className="mr-3"/>{name}
      </NavLink>
  )
}

export function ResponsiveNavbarLink({icon=null, name, routeTo}) {
  return (
      <ResponsiveNavLink href={route(routeTo)} active={route().current(routeTo)}>
          <FontAwesomeIcon icon={icon} className="mr-3"/>{name}
      </ResponsiveNavLink>
  )
}

/** 
* Use Dropdown.Link for children
*/
export function NavbarDropdown({triggerText, children}) {
  return (
      <Dropdown>
          <Dropdown.Trigger>
              <span className="inline-flex rounded-md">
                  <button
                      type="button"
                      className="
                          inline-flex 
                          items-center 
                          px-3 py-2 mt-4
                          border border-transparent 
                          text-sm leading-4 
                          font-medium rounded-md 
                          text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 
                          focus:outline-none transition ease-in-out duration-150 h-full"
                  >
                      {triggerText}

                      <svg
                          className="ml-2 -mr-0.5 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                      >
                          <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                          />
                      </svg>
                  </button>
              </span>
          </Dropdown.Trigger>

          <Dropdown.Content align='left'>
              {children}
          </Dropdown.Content>
      </Dropdown>
  )
}