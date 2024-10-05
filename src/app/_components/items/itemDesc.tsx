"use client";
import React from 'react'
import parse from 'html-react-parser';

type ItemDescProps = {
  description: string;
}

const ItemDesc: React.FC<ItemDescProps> = ({ description }) => {
  return <p className='item-desc'>{parse(description)} </p>
}

export default ItemDesc;
