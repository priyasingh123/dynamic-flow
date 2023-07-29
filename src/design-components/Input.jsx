const Input = (props) => {
    const onChangeEvent = (e) => {
        props.setFormValues ({...props.formValues, [e.target.id]: e.target.value})
        console.log ('value ',props.formValues)
    }

    return (
        <div className="conatainer">
            <div className="row">
            <label className="col-2">{props.label}</label>
            <input className="col-10" id={props.label} label={props.label} value={props.formValues[props.label]} onChange={onChangeEvent}/>
            </div>
        </div>
    )
}

export default Input