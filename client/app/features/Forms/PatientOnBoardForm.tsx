"use client";
import { CustomForm } from "@/app/custom-components/dynamic-form/Index";
import { FormSchema } from "@/app/custom-components/dynamic-form/types";

import { FieldValues } from "react-hook-form";

const Submithandler = async (data: FieldValues) => {
  // post the data to the backend
  console.log(data);
};

const formSchema: FormSchema = {
  formName: "Patient On-Board Form",
  schema: [
    {
      name: "Basic Info",
      noOfCol: 2,
      fields: [
        {
          id: "firstName",
          type: "text",
          label: "First Name",
          placeholder: "Enter first name",
          required: true,
          patternmatch: /[^a-zA-Z\s]/g ,
        },
        {
          id: "lastName",
          type: "text",
          label: "Last Name",
          placeholder: "Enter last name",
          required: true,
          patternmatch: /[^a-zA-Z\s]/g
        },
        {
          id: "dob",
          type: "date",
          label: "Date of Birth",
          required: true
        },
        {
          id: "gender",
          type: "select",
          label: "Gender",
          required: true,
          selectOptions: [
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Other", value: "other" }
          ]
        },
        {
          id: "maritalStatus",
          type: "select",
          label: "Marital Status",
          required: false,
          selectOptions: [
            { label: "Single", value: "single" },
            { label: "Married", value: "married" },
            { label: "Divorced", value: "divorced" },
            { label: "Widowed", value: "widowed" }
          ]
        },
        {
          id: "bloodGroup",
          type: "select",
          label: "Blood Group",
          required: false,
          selectOptions: [
            { label: "A+", value: "A+" },
            { label: "A-", value: "A-" },
            { label: "B+", value: "B+" },
            { label: "B-", value: "B-" },
            { label: "AB+", value: "AB+" },
            { label: "AB-", value: "AB-" },
            { label: "O+", value: "O+" },
            { label: "O-", value: "O-" }
          ]
        }
      ]
    },

    {
      name: "Contact Details",
      noOfCol: 2,
      fields: [
        {
          id: "mobile",
          type: "text",
          label: "Mobile Number",
          placeholder: "Enter mobile number",
          required: true,
          patternmatch: /[^0-9]/g,   // only digits allowed
          maxLength: 10
        },
        {
          id: "email",
          type: "email",
          label: "Email",
          placeholder: "Enter email",
          required: false
        },
        {
          id: "address",
          type: "textarea",
          label: "Address",
          placeholder: "Enter full address",
          required: true
        },
        {
          id: "city",
          type: "text",
          label: "City",
          placeholder: "Enter city",
          required: true,
          patternmatch: /[^a-zA-Z\s]/g
        },
        {
          id: "state",
          type: "text",
          label: "State",
          placeholder: "Enter state",
          required: true,
          patternmatch: /[^a-zA-Z\s]/g
        },
        {
          id: "pincode",
          type: "text",
          label: "Pincode",
          placeholder: "Enter pincode",
          required: true,
          patternmatch: /[^0-9]/g,
          maxLength: 6
        }
      ]
    },

    {
      name: "Emergency Contact",
      noOfCol: 2,
      fields: [
        {
          id: "emergencyName",
          type: "text",
          label: "Contact Person Name",
          placeholder: "Enter name",
          required: true,
          patternmatch: /[^a-zA-Z\s]/g
        },
        {
          id: "emergencyRelation",
          type: "text",
          label: "Relation",
          placeholder: "Father / Mother / Spouse",
          required: true,
          patternmatch: /[^a-zA-Z\s/]/g
        },
        {
          id: "emergencyMobile",
          type: "text",
          label: "Emergency Mobile",
          placeholder: "Enter mobile number",
          required: true,
          patternmatch: /[^0-9]/g,
          maxLength: 10
        }
      ]
    },

    {
      name: "Medical Details",
      noOfCol: 2,
      fields: [
        {
          id: "allergies",
          type: "textarea",
          label: "Allergies",
          placeholder: "Enter allergies if any",
          required: false
        },
        {
          id: "existingDiseases",
          type: "textarea",
          label: "Existing Diseases",
          placeholder: "Diabetes, BP etc.",
          required: false
        },
        {
          id: "currentMedication",
          type: "textarea",
          label: "Current Medication",
          placeholder: "Enter medication details",
          required: false
        },
        {
          id: "height",
          type: "number",
          label: "Height (cm)",
          placeholder: "Enter height",
          required: false,
        },
        {
          id: "weight",
          type: "number",
          label: "Weight (kg)",
          placeholder: "Enter weight",
          required: false,
          min:1,
          max:300
        }
      ]
    },

    {
      name: "Insurance Details",
      noOfCol: 2,
      fields: [
        {
          id: "insuranceProvider",
          type: "text",
          label: "Insurance Provider",
          placeholder: "Enter provider name",
          required: false,
          patternmatch: /[^a-zA-Z\s]/g
        },
        {
          id: "policyNumber",
          type: "text",
          label: "Policy Number",
          placeholder: "Enter policy number",
          required: false,
          patternmatch: /[^a-zA-Z0-9\-]/g  // alphanumeric + hyphen only
        },
        {
          id: "policyExpiry",
          type: "date",
          label: "Policy Expiry Date",
          required: false
        }
      ]
    }
  ]
};


export default function PatientOnBoardForm(){
    return (
        <div className="w-full h-full">
        <CustomForm schema={formSchema} submitHandler={Submithandler} />
      </div>
    )
}