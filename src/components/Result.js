import { Field, Form, Formik, ErrorMessage } from 'formik';
import React,{useState} from 'react'
import * as Yup from 'yup'

const Result = ({searchResults}) => {

    const [policyId,setPolicyId]=useState(searchResults[0].Policy_Id)
    const [dateOfPurchase,setDateOfPurchase]=useState(searchResults[0].Date_of_Purchase)
    const [customerId,setCustomerId]=useState(searchResults[0].Customer_Id)
    const [fuel,setFuel]=useState(searchResults[0].Fuel)
    const [vehicleSegment,setVehicleSegment]=useState(searchResults[0].Vehicle_Segment)
    const [premium,setPremium]=useState(searchResults[0].Premium)
    const [bodyInjuryLiability,setBodyInjuryLiability]=useState(searchResults[0].Bodily_Injury_Liability)
    const [personalInjuryProtection,setpersonalInjuryProtection]=useState(searchResults[0].Personal_Injury_Protection)
    const [propertyDamageLiability,setpropertyDamageLiability]=useState(searchResults[0].Property_Damage_Liability)
    const [collision,setCollision]=useState(searchResults[0].Collision)
    const [comprehensive,setcomprehensive]=useState(searchResults[0].Comprehensive)
    const [gender,setGender]=useState(searchResults[0].Gender)
    const [incomeGroup,setIncomeGroup]=useState(searchResults[0].Income_Group)
    const [region,setRegion]=useState(searchResults[0].Region)
    const [maritalStatus,setMaritalStatus]=useState(searchResults[0].Marital_Status)
    console.log(searchResults)


    const initialValues = {
        "Policy_Id": policyId,
        "Date_of_Purchase": dateOfPurchase,
        "Customer_Id": customerId,
        "Fuel": fuel,
        "Vehicle_Segment": vehicleSegment,
        "Premium": premium,
        "Bodily_Injury_Liability": bodyInjuryLiability,
        "Personal_Injury_Protection": personalInjuryProtection,
        "Property_Damage_Liability": propertyDamageLiability,
        "Collision": collision,
        "Comprehensive": comprehensive,
        "Gender": gender,
        "Income_Group": incomeGroup,
        "Region": region,
        "Marital_Status": maritalStatus
    }

    const onSubmit= values => {
        console.log('Form Data', values)
    }

    const validationSchema = Yup.object({
        Policy_Id:Yup.string().required('Required'),
        Customer_Id:Yup.string().email('Invalid email format').required('Required'),
        Fuel:Yup.string().required('Required')
    })


    return (
    
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form>
                <div className='form-control'>
                    <label htmlFor='Policy_Id'>Policy Id</label>
                    <Field type="text" id='Policy_Id' value={policyId}  name='Policy_Id' readOnly />
                    <ErrorMessage name='Policy_Id' />
                </div>
                <div className='form-control'>
                    <label htmlFor='Date_of_Purchase'>Date of Purchase</label>
                    <Field type="text" value={dateOfPurchase} id='Date_of_Purchase' name='Date_of_Purchase' readOnly />
                    <ErrorMessage name='Date_of_Purchase' />
                </div>
                <div className='form-control'>
                    <label htmlFor='Customer_Id'>Customer_Id</label>
                    <Field type="text" value={customerId} id='Customer_Id' name='Customer_Id' readOnly />
                    <ErrorMessage name='Customer_Id' />
                </div>
                <div className='form-control'>
                    <label htmlFor='Fuel'>Fuel</label>
                    <Field type="text" value={fuel} onChange={e=>setFuel(e.target.value)} id='Fuel' name='Fuel' />
                    <ErrorMessage name='Fuel' />
                </div>
                <div className='form-control'>
                    <label htmlFor='Vehicle_Segment'>Vehicle_Segment</label>
                    <Field type="text" value={vehicleSegment} onChange={e=>setVehicleSegment(e.target.value)} id='Vehicle_Segment' name='Vehicle_Segment' />
                    <ErrorMessage name='Vehicle_Segment' />
                </div>
                <div className='form-control'>
                    <label htmlFor='Premium'>Premium</label>
                    <Field type="text" value={premium} onChange={e=>setPremium(e.target.value)} id='Premium' name='Premium' />
                    <ErrorMessage name='Premium' />
                </div>
                <div className='form-control'>
                    <label htmlFor='Bodily_Injury_Liability'>Bodily_Injury_Liability</label>
                    <Field type="text" value={bodyInjuryLiability} onChange={e=>setBodyInjuryLiability(e.target.value)} id='Bodily_Injury_Liability' name='Bodily_Injury_Liability' />
                    <ErrorMessage name='Bodily_Injury_Liability' />
                </div>
                <div className='form-control'>
                    <label htmlFor='Personal_Injury_Protection'>Personal_Injury_Protection</label>
                    <Field type="text" value={personalInjuryProtection} onChange={e=>setpersonalInjuryProtection(e.target.value)} id='Personal_Injury_Protection' name='Personal_Injury_Protection' />
                    <ErrorMessage name='Personal_Injury_Protection' />
                </div>
                <div className='form-control'>
                    <label htmlFor='Property_Damage_Liability'>Property_Damage_Liability</label>
                    <Field type="text" value={propertyDamageLiability} onChange={e=>setpropertyDamageLiability(e.target.value)} id='Property_Damage_Liability' name='Property_Damage_Liability' />
                    <ErrorMessage name='Property_Damage_Liability' />
                </div>
                <div className='form-control'>
                    <label htmlFor='Collision'>Collision</label>
                    <Field type="text" value={collision} onChange={e=>setCollision(e.target.value)} id='Collision' name='Collision' />
                    <ErrorMessage name='Collision' />
                </div>
                <div className='form-control'>
                    <label htmlFor='Comprehensive'>Comprehensive</label>
                    <Field type="text" value={comprehensive} onChange={e=>setcomprehensive(e.target.value)} id='Comprehensive' name='Comprehensive' />
                    <ErrorMessage name='Comprehensive' />
                </div>
                <div className='form-control'>
                    <label htmlFor='Gender'>Gender</label>
                    <Field type="text" value={gender} onChange={e=>setGender(e.target.value)} id='Gender' name='Gender' />
                    <ErrorMessage name='Gender' />
                </div>
                <div className='form-control'>
                    <label htmlFor='Income_Group'>Income_Group</label>
                    <Field type="text" value={incomeGroup} onChange={e=>setIncomeGroup(e.target.value)} id='Income_Group' name='Income_Group' />
                    <ErrorMessage name='Income_Group' />
                </div>
                <div className='form-control'>
                    <label htmlFor='Region'>Region</label>
                    <Field type="text" value={region} onChange={e=>setRegion(e.target.value)} id='Region' name='Region' />
                    <ErrorMessage name='Region' />
                </div>
                <div className='form-control'>
                    <label htmlFor='Marital_Status'>Marital_Status</label>
                    <Field type="text" value={maritalStatus} onChange={e=>setMaritalStatus(e.target.value)} id='Marital_Status' name='Marital_Status' />
                    <ErrorMessage name='Marital_Status' />
                </div>
                <button type='submit'>Submit</button>

            </Form>
            
        </Formik>
        
    )
}

export default Result
