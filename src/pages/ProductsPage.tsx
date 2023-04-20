import React, { useContext } from 'react'
import { Loader } from '../components/Loader'
import { useProducts } from '../hooks/products'
import { Product } from '../components/Product'
import { ErrorMessege } from '../components/ErrorMessege'
import { Modal } from '../components/Modal'
import { CreateProduct } from '../components/CreateProduct'
import { ModalContext } from '../context/ModalContext'
import { IProduct } from '../models'

export function ProductPage() {

    const { loading, error, products, addProduct } = useProducts()
    const { modal, open, close } = useContext(ModalContext)
    const createHandler = (product: IProduct) => {
        close()
        addProduct(product)
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader />}
            {error && <ErrorMessege error={error} />}
            {products.map(products => <Product product={products} key={products.id} />)}


            {modal && <Modal title='Create new product' onClose={close}>
                <CreateProduct onCreate={createHandler} />
            </Modal>}

            <button className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text2xl px-4 py-2'
                onClick={open}
            >+</button>

        </div>

    )
}