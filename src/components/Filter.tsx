import React from "react";

type FilterProps = {
  onFilterChange: (priority: string) => void;
};

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="filter" className="mr-2 font-medium">
        Filter Prioritas:
      </label>
      <select
        id="filter"
        onChange={(e) => onFilterChange(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="Semua">Semua</option>
        <option value="Rendah">Rendah</option>
        <option value="Sedang">Sedang</option>
        <option value="Tinggi">Tinggi</option>
      </select>
    </div>
  );
};

export default Filter;