import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';


const data = [
    { article: 'UNO STRIPE - Pyjama set - Nufferton', zalandoId: '409341312', partnerId: '409341312', productData: 'DATA', stock: 52, turnover: 2, suggestion: 'Replenish' },
    { article: 'Luxe Silk Pajama - Midnight Blue', zalandoId: '542343324', partnerId: '542343324', productData: 'DATA', stock: 60, turnover: 3, suggestion: 'Replenish' },
    { article: 'Classic Cotton Robe - White', zalandoId: '623451232', partnerId: '623451232', productData: 'DATA', stock: 45, turnover: 1.5, suggestion: 'Replenish' },
    { article: 'Velvet Lounge Set - Charcoal', zalandoId: '721534123', partnerId: '721534123', productData: 'DATA', stock: 30, turnover: 4, suggestion: 'Order Soon' },
    { article: 'Silk Slip Dress - Ruby Red', zalandoId: '876543213', partnerId: '876543213', productData: 'DATA', stock: 25, turnover: 5, suggestion: 'Order Soon' },
    { article: 'Cotton Sleepwear - Navy', zalandoId: '423423433', partnerId: '423423433', productData: 'DATA', stock: 65, turnover: 2.2, suggestion: 'Replenish' },
    { article: 'Luxe Cashmere Set - Beige', zalandoId: '564324324', partnerId: '564324324', productData: 'DATA', stock: 20, turnover: 4.5, suggestion: 'Order Soon' },
    { article: 'Bamboo Pajama Set - Black', zalandoId: '123431241', partnerId: '123431241', productData: 'DATA', stock: 35, turnover: 3.2, suggestion: 'Replenish' },
    { article: 'Wool Blend Nightwear - Grey', zalandoId: '435234231', partnerId: '435234231', productData: 'DATA', stock: 70, turnover: 1.8, suggestion: 'Replenish' },
    { article: 'Linen Sleep Set - Olive', zalandoId: '521431321', partnerId: '521431321', productData: 'DATA', stock: 18, turnover: 6.5, suggestion: 'Urgent' },
    { article: 'Flannel Pajama Set - Red Plaid', zalandoId: '343212312', partnerId: '343212312', productData: 'DATA', stock: 40, turnover: 3.8, suggestion: 'Order Soon' },
    { article: 'Silk Kimono - Gold', zalandoId: '762342134', partnerId: '762342134', productData: 'DATA', stock: 15, turnover: 7.0, suggestion: 'Urgent' },
    { article: 'Tencel Pajama Set - Grey', zalandoId: '342341212', partnerId: '342341212', productData: 'DATA', stock: 50, turnover: 2.1, suggestion: 'Replenish' },
    { article: 'Velvet Pajama Set - Emerald', zalandoId: '134212341', partnerId: '134212341', productData: 'DATA', stock: 55, turnover: 2.3, suggestion: 'Replenish' },
    { article: 'Linen Nightdress - Lavender', zalandoId: '213412432', partnerId: '213412432', productData: 'DATA', stock: 30, turnover: 4.0, suggestion: 'Order Soon' },
    { article: 'Cotton Lounge Set - Charcoal', zalandoId: '623434232', partnerId: '623434232', productData: 'DATA', stock: 65, turnover: 2.5, suggestion: 'Replenish' },
    { article: 'Modal Pajama Set - Blush Pink', zalandoId: '134123124', partnerId: '134123124', productData: 'DATA', stock: 38, turnover: 3.5, suggestion: 'Order Soon' },
    { article: 'Wool Pajama Set - Ivory', zalandoId: '652134132', partnerId: '652134132', productData: 'DATA', stock: 27, turnover: 4.8, suggestion: 'Urgent' },
    { article: 'Bamboo Nightdress - Teal', zalandoId: '732412431', partnerId: '732412431', productData: 'DATA', stock: 22, turnover: 5.5, suggestion: 'Urgent' },
    { article: 'Silk Sleep Set - Sapphire', zalandoId: '542341241', partnerId: '542341241', productData: 'DATA', stock: 48, turnover: 2.7, suggestion: 'Replenish' },
    { article: 'Luxe Pajama Set - Black', zalandoId: '423412312', partnerId: '423412312', productData: 'DATA', stock: 31, turnover: 4.3, suggestion: 'Order Soon' },
    { article: 'Velour Pajama Set - Wine', zalandoId: '123434321', partnerId: '123434321', productData: 'DATA', stock: 34, turnover: 3.0, suggestion: 'Replenish' },
    { article: 'Cotton Sleep Set - Green', zalandoId: '234132432', partnerId: '234132432', productData: 'DATA', stock: 58, turnover: 2.0, suggestion: 'Replenish' },
    { article: 'Flannel Pajama Set - Brown Plaid', zalandoId: '312312343', partnerId: '312312343', productData: 'DATA', stock: 29, turnover: 4.2, suggestion: 'Order Soon' },
    { article: 'Modal Nightwear - Pale Blue', zalandoId: '432123421', partnerId: '432123421', productData: 'DATA', stock: 20, turnover: 5.0, suggestion: 'Urgent' },
];


const Atable = () => {  // Default data to an empty array if undefined
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;

    // Handle page click and update state when a new page is selected
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    // Ensure that data exists before performing operations
    if (!data || data.length === 0) {
        return <p>No data available</p>;
    }

    // Calculate start and end indices for slicing the data
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data.slice(startIndex, endIndex);

    return (
        <div className="overflow-x-auto">
            <table className="main-table">
                <thead>
                    <tr>
                        <th>Article name</th>
                        <th>Zalando ID</th>
                        <th>Partner ID</th>
                        <th>Product data?</th>
                        <th>Current stock</th>
                        <th>Turnover rate</th>
                        <th>Replenishment suggestion </th>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {currentItems.map((item, index) => (
                        <tr key={index} className={`bg-white dark:bg-gray-800 ${index % 2 === 0 ? 'bg-green-50' : ''}`}>
                            <td style={{ textAlign: "left", paddingLeft: "30px" }}>{item.article}</td>
                            <td>{item.zalandoId}</td>
                            <td>{item.partnerId}</td>
                            <td>{item.productData}</td>
                            <td>{item.stock}</td>
                            <td>{item.turnover}</td>
                            <td>{item.suggestion}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr className="table-footer">
                        <td colSpan="7">
                            <div className="pagination-container">
                                <span className="page-info">
                                    Page {currentPage + 1} of {Math.ceil(data.length / itemsPerPage)}
                                </span>
                                <ReactPaginate
                                    previousLabel={'Previous'}
                                    nextLabel={'Next'}
                                    breakLabel={''}  // No break label (the '...' between page numbers)
                                    marginPagesDisplayed={0}  // No margin pages
                                    pageRangeDisplayed={false}  // Do not display page numbers
                                    pageCount={Math.ceil(data.length / itemsPerPage)}  // Calculate total pages
                                    onPageChange={handlePageClick}  // Handle page click events
                                    containerClassName={'pagination'}  // Pagination container styling
                                    forcePage={currentPage}  // Synchronize with current page state
                                    initialPage={0}  // Start on the first page
                                />

                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};
export default Atable;
