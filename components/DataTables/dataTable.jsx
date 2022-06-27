import DataTable from "react-data-table-component"
const DataTable = ({tableData}) => {
const columns=[
    {
        name:"Name",
        selector:(row)=>row.title
    },
    {
        name:"Name",
        selector:(row)=>row.title
    },
    {
        name:"Name",
        selector:(row)=>row.title
    },
    {
        name:"Name",
        selector:(row)=>row.title
    },
]
    return (
        <>
            <DataTable />
        </>
    )
}
export default DataTable