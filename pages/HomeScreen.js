import Layout from "../components/layout";
import { LoaderProvider, useLoading, ThreeDots } from "@agney/react-loading";
import LoaderScreen from "../components/loader";
import InformationCard from "../components/widgets/infoCard";
import { shopifyItems } from "../constants/constants";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import api from "../api";
import DeleteIcon from "../assets/svgIcons/deleteIcon";
import EditIcon from "../assets/svgIcons/editIcon";
import {
  Form,
  Button,
  Row,
  Col,
  Spinner,
  Dropdown,
  Table,
} from "react-bootstrap";
import Link from "next/link";
import TableSkeleton from "../components/skeletons/tableSkeleton/TableSkeleton";

const Home = () => {
  const [search, setSearch] = useState();
  const [data, setData] = useState();
  const [selectedItem, setSetlectedItem] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    api.BuilderSettings.getBuilderSettings().then((res) => {
      setData(res.data);
    });
  }, []);

  console.log("data ==>",data)

  const deleteDiscounts = async (id) => {
    await api.BuilderSettings.deleteBuilderSettings(id).then(() => {
      // updateBuilders()
    });
  };

  const columns = [
    {
      name: "Builder",
      selector: (row) => row.builder_name,
      sortable: true,
    },
    {
      name: "Edit",
      cell: (row) => (
        <Button
          variant="dark"
          onClick={() => {
            // setCurrentEditObject(row)
            // setAddProductSelectionStep(true)
          }}
        >
          <EditIcon />
        </Button>
      ),
    },
    {
      name: "Delete",
      cell: (row) => (
        <Button
          size="sm"
          variant="danger"
          onClick={() => {
            setSetlectedItem(row.id);
            deleteDiscounts(row.id);
          }}
        >
          {loading && selectedItem == row.id ? (
            <>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </>
          ) : (
            <DeleteIcon />
          )}
        </Button>
      ),
    },
  ];

  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <div style={{ padding: "8% 14%" }} className="px-15 py-6">
        <div className="head">
          <h2> BoxUp's Box Builder</h2>
          <p>Create custom, step-by-step box builders.</p>
          <hr />
        </div>
        <div className="main-card">
          <InformationCard
            heading={"Which Builder Type should you use?"}
            description={
              "We now have some options for you when it comes to setting up your builders. Each Builder Type has its benefits."
            }
          />
        </div>
        <div style={{ margin: "0 0 20px 19px" }}>
          <Link href={"/#"}>
            <button type="button" className="btn btn-outline-secondary ">
              Create Builder
            </button>
          </Link>
        </div>
        <div>
         {
             data ?  <DataTable
             title="My Builders"
             pagination
             fixedHeader
             highlightOnHover
             subHeader
             subHeaderComponent={
               <input
                 type="text"
                 placeholder="Search here"
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                 className="w-25 form-control"
               />
             }
             columns={columns}
             actions={
               <>
                 <span className="mx-2 font-bold " style={{ fontSize: "0.8em" }}>
                   Total:&nbsp;{data?.length ?? "0"}
                 </span>
                 <Button size="sm" variant="secondary">
                   Export All Recent Orders
                 </Button>
               </>
             }
             data={data?.filter((d) =>
               d.builder_name?.toLowerCase().match(search?.toLowerCase())
             )}
           />
           : <TableSkeleton/>
         }
        </div>
      </div>
    </div>
  );
};

export default Home;
