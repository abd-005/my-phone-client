import React from "react";
import { useLoaderData } from "react-router";

const Phones = () => {
  const phones = useLoaderData();
  console.log(phones);
  return <div>All phones: {phones.length}</div>;
};

export default Phones;
