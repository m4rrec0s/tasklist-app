"use client";

import FormData from "./form-data";
import { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  return <>{isOpen ? <FormData /> : null}</>;
};

export default Modal;
