import Logo from '../logo/logo'
import MenuItem from '../menuitem/menuitem'
import Heart from '/public/svgs/heart.svg'
import Disease from '/public/svgs/disease.svg'
import HealthyHeart from '/public/svgs/healthyheart.svg'
import HeartSecond from '/public/svgs/heart2.svg'
import Finger from '/public/svgs/finger.svg'
interface iIconList {
  icon: any
  active?: boolean
}
const iconList: Array<iIconList> = [
  {
    icon: <Heart height={40} width={40} />,
    active: true,
  },
  {
    icon: <Finger height={40} width={40} />,
    active: false,
  },
  {
    icon: <Disease height={40} width={40} />,
    active: false,
  },
  {
    icon: <HeartSecond height={40} width={40} />,
    active: false,
  },
  {
    icon: <HealthyHeart height={40} width={40} />,
    active: false,
  },
  {
    icon: <HealthyHeart height={40} width={40} />,
    active: false,
  },
  {
    icon: <HealthyHeart height={40} width={40} />,
    active: false,
  },
  {
    icon: <HealthyHeart height={40} width={40} />,
    active: false,
  },
]

const Navigation = () => {
  return (
    <nav className="flex items-center gap-6 justify-between bg-white shadow-lg w-full px-8 py-3">
      <div className="w-60 flex px-3 ">
        <Logo />
      </div>
      <div className="flex gap-7 py-3">
        <MenuItem title="Learning" />
        <MenuItem title="living" />
        <MenuItem title="about us" />
      </div>
      <div className="grid grid-flow-col auto-cols-auto flex-1 justify-end">
        {iconList
          .map(({ icon, active }, index) => (
            <div className="flex w-8">
              <button
                key={index}
                className={`inline-flex bg-white w-9 h-9 outline hover:outline-2 outline-cyan-400 rounded-full px-1 ${
                  active === true ? 'outline-2' : 'outline-1 '
                }`}
              >
                {icon}
              </button>
            </div>
          ))
          .reverse()}
      </div>
      <div className="grid align-center h-7 border-l-2">
        <div className="text-[35px] -scale-x-100 leading-none hover:text-cyan-400 ml-auto flex-grow origin-center pr-3 hover:cursor-pointer ">
          ⌕
        </div>
      </div>
      <div className="font-bold hover:text-cyan-400">FA</div>
    </nav>
  )
}
export default Navigation
