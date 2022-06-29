import DataTable from "react-data-table-component"
const DataTable = ({ data, columns }) => {
    return (
        <>
            <DataTable
                title="Discount Form"
                pagination
                fixedHeader
                highlightOnHover
                subHeader
                subHeaderComponent={
                    <input type='text' placeholder="Search here" value={search} onChange={(e) => setSearch(e.target.value)} className='w-25 form-control' />
                }
                columns={columns}
                actions={
                    <>
                        <span className="mx-2">Total:&nbsp;{data?.length ?? "0"}</span>
                    </>
                }
                data={data?.filter((d) => d.title?.toLowerCase().match(search?.toLowerCase()))}
            />
        </>
    )
}
export default DataTable