import React, { useState, useTransition } from 'react'
import { TbHeart, TbHeartFilled } from 'react-icons/tb'
import { BiLoaderCircle } from 'react-icons/bi'
const Wishlist = ({ id }: { id: number }) => {
  const [isLicked, setIsLicked] = useState<Boolean>(false)
  const [loading, setLoading] = useState(false)
  const handlelike = async () => {
    try {
      setLoading(true)
      //Envoi de requette dans le serveur
      isLicked ? setIsLicked(false) : setIsLicked(true)
    } catch (error) {
      console.error("Une erreur c'est produite :" + error)
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }
  return (
    <button
      onClick={handlelike}
      className="bg-none outline-0 border-0 wishlist"
    >
      {loading ? (
        <span className="loading text-color-primary">
          <BiLoaderCircle />
        </span>
      ) : isLicked ? (
        <span className=" text-color-primary">
          <TbHeartFilled />
        </span>
      ) : (
        <span className=" text-color-primary">
          <TbHeart />
        </span>
      )}
    </button>
  )
}

export default Wishlist
