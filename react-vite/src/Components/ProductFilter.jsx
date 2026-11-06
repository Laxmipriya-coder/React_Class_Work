
function ProductFilters({
    search,
    setSearch,
    category,
    setCategory,
    categories,
    totalProducts,
    filteredCount
}) {

    return (
        <div className="row mb-4">

            <div className="col-md-5 mb-3">

                <input
                    type="text"
                    className="form-control"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>

            <div className="col-md-4 mb-3">

                <select
                    className="form-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >

                    <option value="all">
                        All Categories
                    </option>

                    {categories.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}

                </select>

            </div>

            <div className="col-md-3 mb-3">

                <div className="bg-light rounded p-2 text-center">
                    <strong>
                        Showing {filteredCount} / {totalProducts}
                    </strong>
                </div>

            </div>

        </div>
    );
}

export default ProductFilters;