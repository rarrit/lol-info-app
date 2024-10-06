"use client";
import { useEffect, useState } from 'react'
import parse from 'html-react-parser';

type ItemDescProps = {
  description: string;
}

const ItemDesc: React.FC<ItemDescProps> = ({ description }) => {
  const [isDesc, setIsDesc] = useState("");
  useEffect(() => {
    setIsDesc(description);
  }, [])
  return <p className="item-desc max-m:text-[13px]">{parse(isDesc)} </p>
}

export default ItemDesc;
