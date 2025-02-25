const SearchBar = () => {
  return (
    <div className="mb-6 relative">
      <input 
        type="text" 
        placeholder="Recherche..." 
        className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-primary"
      />
      <svg className="absolute left-3 top-3 text-gray-400 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1011 3.5a7.5 7.5 0 006.65 12.15z" />
      </svg>
    </div>
  );
};

export default SearchBar;