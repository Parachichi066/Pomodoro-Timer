function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow-md bg-white">
      <div className="flex items-center space-x-3">
        <img src="/tomato.png" alt="Logo" className="h-8 w-8 object-contain" />
        <span className="font-semibold text-lg">Pomodoro</span>
      </div>

      <div className="flex space-x-6 text-gray-700 font-medium">
        <li className="hover:text-black">Overview</li>
        <li className="hover:text-black">Start</li>
      </div>
    </nav>
  );
}

export default Navbar;
