import React, { useState } from 'react';
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 1, value: 'Women', link: '/women' },
    { id: 2, value: 'Mens', link: '/man'  },
    { id: 3, value: 'Accessories', link: '/accessories'  },
    { id: 4, value: 'Electronics', link: '/electronics'  },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className={`dropdown-header ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption.value : 'Select Category'}
        <BiSearchAlt2 style={{padding:'0 5px',fontSize:'30px'}} className={`${isOpen ? 'rotate' : ''}`} />
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option) => (
            <li key={option.id} onClick={() => handleOptionClick(option)}>
              {option.link ? <Link to={option.link}>{option.value}</Link> : option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
