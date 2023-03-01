
import { useEffect, useState } from "react";
import { Container, Row, Offcanvas, Card } from "react-bootstrap";
// import DataTable from 'react-data-table-component';
import DataTable from "../../Config/DataTable";
import { Data } from "../Data";
import OffCanvasContent from './OffCanvasContent';

const Lead1 = () => {

    const [tbldata, setTbleData] = useState(Data);
    const [search, setSearch] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        <>
            <div className="dash-panel component">
                <div className="component-content" id="leads">
                    <Container>
                        <Row>
                            <div className="col-12">
                                <div className="clearfix">
                                    <button className="btn btn-warning m-2">Leads</button>
                                    <button className="btn btn-outline-info">Waiting List</button>
                                    <button className="float-end btn btn-outline-info m-2" onClick={handleShow}><i className="fa fa-bars"></i></button>
                                </div>
                            </div>

                            <div className="col-12 pt-4">
                                <div className="d-flex justify-content-between">
                                    <div className="btns-wrapper">
                                        <button className="btn btn-outline-info mb-1 me-3"><i className="fa fa-filter m-2 text-muted"></i>Sort By</button>
                                        <button className="btn btn-outline-info"><i className="fa fa-user m-2"></i>Add By</button>
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
                                <div className="d-flex justify-content-between">
                                    <div className="btns-wrapper">
                                        <h4 className="fw-bold d-inline m-3">1234 Leads</h4>
                                        <button className="btn btn-outline-info me-3"><i className="fa fa-filter me-2 text-muted"></i>Sort By</button>
                                        <button className="btn btn-outline-info"><i className="fa fa-user m-2"></i>Add By</button>
                                    </div>

                                    <div className="">
                                        <div className="">
                                            <button className="btn btn-outline-info m-2"><i className="fa fa-table"></i></button>
                                            <button className="btn btn-warning m-2">
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

            <Offcanvas show={show} onHide={handleClose} id="lead-page-offcanvas" placement="end">
                <Offcanvas.Header className="justify-content-end" closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <OffCanvasContent/>
                </Offcanvas.Body>
                
            </Offcanvas>

        </>
    );
}

    ;

export default Lead1;


