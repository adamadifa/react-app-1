import Button from "../../components/Elements/Button"

const ProductPage = () => {
    return (
        <div className="flex justify-center py-5">
            <div className="w-full max-w-sm rounded-lg border border-gray-200 shadow bg-white">
                <a href="#">
                    <img src="/images/products/product-1.jpg" className="p-8 rounded-t-lg" alt="product image" />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight">Camera Canon EOS 520</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </a>
                </div>
                <div className="flex justify-between items-center px-5 pb-5">
                    <span className="text-xl font-bold">Rp. 1.000.000</span>
                    <Button classname="bg-blue-700 text-white">Add to Chart</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage