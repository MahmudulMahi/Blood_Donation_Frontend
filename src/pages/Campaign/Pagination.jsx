import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPrevClick, onNextClick, onPageClick }) => {
  const renderPageNumbers = () => {
    const visiblePages = 2; // Number of visible page numbers on each side of the current page
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === 2 ||
        i === totalPages ||
        (i >= currentPage - visiblePages && i <= currentPage + visiblePages)
      ) {
        pages.push(
          <button
            key={i}
            onClick={() => onPageClick(i)}
            className={`pagination-number ${currentPage === i ? "bg-brandPrimary" : "bg-white shadow border"} text-black h-8 w-8 mx-1`}
          >
            {i}
          </button>
        );
      } else if (
        (currentPage - visiblePages > 2 && i === 3) ||
        (currentPage + visiblePages < totalPages - 1 && i === totalPages - 2)
      ) {
        pages.push(
          <span key={i} className="pagination-number">
            ...
          </span>
        );
      }
    }

    return pages;
  };

  return (
    <div>
      <div className="flex items-center justify-center mt-4">
        <span className="text-brandPrimary">Show More</span>
      </div>
      <div className="flex justify-end ml-4 items-center">
        <button
          onClick={onPrevClick}
          disabled={currentPage === 1}
          className={`pagination-button ${
            currentPage === 1 ? "bg-gray-200" : "bg-brandPrimary"
          } text-white h-8 w-8 mx-1`}
        >
          <FaAngleLeft className="ml-2" />
        </button>
        <div className="mx-2 flex">
          {renderPageNumbers()}
        </div>
        <button
          onClick={onNextClick}
          disabled={currentPage === totalPages}
          className={`pagination-button ${
            currentPage === totalPages ? "bg-gray-200" : "bg-brandPrimary"
          } text-white h-8 w-8 mx-1`}
        >
          <FaAngleRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
