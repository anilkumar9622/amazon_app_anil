import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Cascader, Collapse, Dropdown } from 'antd';
import 'antd/dist/antd.css';
import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons';
import Input from './custominput';

const { Panel } = Collapse;

export default function Signup() {
    const navi = useNavigate();
    const [allValues, setAllValues] = useState({
        Name: { value: "", isValid: "" },
        phone: { value: "", isValid: "" },
        email: { value: "", isValid: "" },
        password: { value: "", isValid: "" }

    })
    const postt = () => {
        const kuchbhi = axios.post("https://mongodb-amazon.herokuapp.com/register", { name: allValues.Name.value, phone: allValues.phone.value, email: allValues.email.value, password: allValues.password.value })
            .then(response => {
                console.log(response)
                navi('/signin1', {state:allValues});
            })
    }

    const inputContent = (key, value, isValid) => {
        setAllValues((allValues) => ({ ...allValues, [key]: { value, isValid } }))
    }
    console.log(allValues);

    return (
        <>
            <div style={{ height: "auto", paddingBottom: "15px" }}>
                <div style={{ width: "125px", height: '50px', margin: "auto", marginTop: "10px" }}>
                    <svg height="-3648" viewBox="163.5 263.1 285 85.8" width="100" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill-rule="evenodd"><path d="m340.3 330.2c-16.5 12.2-40.5 18.7-61.2 18.7-29 0-55-10.7-74.8-28.5-1.5-1.4-.2-3.3 1.7-2.2 21.3 12.4 47.6 19.8 74.8 19.8 18.3 0 38.5-3.8 57.1-11.7 2.8-1.1 5.1 1.9 2.4 3.9z" fill="#f90" /><path d="m347.2 322.3c-2.1-2.7-14-1.3-19.3-.6-1.6.2-1.9-1.2-.4-2.2 9.5-6.7 25-4.7 26.8-2.5s-.5 17.8-9.4 25.2c-1.4 1.1-2.7.5-2.1-1 2-5 6.5-16.1 4.4-18.9z" fill="#f90" /><path d="m328.2 272.5v-6.5c0-1 .7-1.6 1.6-1.6h29c.9 0 1.7.7 1.7 1.6v5.5c0 .9-.8 2.1-2.2 4.1l-15 21.4c5.6-.1 11.5.7 16.5 3.5 1.1.6 1.4 1.6 1.5 2.5v6.9c0 1-1 2.1-2.1 1.5-8.9-4.7-20.8-5.2-30.6.1-1 .5-2.1-.5-2.1-1.5v-6.6c0-1 0-2.8 1.1-4.4l17.4-24.9h-15.1c-.9 0-1.7-.7-1.7-1.6zm-105.7 40.3h-8.8c-.8-.1-1.5-.7-1.6-1.5v-45.2c0-.9.8-1.6 1.7-1.6h8.2c.9 0 1.5.7 1.6 1.5v5.9h.2c2.1-5.7 6.2-8.4 11.6-8.4 5.5 0 9 2.7 11.4 8.4 2.1-5.7 7-8.4 12.2-8.4 3.7 0 7.7 1.5 10.2 5 2.8 3.8 2.2 9.3 2.2 14.2v28.6c0 .9-.8 1.6-1.7 1.6h-8.7c-.9-.1-1.6-.8-1.6-1.6v-24c0-1.9.2-6.7-.2-8.5-.7-3-2.6-3.9-5.2-3.9-2.1 0-4.4 1.4-5.3 3.7s-.8 6.1-.8 8.7v24c0 .9-.8 1.6-1.7 1.6h-8.8c-.9-.1-1.6-.8-1.6-1.6v-24c0-5 .8-12.5-5.4-12.5-6.3 0-6.1 7.2-6.1 12.5v24c-.1.8-.8 1.5-1.8 1.5zm163-49.3c13.1 0 20.2 11.2 20.2 25.5 0 13.8-7.8 24.8-20.2 24.8-12.8 0-19.8-11.2-19.8-25.2-.1-14.1 7-25.1 19.8-25.1zm0 9.3c-6.5 0-6.9 8.9-6.9 14.4s-.1 17.3 6.8 17.3c6.8 0 7.2-9.5 7.2-15.3 0-3.8-.2-8.4-1.3-12-1-3.2-3-4.4-5.8-4.4zm37.1 40h-8.8c-.9-.1-1.6-.8-1.6-1.6v-45.3c.1-.8.8-1.5 1.7-1.5h8.2c.8 0 1.4.6 1.6 1.3v6.9h.2c2.5-6.2 5.9-9.1 12-9.1 3.9 0 7.8 1.4 10.3 5.3 2.3 3.6 2.3 9.7 2.3 14.1v28.5c-.1.8-.8 1.4-1.7 1.4h-8.8c-.8-.1-1.5-.7-1.6-1.4v-24.6c0-5 .6-12.2-5.5-12.2-2.1 0-4.1 1.4-5.1 3.6-1.2 2.8-1.4 5.5-1.4 8.6v24.4c-.1.9-.9 1.6-1.8 1.6zm-117.5-21.6c0 3.4.1 6.3-1.6 9.4-1.4 2.5-3.6 4-6.1 4-3.4 0-5.4-2.6-5.4-6.4 0-7.5 6.7-8.9 13.1-8.9zm8.9 21.5c-.6.5-1.4.6-2.1.2-2.9-2.4-3.5-3.6-5.1-5.9-4.8 4.9-8.3 6.4-14.5 6.4-7.4 0-13.2-4.6-13.2-13.7 0-7.2 3.9-12 9.4-14.4 4.8-2.1 11.5-2.5 16.6-3.1v-1.1c0-2.1.2-4.6-1.1-6.4-1.1-1.6-3.1-2.3-4.9-2.3-3.4 0-6.4 1.7-7.1 5.3-.2.8-.7 1.6-1.5 1.6l-8.5-.9c-.7-.2-1.5-.7-1.3-1.8 2-10.4 11.3-13.5 19.7-13.5 4.3 0 9.9 1.1 13.3 4.4 4.3 4 3.9 9.4 3.9 15.2v13.7c0 4.1 1.7 5.9 3.3 8.2.6.8.7 1.8 0 2.3-1.9 1.5-5.1 4.3-6.9 5.8zm-124.4-21.5c0 3.4.1 6.3-1.6 9.4-1.4 2.5-3.6 4-6.1 4-3.4 0-5.4-2.6-5.4-6.4 0-7.5 6.7-8.9 13.1-8.9zm8.8 21.5c-.6.5-1.4.6-2.1.2-2.9-2.4-3.5-3.6-5.1-5.9-4.8 4.9-8.3 6.4-14.5 6.4-7.4 0-13.2-4.6-13.2-13.7 0-7.2 3.9-12 9.4-14.4 4.8-2.1 11.5-2.5 16.6-3.1v-1.1c0-2.1.2-4.6-1.1-6.4-1.1-1.6-3.1-2.3-4.9-2.3-3.4 0-6.4 1.7-7.1 5.3-.2.8-.7 1.6-1.5 1.6l-8.5-.9c-.7-.2-1.5-.7-1.3-1.8 2-10.4 11.3-13.5 19.7-13.5 4.3 0 9.9 1.1 13.3 4.4 4.3 4 3.9 9.4 3.9 15.2v13.7c0 4.1 1.7 5.9 3.3 8.2.6.8.7 1.8 0 2.3-1.9 1.5-5.1 4.3-6.9 5.8z" /></g></svg>
                </div>
                <div style={{ display: "flex", height: "auto", width: "350px", margin: 'auto', border: '1px solid lightgray', borderRadius: "4px", marginBottom: "12px" }}>

                    <div style={{ display: "flex", flexDirection: "column", width: "80%", margin: "auto", paddingTop: "25px", paddingBottom: "25px", gap: "15px" }}>
                        <h2 style={{ height: "6px", fontWeight: "500", fontSize: "30px", marginBottom: "18px" }}>Create Account</h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                            <b style={{ fontSize: "0.9em" }}>Your name</b>
                            <Input type='text'
                                name="Name"
                                inputContent={inputContent}
                                placeholder="Name..."
                                style={{ height: "2em", border: "1px solid black", borderRadius: "4px" }}></Input>
                            {allValues.Name.isValid && <small style={{ color: "red" }}> <i>enter name</i> </small>}

                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                            <b style={{ fontSize: "0.9em" }}>Mobile Number </b>

                            <Input

                                addonBefore={
                                    <Dropdown overlay={''} trigger={['click']} >
                                        {/* // <div className="ant-dropdown-link" onClick={e => e.preventDefault()} stylr={drop} > */}
                                        <a>   All <CaretDownOutlined /></a>
                                        <Cascader style={{ width: '145%', padding: '0' }} defaultValue='All.....' changeOnSelect id='sett' />
                                    </Dropdown>
                                }
                                id="mobile"
                                style={{ backgroundColor: 'red', width: '20px !important' }}
                                type="text"
                                inputContent={inputContent}
                                placeholder="Phone"
                                name="phone"
                            ></Input>
                            {allValues.phone.isValid && <small style={{ color: "red" }}> <i>enter valid phone</i> </small>}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                            <b style={{ fontSize: "0.9em" }}>Email</b>
                            <Input type='text'
                                inputContent={inputContent}
                                name="email"
                                placeholder='Email'></Input>
                            {allValues.email.isValid && <small style={{ color: "red" }}> <i>enter valid email</i> </small>}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                            <b style={{ fontSize: "0.9em" }}>Password</b>
                            <Input type='text'
                                inputContent={inputContent}
                                name="password"
                                placeholder='At least 6 caracters'></Input>
                            <b style={{ fontSize: "0.8em" }}><i>i</i>  Passwords must be at least 6 characters.</b>
                            {allValues.password.isValid && <small style={{ color: "red" }}> <i>enter strong password</i> </small>}
                        </div>

                        <button onClick={postt} href='/signin1' style={{ height: "2.5em", background: "linear-gradient(to bottom,#f8e3ad,#EEBA37)", border: "1px solid #c89411", borderRadius: "4px" }}>Continue</button>
                        <div style={{ display: "flex", flexWrap: "wrap", width: "100%", heigth: "auto" }}>
                            <p style={{ fontSize: "0.8em", marginTop: '0px' }}>By continuing, you agree to Amazon's <span
                                style={{ color: " #0066c0" }}>
                                conditions of use <span style={{ color: "black" }}>and</span> privacy heading
                            </span></p>

                            <div style={{
                                display: "flex", justifyContent: "center", width: "100%", height: '4em', flexDirection: "column",
                                alignItems: "center", background: "linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.06) 0px,transparent)"
                            }}>
                                <div style={{ width: "100%", textAlign: "start", fontSize: "0.9em" }}>Already have an account?<a href='/signin1' style={{ color: " #0066c0", }}>Sign in</a> </div>
                                <div style={{ width: "100%", textAlign: "start", fontSize: "0.9em" }}>Buying for work?<a href="/otp" style={{ color: " #0066c0", }}>Create a free business account</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='Background' style={{ display: "flex", gap: "28px", justifyContent: "center", width: "100%", height: '4em', alignItems: "center", background: "linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3px,transparent)" }}>
                <a style={{ color: " #0066c0", fontSize: "0.8em" }}> Conditions of Use  </a>
                <a style={{ color: " #0066c0", fontSize: "0.8em" }}> Privacy Notice  </a>
                <a style={{ color: " #0066c0", fontSize: "0.8em" }}> Help  </a>
            </div>
            <div style={{ width: "100%", textAlign: "center", fontSize: "0.8em" }}>© 1996-2022, Amazon.com, Inc. or its affiliates </div>


        </>
    )
}