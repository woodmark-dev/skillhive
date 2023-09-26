import { InView } from "react-intersection-observer";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { menu } from "../content";

export default function Nav() {
  return (
    <InView>
      {({ inView, ref }) => (
        <div ref={ref}>
          <div
            style={{
              position: inView ? "static" : "fixed",
              backgroundImage: "linear-gradient(to right, #abd1b5, #3943b7)",
            }}
            ref={ref}
            className="navbar z-20 text-[#edf4ed] md:pr-10 h-16"
          >
            <div className="navbar-start">
              <a className="btn btn-ghost normal-case text-xl text-blue-900">
                SkillHive
              </a>
            </div>
            <div className="navbar-end hidden lg:flex font-bold tracking-wide">
              <ul className="menu menu-horizontal px-1">
                {menu.map((item, i) => (
                  <li key={i}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="navbar-end lg:hidden">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <HiBars3BottomLeft className="w-6 h-6" />
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-[#3943b7] font-bold"
                >
                  {menu.map((item, i) => (
                    <li key={i}>
                      <a href={item.link}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </InView>
  );
}
