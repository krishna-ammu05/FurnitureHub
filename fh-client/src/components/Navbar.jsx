import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/img/logo.jpg';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const Linksdata = [
    { title: 'Home', path: '/' },
    { title: 'All Categories', hasDropdown: true }
  ];
  

  const furnitureCategories = [
    { title: 'LivingRoomFurniture', path: '/LivingRoomFurniture' },
    { title: 'BedRoomFurniture', path: '/BedRoomFurniture' },
    { title: 'OutDoorFurniture', path: '/OutDoorFurniture' },
    { title: 'OfficeFurniture', path: '/OfficeFurniture' },
    { title: 'KitchenFurniture', path: '/KitchenFurniture' },
  ];

  return (
    <div className="w-full">
      {/* Navbar Section */}
      <div className="w-full h-20 shadow-lg bg-white flex justify-between items-center px-8 md:px-10 relative">
        <div className="flex items-center space-x-5">
          <img src={Logo} alt="logo" className="h-12 w-12 rounded-full" />
          <span className="text-2xl font-bold text-gray-700">Furniture Hub</span>
        </div>

        <div className="relative flex items-center space-x-8">
          {Linksdata.map((link, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => link.hasDropdown && setDropdownOpen(true)}
              onMouseLeave={() => link.hasDropdown && setDropdownOpen(false)}
            >
              <NavLink
                to={link.path || '#'}
                className="text-lg font-semibold text-gray-700 py-3 px-5 hover:text-gray-900 hover:bg-gray-400 transition duration-200"
              >
                {link.title}
              </NavLink>

              {/* Dropdown Menu */}
              {link.hasDropdown && isDropdownOpen && (
                <div className="absolute left-0 mt-2 bg-white shadow-xl rounded-md w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col">
                    {furnitureCategories.map((category, idx) => (
                      <NavLink
                        key={idx}
                        to={category.path}
                        className="text-gray-700 py-2 px-4 hover:bg-gray-100 font-semibold rounded-md transition duration-150"
                      >
                        {category.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* {showLogin && (
                <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
                    <div className='h-[55%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
                        <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
                            <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
                                <h1 className='w-1/2 text-left text-xl my-6 font-bold text-purple-500'>Login</h1>
                                <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowLogin(!showLogin) }}>
                                    <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                                </div>
                            </div>
                            <form className='h-[70%] w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handleLogin}>
                                <input ref={emailRef} type="email" name="" id="email" placeholder='Email' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                                <input ref={passwordRef} type="password" name="" id="password" placeholder='Password' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                                <button type="submit" className="w-full h-[3rem]  shadow-lg shadow-gray-400 hover:shadow-purple-400 bg-purple-500 text-white rounded-sm outline-none">Login</button>
                            </form>
                            <div className="h-[10%] w-[80%] flex justify-center items-start">
                                <p className="cursor-pointer text-purple-500 hover:text-purple-600" onClick={switchAuth}>Register ?</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
            } */}
    </div>
    
  );
};

export default Navbar;