import {
  AiFillMail,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillPhone,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="footer items-center justify-between text-lightNuetral p-4 bg-gradient-to-r from-darkNuetral to-primaryColor">
      <div className="flex items-center justify-between order-1">
        <div>
          <a className="btn btn-ghost normal-case text-xl">SkillHive</a>
        </div>
      </div>
      <div className="md:order-2 order-3">
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end md:order-3 order-2">
        <a
          href="https://web.facebook.com/SkillHive365"
          target="_blank"
          className="cursor-pointer"
        >
          <AiFillFacebook className="w-7 h-7" />
        </a>
        <a
          href="https://twitter.com/skillhive365"
          target="_blank"
          className="cursor-pointer"
        >
          <AiFillTwitterSquare className="w-7 h-7" />
        </a>
        <a href="mailto: skillhive365@gmail.com" className="cursor-pointer">
          <AiFillMail className="w-7 h-7" />
        </a>
        <a href="tel: +2349066642998" className="cursor-pointer">
          <AiFillPhone className="w-7 h-7" />
        </a>
      </div>
    </footer>
  );
}
