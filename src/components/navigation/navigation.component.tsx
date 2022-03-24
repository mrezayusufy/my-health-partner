import Logo from '../logo/logo'
import MenuItem from '../menuitem/menuitem'

const Navigation = () => {
  return (
    <nav className="flex items-center gap-6 justify-between mt-3">
      <div className="w-60 flex px-3 pb-2">
        <Logo />
      </div>
      <div className="flex gap-7 py-3">
        <MenuItem title="Learning" />
        <MenuItem title="living" />
        <MenuItem title="about us" />
      </div>
      <div className="flex-1 h-10 w-9 my-1 ">
        <div className="text-4xl -scale-x-100 ml-auto flex-grow origin-center w-7 hover:cursor-pointer">
          ⌕
        </div>
      </div>
      <div className="font-bold hover:text-cyan-400">FA</div>
    </nav>
  )
}
export default Navigation
