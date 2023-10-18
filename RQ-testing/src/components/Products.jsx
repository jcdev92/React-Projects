import {
  useGetProducts,
  useUpdateProduct,
  useDeleteProduct,
} from "../hooks/queryProducts";
import { ProductsFrom } from "./ProductsFrom";

export const Products = () => {
  const { data: products, isError, isLoading, error } = useGetProducts();
  const deleteProduct = useDeleteProduct();
  const updateProduct = useUpdateProduct();

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full justify-around my-6">
        {products.map(({ id, name, price, description, inStock }) => (
          <div
            key={id}
            className="flex flex-col gap-2 shadow-md rounded-sm p-6"
          >
            <h1>Products</h1>
            <h2>Name: {name}</h2>
            <p>Description: {description}</p>
            <h2>Name: {name}</h2>
            <p>Description: {description}</p>
            <p>Price: ${price}</p>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id={id}
                checked={inStock}
                onChange={(e) =>
                  updateProduct.mutate({
                    id,
                    inStock: e.target.checked,
                  })
                }
              />
              <label htmlFor={id}>inStock</label>
            </div>
            <button onClick={() => deleteProduct.mutate(id)}>Delete</button>
          </div>
        ))}
      </div>
      <ProductsFrom />
    </div>
  );
};
