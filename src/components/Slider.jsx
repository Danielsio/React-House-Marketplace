import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore"
import { db } from "../firebase.config"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import Spinner from "./Spinner"
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

function Slider() {
  const [loading, setLoading] = useState(true)
  const [listings, setListings] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    const fetchListings = async () => {
      const listingsRef = collection(db, "listings")
      const q = query(listingsRef, orderBy("timestamp", "desc"), limit(5))
      const querySnap = await getDocs(q)

      let listings = []

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        })
      })
      console.log(listings)

      setListings(listings)
      setLoading(false)
    }

    fetchListings()
  }, [])

  if (loading) {
    return <Spinner />
  }

  if (listings.length === 0) {
    return <></>
  }

  return (
    listings && (
      <>
        <p className="exploreHeading">Recommended</p>

        <Swiper
          Swiper
          slidePerView={1}
          navigation={true}
          modules={[Navigation]}
        >
          {listings.map(({ data, id }) => (
            <SwiperSlide
              key={id}
              onClick={() => navigate(`/category/${data.type}/${id}`)}
            >
              <div>
                <img
                  src={data.imageUrls[0]}
                  alt={data.name}
                  style={{
                    background: "center no-repeat",
                    backgroundSize: "cover",
                  }}
                  className="swiperSlideDiv"
                />
                <p className="swiperSlideText">{data.name}</p>
                <p className="swiperSlidePrice">
                  $ {data.discountedPrice ?? data.regularPrice}{" "}
                  {data.type === "rent" && "/ month"}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    )
  )
}

export default Slider
