import { InView } from "react-intersection-observer";
import { HiBars3BottomLeft } from "react-icons/hi2";
import NextLink from "next/link";

export default function Nav() {
  return (
    <InView>
      {({ inView, ref }) => (
        <div ref={ref}>
          <div
            style={{
              position: inView ? "static" : "fixed",
              backgroundImage: inView
                ? "linear-gradient(to right, #1e40af, #60a5fa, #d8b4fe)"
                : "linear-gradient(to right, #1e40af, #1e40af, #1e40af)",
            }}
            ref={ref}
            className="navbar bg-gradient-to-r from-blue-800 via-blue-400 to-purple-300 z-20 text-white md:pr-10 h-20"
          >
            <div className="navbar-start">
              <a className="btn btn-ghost normal-case text-xl">SkillHive</a>
            </div>
            <div className="navbar-end hidden lg:flex font-bold tracking-wide">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#the-team">The Team</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end lg:hidden">
              {/* <a className="btn">Get started</a> */}
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <HiBars3BottomLeft className="w-6 h-6" />
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-blue-800 font-bold"
                >
                  <li>
                    <a href="#features">Features</a>
                  </li>
                  <li>
                    <a href="#the-team">The Team</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </InView>
  );
}
