const ColorSwatch = (props) => {

    return (
        <div className="color_swatch" style={{
            backgroundColor: `rgb(${props.colorSwatch[0]}, ${props.colorSwatch[1]},${props.colorSwatch[2]})`
        }}>


        </div>
    )
}

export default ColorSwatch