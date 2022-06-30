import Layout from '../components/layout';
import { LoaderProvider, useLoading, ThreeDots } from '@agney/react-loading';
import LoaderScreen from '../components/loader'
import InformationCard from '../components/widgets/infoCard';
import { shopifyItems } from '../constants/constants';
import { useState } from 'react';
import DataTable from 'react-data-table-component'

const Home = () => {
    const [search, setSearch] = useState()

    return (
        <div className='bg-light' style={{ height: '100vh' }}>
            <div style={{ padding: "8% 14%" }} className='px-15 py-6'>
                <div className='head'>
                    <h2>  BoxUp's Box Builder</h2>
                    <p>Create custom, step-by-step box builders.</p>
                    <hr />
                </div>
                <div className='main-card'>
                    <InformationCard heading={'Which Builder Type should you use?'} description={'We now have some options for you when it comes to setting up your builders. Each Builder Type has its benefits.'} />
                </div>
                {/* <div>
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
                                <span className="mx-2">Total:&nbsp;{shopifyItems?.Products?.length ?? "0"}</span>
                            </>
                        }
                        data={shopifyItems?.Products?.filter((d) => d.title?.toLowerCase().match(search?.toLowerCase()))}
                    />
                </div> */}
            </div>
        </div>
    )
}

export default Home;  