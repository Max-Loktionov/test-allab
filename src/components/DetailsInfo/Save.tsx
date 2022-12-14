import { BookmarkIcon, StarIcon } from "@heroicons/react/24/outline";

function Save() {
  return (
    <div className="text-left  text-base text-grey-text xl:text-lg">
      <p className="flex ">
        <StarIcon className=" w-5 h-5 inline stroke-2 mr-3 xl:hidden xl:w-6 xl:h-6" />
        <BookmarkIcon className=" w-5 h-5 hidden mr-4 stroke-2 xl:inline xl:w-6 xl:h-6" />
        <span>Save to my list</span>
      </p>
    </div>
  );
}
export default Save;
