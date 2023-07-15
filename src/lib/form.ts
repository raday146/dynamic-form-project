import { InputProps } from "../utils/interface";
import { FormSection } from "src/utils/types";

export const forms: { [K in FormSection]: InputProps[] } = {
  register: [
    {
      label: "New username",
      type: "text",
      name: "username",
      placeholder: "New username",
      value: "",
      validations: {
        required: true,
      },
    },
    {
      type: "select",
      name: "rol",
      label: "Select an option: ",
      value: "",
      options: [
        {
          value: "admin",
          desc: "Admin",
        },
        {
          value: "user",
          desc: "User",
        },
        {
          value: "super-admin",
          desc: "Super Admin",
        },
      ],
      validations: {
        required: true,
      },
    },
    {
      label: "New Password",
      type: "password",
      name: "password",
      placeholder: "New password",
      value: "",
      validations: {
        required: true,
        minLength: 8,
      },
    },
    {
      label: "Repeat your password",
      type: "password",
      name: "repeat_password",
      placeholder: "Repeat password",
      value: "",
      validations: {
        required: true,
        minLength: 8,
      },
    },
  ],

  another: [
    {
      label: "E-mail address",
      type: "email",
      name: "email",
      placeholder: "correo@correo.com",
      value: "",
      validations: {
        required: true,
      },
    },
    {
      type: "select",
      name: "rol",
      label: "Select an option: ",
      value: "",
      options: [
        {
          value: "admin",
          desc: "Admin",
        },
        {
          value: "user",
          desc: "User",
        },
        {
          value: "super-admin",
          desc: "Super Admin",
        },
      ],
      validations: {
        required: true,
      },
    },
    {
      type: "radio",
      name: "gender",
      label: "Gender: ",
      value: "",
      options: [
        {
          value: "man",
          desc: "Man",
        },
        {
          value: "woman",
          desc: "Woman",
        },
        {
          value: "other",
          desc: "Other",
        },
      ],
      validations: {
        required: true,
      },
    },
    {
      type: "checkbox",
      name: "terms",
      typeValue: "boolean",
      label: "Terms and Conditions",
      value: false,
      validations: {
        required: true,
      },
    },
  ],
};
