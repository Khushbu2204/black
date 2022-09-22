import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import httpCommon from '../../http-common'

function ProductDetailsUpdate() {
  const location = useLocation()
  const [id, setid] = useState(0)
  const [productName, setname] = useState('')
  const [productDesc, setdesc] = useState('')
  const [price, setprice] = useState(0)
  const [reorderLevel, setreorder] = useState(0)
  const [stockOnHand, setStock] = useState(0)
  const [supplierId, setSupplierId] = useState(0)
  const [categoryId, setCategoryId] = useState(0)
  const [imageFile, setImageFile] = useState()

  // used to navigate
  const navigate = useNavigate()

  useEffect(() => {
    console.log('in use effect')
    const { id } = location.state
    const { product } = location.state
    setid(id)
    setname(product.productName)
    setdesc(product.productDesc)
    setprice(product.price)
    setreorder(product.reorderLevel)
    setStock(product.stockOnHand)
    setSupplierId(product.supplier.id)
    setCategoryId(product.category.id)
  }, [])

  const uploadImageofProduct = (event) => {
    event.preventDefault()
    const body = new FormData()

    // add the file
    body.set('imageFile', imageFile)
    console.log('in upload product image')
    httpCommon
      .post('/image/product/upload/' + id, body, {
        headers: { Authorization: `Bearer ${sessionStorage['jwt']}` },
        'Content-Type': 'multipart/form-data',
      })
      .then((response) => {
        console.log(response.data)
        toast.success('successfully added Image')
      })
      .catch((error) => {
        toast.error('error while uploading IMAGE ', error)
      })
  }

  const handleUpdate = (event) => {
    event.preventDefault()

    if (productName.length === 0) {
      toast.error('please enter Product Name')
    } else if (productDesc.length === 0) {
      toast.error('please enter Product description')
    } else if (price.length === 0) {
      toast.error('please enter price')
    } else if (reorderLevel.length === 0) {
      toast.error('please enter reorder')
    } else if (stockOnHand.length === 0) {
      toast.error('please enter stock')
    } else {
      const product = {
        productName,
        productDesc,
        price,
        reorderLevel,
        stockOnHand,
        supplierId,
        categoryId,
        // dateOfBirth,
      }
      httpCommon
        .put('/employee/product/' + id, product, {
          headers: { Authorization: `Bearer ${sessionStorage['jwt']}` },
        })
        .then((response) => {
          console.log(response.data)
          toast.success('customer details updated successfully')
          navigate('/customerlist')
        })
        .catch((error) => {
          toast.error('error while updating', error)
        })
    }
  }

  return (
    <div>
      <div className='wrapper'>
        <div
          className='container'
          style={{
            width: 500,
            marginTop: 40,
            borderStyle: 'solid',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: 'rebeccapurple',
          }}>
          <h2 className='mb-3' style={{ marginTop: 20 }}>
            Update Product
          </h2>
          <form>
            <div className='row'>
              <div className='col-lg-12' style={{ marginTop: 20 }}>
                <div className=' form-group'>
                  <label>Product Name</label>
                  <input
                    className='floating-input form-control'
                    name='productName'
                    type='text'
                    placeholder='productName'
                    value={productName}
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
              </div>

              <div className='col-lg-12' style={{ marginTop: 20 }}>
                <div className=' form-group'>
                  <label>Description</label>
                  <input
                    className='floating-input form-control'
                    name='productDesc'
                    type='text'
                    placeholder='productDesc'
                    value={productDesc}
                    onChange={(e) => setdesc(e.target.value)}
                  />
                  {/* <label>User Name</label> */}
                </div>
              </div>
              <div className='col-lg-12' style={{ marginTop: 20 }}>
                <div className=' form-group'>
                  <label>price</label>
                  <input
                    className='floating-input form-control'
                    name='price'
                    type='number'
                    min={1}
                    placeholder='price'
                    value={price}
                    onChange={(e) => setprice(e.target.value)}
                  />
                </div>
              </div>
              <div className='col-lg-12' style={{ marginTop: 20 }}>
                <div className=' form-group'>
                  <label>Reorder Level</label>
                  <input
                    className='floating-input form-control'
                    name='reorderLevel'
                    type='number'
                    min={1}
                    placeholder='reorderLevel'
                    value={reorderLevel}
                    onChange={(e) => setreorder(e.target.value)}
                  />
                </div>
              </div>
              <div className='col-lg-12' style={{ marginTop: 20 }}>
                <div className=' form-group'>
                  <label>stockOnHand</label>
                  <input
                    className='floating-input form-control'
                    name='stockOnHand'
                    type='number'
                    min={1}
                    placeholder='stockOnHand'
                    value={stockOnHand}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>
              </div>

              <div
                className='col-lg-6'
                style={{
                  marginTop: 20,
                  textDecoration: 'none',
                }}></div>
            </div>
            <div>
              <div className='mb-3'>
                <label>Select Image to UPLOAD</label>
                <input
                  onChange={(e) => {
                    // set the selected file in the state
                    setImageFile(e.target.files[0])
                  }}
                  className='form-control'
                  type='file'
                />

                <button
                  className='btn btn-outline-success'
                  style={{ marginBottom: 20, marginTop: 10 }}
                  onClick={(e) => {
                    uploadImageofProduct(e)
                  }}>
                  Upload Photo
                </button>
              </div>
            </div>
            <p />
            <button
              className='btn btn-success'
              style={{ marginBottom: 20 }}
              onClick={handleUpdate}>
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default ProductDetailsUpdate;
