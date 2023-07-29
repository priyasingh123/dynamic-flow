import Input from '../design-components/Input'
import Date from '../design-components/Date'
import CheckBox from '../design-components/CheckBox'
import Radio from '../design-components/Radio'
import Dropdown from '../design-components/Dropdown'

const RenderComponent = (props) => {
    const {element, formValues, setFormValues} = props

    switch (element.type) {
        case 'textbox':
            return <Input label={element.label} formValues={formValues} setFormValues={setFormValues}/>
        case 'date':
            return <Date label={element.label} formValues={formValues} setFormValues={setFormValues}/>
        case 'dropdown':
            return <Dropdown label={element.label} options={element.options} formValues={formValues} setFormValues={setFormValues}/>
        case 'checkbox':
            return <CheckBox label={element.label} options={element.options} formValues={formValues} setFormValues={setFormValues}/>
        case 'radio':
            return <Radio label={element.label} options={element.options} formValues={formValues} setFormValues={setFormValues}/>
        default:
            return <p className="text-center" style={{color: 'red'}}>Component does not exists</p>
        
    }
}

export default RenderComponent