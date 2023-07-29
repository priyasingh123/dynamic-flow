const Date = (props) => {
    const onChangeEvent = (e) => {
        props.setFormValues ({...props.formValues, [e.target.id]: e.target.value})
    }

    return (  
        <div className="conatiner">
            <div className="row">
                <label className="col-2">{props.label}</label>
                <input className="col-10" type="date" id={props.label} label={props.label} value={props.elementValue} onChange={onChangeEvent} />
            </div>
        </div>  
    )
}

export default Date