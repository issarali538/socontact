
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
// import DataTable from 'react-data-table-component';
import DataTable from "../../Config/DataTable";
import { Data } from "../Data";

const Leads = () => {

    const [tbldata, setTbleData] = useState(Data);
    const [search, setSearch] = useState('');

    const columns = [
        {
            name: 'Id',
            selector: row => row.id,
            sortable: true
        },
        {
            name: 'name',
            selector: row => row.name,
            sortable: true
        },
        
        {
            name: "Actions",
            cell: row => <>
                <button className="btn btn-sm  text-info"><i className="fa fa-pen"></i></button>
                <button className="btn btn-sm text-info"><i className="fa fa-eye"></i></button>
                <button className="btn btn-sm text-info"><i className="fa fa-trash"></i></button>
            </>
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
        {
            name: 'userGain',
            selector: row => row.userGain
        },
        {
            name: 'userLost',
            selector: row => row.userLost
        },
    ];

    const filteredItems = tbldata.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        setTbleData(filteredItems);
    }, [tbldata]);

    return (
        <div className="dash-panel component">
            <div className="component-content lead-1" id="leads">
                <Container>
                    <Row>
                        <div className="col-12">
                            <button className="btn btn-warning me-3">Leads</button>
                            <button className="btn btn-outline-info">Waiting List</button>
                        </div>

                        <div className="col-12 pt-4">
                            <div className="d-flex justify-content-between">
                                <div className="btns-wrapper">
                                    <button className="btn btn-outline-info m-2"><i className="fa fa-filter me-2 text-muted"></i>Sort By</button>
                                    <button className="btn btn-outline-info m-2"><i className="fa fa-user me-2"></i>Add By</button>
                                </div>

                                <div className="search-input-wrapper">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text search-feild-icon text-muted">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </span>
                                        <input type="text" onChange={e => setSearch(e.target.value)} value={search} id="search" className="form-control tbl-search-feild" placeholder="Search..." aria-label="search" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 pt-5">
                            <div className="d-inline">
                            </div>
                            <div className="d-flex justify-content-between flex-column flex-md-row">
                                <div className="btns-wrapper d-flex d-sm-block flex-column">
                                    <h4 className="fw-bold d-inline m-3">1234 Leads</h4>
                                    <button className="btn btn-outline-info m-2"><i className="fa fa-filter me-2 text-muted"></i>Sort By</button>
                                    <button className="btn btn-outline-info m-2"><i className="fa fa-user me-2"></i>Add By</button>
                                </div>

                                <div className="">
                                    <div className="">
                                        <button className="btn btn-outline-info m-2"><i className="fa fa-table"></i></button>
                                        <button className="btn btn-warning">
                                            <select className="form-select form-select-sm border-0 btn-warning export-all-sel">
                                                <option selected>Export All</option>
                                                <option><i className="fa fa-file-pdf me-1"></i>Export to pdf</option>
                                                <option><i className="fa fa-file-pdf me-1"></i>Export to pdf</option>
                                            </select>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 mt-3">
                            <div className="puglin-data-table">
                                <DataTable
                                    title={<h4>Leads 2023</h4>}
                                    columns={columns}
                                    data={tbldata}
                                    selectableRows
                                    pagination
                                    highlightOnHover
                                    responsive={true}
                                    action={<button className="btn btn-warning">Export All</button>}

                                />;
                            </div>
                        </div>

                    </Row>
                </Container>
            </div>
        </div>
    );
}

    ;

export default Leads;


