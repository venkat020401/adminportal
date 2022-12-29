import axios from 'axios';
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UserEdit() {
    const [isLoading, setLoading] = useState(false);
    const params = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        getUserData()

    }, [])

    let getUserData = async () => {
        try {
            const user = await axios.get(`https://63a149e3e3113e5a5c514a70.mockapi.io/userdetails/${params.userid}`)
            MyFormik.setValues(user.data);
            
        } catch (error) {

        }
    }
    const MyFormik = useFormik({
        initialValues: {
            username: "",
            email: "",
            country: "",
            state: "",
            city: ""
        },
        validate: (values) => {
            let errors = {}

            if (!values.username) {
                errors.username = "Please fill the name"

            }

            if (!values.email) {
                errors.email = "Please fill the email"
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.country) {
                errors.country = "Please select the country"

            }
            if (!values.state) {
                errors.state = "Please select the state"

            }

            if (!values.city) {
                errors.city = "Please select the city"

            }
            return errors;

        },
        onSubmit: async (values) => {
            try {
                setLoading(true)
                await axios.put(`https://63a149e3e3113e5a5c514a70.mockapi.io/userdetails/${params.userid}`, values)
                setLoading(false)
                navigate('/portal/user-list')
            } catch (error) {

            }
        }
    })
    return (
        <>
            <div className="container">
                <form onSubmit={MyFormik.handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6">
                            <label>Name</label>
                            <input
                                name="username"
                                value={MyFormik.values.username}
                                onChange={MyFormik.handleChange}
                                type="text"
                                className={`form-control ${MyFormik.errors.username ? "is-invalid" : ""}`}

                            />
                            <span style={{ color: "crimson" }}>{MyFormik.errors.username}</span>
                        </div>

                        <div className="col-lg-6">
                            <label>Email</label>
                            <input
                                name="email"
                                value={MyFormik.values.email}
                                onChange={MyFormik.handleChange}
                                type="email"
                                className={`form-control ${MyFormik.errors.email ? "is-invalid" : ""}`}
                            />
                            <span style={{ color: "crimson" }}>{MyFormik.errors.email}</span>
                        </div>
                        <div className="col-lg-4 mt-3">
                            <label>Country</label>
                            <select
                                name="country"
                                value={MyFormik.values.country}
                                onChange={MyFormik.handleChange}
                                className={`form-control ${MyFormik.errors.country ? "is-invalid" : ""}`}
                            >
                                <option value={""}>--select--</option>
                                <option value={"IND"}>India</option>
                                <option value={"USA"}>United States of America</option>
                                <option value={"UK"}>United Kingdom</option>
                                <option value={"UAE"}>United Arab Emirates</option>
                            </select>
                            <span style={{ color: "crimson" }}>{MyFormik.errors.country}</span>
                        </div>
                        <div className="col-lg-4 mt-3">
                            <label>State</label>
                            <select
                                name="state"
                                value={MyFormik.values.state}
                                onChange={MyFormik.handleChange}
                                className={`form-control ${MyFormik.errors.state ? "is-invalid" : ""}`}
                            >
                                <option value={""}>--select--</option>
                                <option value={"TN"}>Tamil Nadu</option>
                                <option value={"KL"}>Kerala</option>
                                <option value={"S1"}>state1</option>
                                <option value={"S2"}>state2</option>
                            </select>
                            <span style={{ color: "crimson" }}>{MyFormik.errors.state}</span>
                        </div>
                        <div className="col-lg-4 mt-3">
                            <label>City</label>
                            <select
                                name="city"
                                value={MyFormik.values.city}
                                onChange={MyFormik.handleChange}
                                className={`form-control ${MyFormik.errors.city ? "is-invalid" : ""}`}
                            >
                                <option value={""}>--select--</option>
                                <option value={"CH"}>Chennai</option>
                                <option value={"DGL"}>Dindigul</option>
                                <option value={"C1"}>city1</option>
                                <option value={"C1"}>city2</option>
                            </select>
                            <span style={{ color: "crimson" }}>{MyFormik.errors.city}</span>
                        </div>
                        <div className="col-lg-3 mt-3">
                            <input type={"submit"} value={isLoading ? "Updating..." : "Update"} className="btn btn-primary" disabled={isLoading} />
                        </div>
                    </div>
                </form>

            </div>
        </>
    )
}

export default UserEdit
