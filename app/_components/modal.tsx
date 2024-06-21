"use client";

import { useSession } from "next-auth/react";
import FormData from "./form-data";

const Modal = () => {
  const { data } = useSession();
  console.log(data);

  return (
    <>
      {(data?.user) && 
     (!data?.age ||
      !data?.gender ||
      !data?.height ||
      !data?.weight) ? (
        <FormData />
      ) : null}
    </>
  );
};

export default Modal;
