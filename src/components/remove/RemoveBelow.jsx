import HorizontalDivider from "../HorizontalDivider"

function RemoveBelow({text}) {

    return (
        <div className="removeBelow">
            <HorizontalDivider/>
            <p>{text}</p>
        </div>
    )
}
    
export default RemoveBelow