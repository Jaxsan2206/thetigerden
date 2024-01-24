// import { ProductVariant } from "@/pages/store/data_v2";
// import { useSearchParams } from "next/navigation";
// import { useRouter } from "next/router";
// import { useTransition } from "react";
// import { addItem } from "./actions";

// const AddToCart = ({ variants, availableForSale }) => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [isPending, startTransition] = useTransition();
//   const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
//   const variant = variants.find((variant: ProductVariant) =>
//     variant.selectedOptions.every(
//       (option) => option.value === searchParams.get(option.name.toLowerCase())
//     )
//   );
//   const selectedVariantId = variant?.id || defaultVariantId;
//   const title = !availableForSale
//     ? "Out of stock"
//     : !selectedVariantId
//     ? "Please select options"
//     : undefined;
  

//   return (
//     <>
//       {title}
//       <button
//         aria-label="Add item to cart"
//         disabled={isPending || !availableForSale || !selectedVariantId}
//         title={title}
//         onClick={async () => {
//           // Safeguard in case someone messes with `disabled` in devtools.
//           if (!availableForSale || !selectedVariantId) return;
//             const response = await fetch(`/api/buy?product=${selectedVariantId}&stripepriceid=${variant.stripePriceId}`)
//             const resJson = await response.json();
//             router.push(resJson.url)
//           // startTransition(async () => {
//           // const error = await addItem(selectedVariantId);

//           // if (error) {
//           // // Trigger the error boundary in the root error.js
//           // throw new Error(error.toString());
//           // }

//           // router.refresh();
//           // });
//                   }}
//       >
//         <div></div>
//         <span>{availableForSale ? "Add To Cart" : "Out Of Stock"}</span>
//       </button>
//     </>
//   );
// };

// export default AddToCart;
