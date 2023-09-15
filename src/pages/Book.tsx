import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

interface Obj {
  hello: string;
}

export default function Book() {
  const { id } = useParams();
  const obj: Obj = useOutletContext();
  return (
    <div>
      Book {id} {obj.hello}
    </div>
  );
}
