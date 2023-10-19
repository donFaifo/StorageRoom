export default function LayoutHeader({ title, className = '' }) {
  return <h2 className={"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight " + className}>{title}</h2>
}