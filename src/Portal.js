import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from './Dashboard'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

function Portal() {
    return (
        <div>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <Topbar />
                        <div class="container-fluid">
                            <Outlet></Outlet>

                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Portal
