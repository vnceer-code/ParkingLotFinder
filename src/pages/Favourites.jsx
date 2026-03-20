import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toggleFavorite } from '../features/favoriteSlice'
import { setSelectedParking } from '../features/parkingSlice'
import { FiHeart, FiMapPin } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'
import Navbar from '../components/Navbar'

const Favourites = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const favorites = useSelector(state => state.favorites.favorites)

  const handleClick = (lot) => {
    dispatch(setSelectedParking(lot))
    navigate(`/parking/${lot.id}`)
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 pt-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">My Favourites</h1>

          {favorites.length === 0 ? (
            <div className="text-center text-gray-500 mt-20">
              No favourites yet. Click the ❤️ on a parking card to save it!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((lot) => (
                <div
                  key={lot.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition"
                  onClick={() => handleClick(lot)}
                >
                  <div className="relative">
                    <img src={lot.image} alt="parking" className="w-full h-40 object-cover" />
                    <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-xl font-semibold text-gray-800 shadow text-sm">
                      OMR{lot.price}/hr
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); dispatch(toggleFavorite(lot)) }}
                      className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-md shadow-md hover:scale-110 transition"
                    >
                      <FiHeart size={18} className="text-red-500 fill-red-500" />
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-base font-semibold text-gray-800">{lot.name}</h3>
                      <div className="flex items-center gap-1 text-yellow-500 text-sm">
                        <FaStar />
                        <span className="text-gray-700">3.5</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 mt-2 text-sm">
                      <FiMapPin />
                      {lot.address || '777 Sports Arena Dr, San Francisco'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Favourites