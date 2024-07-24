"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    if (search) router.push(`/list?name=${search}`);
  };
  return (
    <form
      onSubmit={handleSearch}
      className=" flex gap-4 items-center bg-gray-100 p-2 rounded-md flex-1"
    >
      <input
        type="text"
        placeholder="Search"
        name="search"
        className=" flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <Image alt="search" src="/search.png" width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar;
