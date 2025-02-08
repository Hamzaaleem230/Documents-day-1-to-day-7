import { client } from "@/sanity/lib/client";
import { Product } from "@/interface";
import BreadcrumbShop from "@/components/shop-page/BreadcrumbShop";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MobileFilters from "@/components/shop-page/filters/MobileFilters";
import Filters from "@/components/shop-page/filters/page"; // Correct import
import { FiSliders } from "react-icons/fi";
import ProductCard from "@/components/common/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PRODUCTS_PER_PAGE = 9;

type SortOption = "most-popular" | "low-price" | "high-price";

async function getProducts(sort?: SortOption) {
  const baseQuery = `*[_type == "products"]`;
  
  let sortPart = '';
  switch (sort) {
    case 'low-price':
      sortPart = '| order(price asc)';
      break;
    case 'high-price':
      sortPart = '| order(price desc)';
      break;
    default:
      sortPart = '| order(_createdAt desc)'; // Default sort by newest
  }

  const query = `${baseQuery} ${sortPart} {
    _id,
    name,
    price,
    image,
    discountPercent,
    "new": new,
    colors,
    sizes
  }`;

  const products = await client.fetch(query);
  return products;
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: { 
    page?: string;
    sort?: SortOption;
    category?: string;
  }
}) {
  const currentPage = Number(searchParams.page) || 1;
  const sort = searchParams.sort as SortOption || "most-popular";
  const category = searchParams.category;

  let products = await getProducts(sort);

  // Apply category filter if specified
  if (category) {
    products = products.filter((product: Product) => 
      product.category === category
    );
  }

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  // Get current page products
  const currentProducts = products.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbShop />
        <div className="flex md:space-x-5 items-start">
          <div className="hidden md:block min-w-[295px] max-w-[295px] border border-black/10 rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-bold text-black text-xl">Filters</span>
              <FiSliders className="text-2xl text-black/40" />
            </div>
            <Filters />
          </div>
          <div className="flex flex-col w-full space-y-5">
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-2xl md:text-[32px]">
                  {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Products'}
                </h1>
                <MobileFilters />
              </div>
              <div className="flex flex-col sm:items-center sm:flex-row">
                <span className="text-sm md:text-base text-black/60 mr-3">
                  Showing {PRODUCTS_PER_PAGE * (currentPage - 1) + 1}-
                  {Math.min(currentPage * PRODUCTS_PER_PAGE, totalProducts)} of {totalProducts} Products
                </span>
                <div className="flex items-center">
                  Sort by:{" "}
                  <Select defaultValue={sort}>
                    <SelectTrigger className="font-medium text-sm px-1.5 sm:text-base w-fit text-black bg-transparent shadow-none border-none">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="most-popular">Most Popular</SelectItem>
                      <SelectItem value="low-price">Low Price</SelectItem>
                      <SelectItem value="high-price">High Price</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {currentProducts.map((product: Product) => (
                <ProductCard key={product._id} id={product._id} data={product} />
              ))}
            </div>
            {totalPages > 1 && (
              <>
                <hr className="border-t-black/10" />
                <Pagination className="justify-between">
                  <div className="flex items-center space-x-4">
                    <PaginationPrevious
                      href={`?page=${Math.max(1, currentPage - 1)}${sort ? `&sort=${sort}` : ''}${category ? `&category=${category}` : ''}`}
                      className="border border-black/10"
                    />
                    <span className="text-sm text-black/60">
                      Page {currentPage} of {totalPages}
                    </span>
                  </div>
                  <PaginationContent>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <PaginationItem key={pageNum}>
                        <PaginationLink
                          href={`?page=${pageNum}${sort ? `&sort=${sort}` : ''}${category ? `&category=${category}` : ''}`}
                          className={`text-black/50 font-medium text-sm ${
                            currentPage === pageNum ? "font-bold" : ""
                          }`}
                        >
                          {pageNum}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                  </PaginationContent>
                  <PaginationNext
                    href={`?page=${Math.min(totalPages, currentPage + 1)}${sort ? `&sort=${sort}` : ''}${category ? `&category=${category}` : ''}`}
                    className="border border-black/10"
                  />
                </Pagination>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}