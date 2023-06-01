import Link from 'next/link'
import { BsShop, BsFillHandbagFill, BsCartFill } from 'react-icons/bs'
import { RiDashboard2Fill, RiSettings4Fill } from 'react-icons/ri'
import { useRouter } from 'next/router'
export default function Nav() {
    const inactive = 'flex items-center gap-1 p-4'
    const active = inactive + ` flex items-center gap-1 bg-white text-blue-900 rounded-l-lg`
    const router = useRouter();
    console.log(router);
    const { pathname } = router;
    return (
        <aside className='bg-blue-900 text-white font-bold h-screen pt-4 pl-4 pb-4'>
            <Link href={'/'} className='mb-4 pr-2 flex'>
                <div className='flex items-center gap-1'>
                    <BsShop className='text-2xl font-bold' />
                    <h1 className="adminPanelLogo-name">Ecommerce-admin</h1>
                </div>
            </Link>
            <nav className='flex flex-col gap-4 my-6'>
                <Link href={'/'} className='flex flex-col p-2 pr-0 pl-0'>
                    <div className={pathname === '/' ? active : inactive}>
                        <RiDashboard2Fill className='text-2xl' />
                        <h1 className="adminPanelLogo-name font-bold">Dashboard</h1>
                    </div>
                </Link>
                <Link href={'/products'}>
                    <div className={pathname.includes('/products') ? active : inactive}>
                        <BsFillHandbagFill className='text-2xl' />
                        <h1 className="adminPanelLogo-name">Products</h1>
                    </div>
                </Link>
                <Link href={'/order'}>
                    <div className={pathname.includes('/order') ? active : inactive}>
                        <BsCartFill className='text-2xl' />
                        <h1 className="adminPanelLogo-name">Order</h1>
                    </div>
                </Link>
                <Link href={'/setting'}>
                    <div className={pathname.includes('/setting') ? active : inactive}>
                        <RiSettings4Fill className='text-2xl' />
                        <h1 className="adminPanelLogo-name">Setting</h1>
                    </div>
                </Link>
            </nav>
        </aside>
    )
}
