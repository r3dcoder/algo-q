import classNames from "classnames";

interface MenuProps {
	data: any;
	className?: string;
}

const HeaderMenu: React.FC<MenuProps>= ({ data, className }) => {
    return (
        <nav className={classNames(` text-gray-700   w-full text-lg   `, className)}>
            {data?.map((item: any) => (
                <div className="hover:bg-blue-200 cursor-pointer" key={item.id}>{item.title}</div>
            ))}
        </nav>
    )
}

export default HeaderMenu
