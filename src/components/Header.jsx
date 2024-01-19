import { ReactComponent as BACK_ICON } from "../assets/icon/chevron.svg";

function Header({ title, isBack = false , onExitClick }) {
  return (
    <header className="border-b py-2 flex justify-center">
      {isBack && (
        <button className="px-4 absolute left-0" onClick={()=>onExitClick()}>
          <BACK_ICON className="w-3" />
        </button>
      )}
      <h1 className="text-md">{title}</h1>
    </header>
  );
}

export default Header;
