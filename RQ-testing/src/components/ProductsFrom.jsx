import { usePostProduct } from "../hooks/queryProducts";

export const ProductsFrom = () => {
  const createProduct = usePostProduct();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const product = Object.fromEntries(data);
    createProduct.mutate({
      ...product,
      inStock: true,
    });
  };
  return (
    <form className="flex flex-col w-1/4 justify-center p-6 m-8 shadow-md self-center" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="description">Description</label>
      <input type="text" id="description" name="description" />
      <label htmlFor="price">Price</label>
      <input type="text" id="price" name="price" />
      <button>Add Product</button>
    </form>
  );
};
