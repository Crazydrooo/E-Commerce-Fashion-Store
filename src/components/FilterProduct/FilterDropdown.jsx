import { useState } from "react";

const useDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return { isDropdownOpen, toggleDropdown, setIsDropdownOpen };
};

export default useDropdown;
