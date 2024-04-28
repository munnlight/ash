import React from 'react'
import './addPlace.css'
import { FaCamera } from 'react-icons/fa'

export const AddPlace = () => {
  return (

    <div className='main-con'>
      <div className='title-con'>
        <h1>БАЙРШИЛ НЭМЭХ</h1>
      </div>
      <div className='takePhoto'>
        <button type='submit' style={{ display: 'flex', alignItems: 'center', padding: '60px', border: 'none', backgroundColor: '#fff', borderRadius: '5px', cursor: 'pointer' }}>
          <FaCamera style={{ fontSize: '40px', color: '#000', marginRight: '10px' }} />
        </button>
      </div>
      <div className='submit-con'>
        <button className='submit-button'>ИЛГЭЭХ</button>
        <p className='info-text'>Санамж: Хэрэглэгч та бусдын эрүүл мэнд болоод эд хөрөнгийн хохиролд өртөхөөс сэргийлж үнэн зөв мэдээлэл оруулахыг хүсье.</p>
      </div>
    </div>
  )
}
