import React from 'react';
import { FcSettings } from "react-icons/fc";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Navbar from './Navbar';

export default function Dashboard() {
  return (
    <>
    <Navbar/>
    <div className="mt-5">
      <table className="table table-bordered table-hover">
        <thead className="bg-light">
          <tr>
            <th>Sr. No</th>
            <th>Name</th>
            <th>Date Created</th>
            <th>Status</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">John Doe</p>
                </div>
              </div>
            </td>
            <td>04/09/2023</td>
            <td>
              <span className="badge bg-success rounded-pill">Active</span>
            </td>
            <td>Senior</td>
            <td>
              <span className='mx-1'><FcSettings /></span>
              <span className='mx-2'><IoIosCloseCircleOutline /></span>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">Alex Ray</p>
                </div>
              </div>
            </td>
            <td>25/02/2024</td>
            <td>
              <span className="badge bg-primary rounded-pill">Onboarding</span>
            </td>
            <td>Junior</td>
            <td>
              <span className='mx-1'><FcSettings /></span>
              <span className='mx-2'><IoIosCloseCircleOutline /></span>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">Kate Hunington</p>
                </div>
              </div>
            </td>
            <td>30/07/2023</td>
            <td>
              <span className="badge bg-warning rounded-pill text-dark">Awaiting</span>
            </td>
            <td>Senior</td>
            <td>
              <span className='mx-1'><FcSettings /></span>
              <span className='mx-2'><IoIosCloseCircleOutline /></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
}
