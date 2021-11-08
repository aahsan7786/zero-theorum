import * as Yup from "yup";

export const feedbackSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Describe is required'),
});

export const dataModalSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    company: Yup.string().required('Company is required'),
    position: Yup.string().required('Position is required'),
    phone: Yup.string().required('Phone Number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
});

export const publicationModalSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    phone: Yup.string().required('Phone Number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
});

export const dataSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
});

export const calculateSchema = Yup.object().shape({
    // stopLoss: Yup.string().required('Stop Loss'),
    // email: Yup.string().email('Invalid email').required('Email is required'),
});

export const subscribeSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
});
