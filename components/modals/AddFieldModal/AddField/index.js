import { Form, Button, Row, Col, Dropdown, Accordion, Modal } from "react-bootstrap"
import TextEntry from "./FieldComponents/TextEntry"
import CheckBoxField from "./FieldComponents/Checkbox"
import ColorPickerField from "./FieldComponents/ColorPicker"
import CustomDatePickerField from "./FieldComponents/CustomDatePicker"
import DateEntryField from './FieldComponents/DateEntry'
import DropDownField from './FieldComponents/DropdownBox'
import FileImageUplaodField from './FieldComponents/FileImageUpload'
import ImageSelectionField from './FieldComponents/ImageSelection'
import NumberEntryField from './FieldComponents/NumberEntry'
import SwatchColorPickerField from './FieldComponents/SwatchColorPicker'



const AddField = ({ fieldType }) => {
    return (
        <>
            {fieldType == 'Text Entry' ? <TextEntry /> : null}
            {fieldType == 'Text Entry (Multi-line)' ? <TextEntry /> : null}
            {fieldType == 'DropDown Box' ? <DropDownField /> : null}
            {fieldType == 'Number entry' ? <NumberEntryField /> : null}
            {fieldType == 'Custom Date Picker' ? <CustomDatePickerField /> : null}
            {fieldType == 'Swatch Color Picker' ? <SwatchColorPickerField /> : null}
            {fieldType == 'Image Selection' ? <ImageSelectionField /> : null}
            {fieldType == 'File/Image Upload' ? <FileImageUplaodField /> : null}
            {fieldType == 'Checkbox' ? <CheckBoxField /> : null}
            {fieldType == 'Color Picker' ? <ColorPickerField /> : null}
            {fieldType == 'Date Entry' ? <DateEntryField /> : null}
        </>
    )
}

export default AddField