import * as Yup from 'yup';

const validate = Yup.object({
    title: Yup.string().required('title is required'),
    description: Yup.string().required('description is required'),
    short_title: Yup.string().required('short title is required'),
})
export default validate