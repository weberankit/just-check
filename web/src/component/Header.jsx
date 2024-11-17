const Header = () => {
    const menuItems = ["What we do", "Who we are", "About us", "Know more about us"];
  
    return (
      <header className="bg-black p-4 text-white">
        <ul className="flex justify-between w-[80%] m-auto">
          <li>
            <h1>TCS</h1>
          </li>
          {menuItems.map((item, index) => (
            <li key={index}>
              <h2>{item}</h2>
            </li>
          ))}
        </ul>
      </header>
    );
  };
  
  export default Header;
  